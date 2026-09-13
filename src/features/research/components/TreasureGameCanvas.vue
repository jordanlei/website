<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

/*
 * High-fidelity, self-playing port of the real "treasure hunt" game
 * (treasure_plus/experiment/src: utils.js, gamehelper.js, game.js).
 *
 * The rendering is copied faithfully onto a <canvas> — same layout, chest sizes,
 * "you are here" pin size (36x50), fonts, and game window — so the playthrough
 * looks EXACTLY like the real game. The only difference: instead of waiting for
 * F/J keypresses, an auto-player drives the descent.
 *
 * MULTI-INSTANCE SAFETY: the source uses module globals (document.getElementById
 * ('gameCanvas'), a module-level interval `id`, module-level sprite Images). Here
 * everything is per-instance: a template ref to THIS component's canvas, the
 * interval/timeout handles in component scope, and per-instance sprite Images. So
 * several GameCanvas instances can live on different slides without clobbering.
 */

const props = defineProps({
  pUnreliable: { type: Number, default: 0 },
  pVolatile: { type: Number, default: 0 },
  pTransition: { type: Number, default: 0 },
  showEZone: { type: Boolean, default: false },
  header: { type: String, default: '' },
  n: { type: Number, default: 8 },   // tree depth (rows)
  showControls: { type: Boolean, default: true },   // "Move Left or Right" hint
})

// fires each time the auto-player commits a move: 'F' (left) or 'J' (right)
const emit = defineEmits(['move'])

const A = '/images/research/treasure'

// ── ported constants (utils.js) ────────────────────────────────────────────
const size_default = 100
const size_visit = 1.3 * size_default
const coinsize = 45
const COIN_COLOR = [224, 178, 9]

// ── ported helpers (utils.js) ──────────────────────────────────────────────
function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo)) + lo
}

function zeros(dims) {
  if (dims.length === 0) return 0
  const [n, ...rest] = dims
  return Array.from({ length: n }, () => zeros(rest))
}

function pascal(n, normalize) {
  const p = zeros([n, n])
  for (let row = 0; row < n; row++) {
    for (let col = 0; col <= row; col++) {
      if (col === 0 || row === col) {
        p[row][col] = 1
      } else {
        p[row][col] = p[row - 1][col - 1] + p[row - 1][col]
      }
    }
  }
  if (normalize) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col <= row; col++) {
        p[row][col] = p[row][col] / Math.pow(2, row)
      }
    }
  }
  return p
}

function dotprod(a, b) {
  return a.flat().reduce((sum, val, i) => sum + val * b.flat()[i], 0)
}

function get_coords(width, r, c, offset) {
  if (!offset) offset = 0
  const minY = 160
  const spacing = size_visit * 1.15
  const centerX = width / 2 / 3
  const posX = centerX - (spacing / 2) * r + spacing * c + offset
  const posY = minY + r * (spacing / 2 + 10)
  return [posX, posY]
}

// ── ported board generation (gamehelper.js) ────────────────────────────────
function initialize_game(n) {
  const board = zeros([n, n])
  for (let row = 0; row < n; row++) {
    for (let col = 0; col <= row; col++) {
      board[row][col] = randint(1, 10)
    }
  }
  board[0][0] = 0
  return board
}

function create_boards(n, p_unreliable, p_volatile, p_transition) {
  const oracle = zeros([n, n])
  const boards = zeros([n, n, n])
  const is_unreliable = zeros([n, n])
  const is_volatile = zeros([n, n, n])
  const is_transition = zeros([n - 1])

  boards[0] = initialize_game(n)
  for (let row = 1; row < n; row++) {
    for (let col = 0; col <= row; col++) {
      for (let frame = 1; frame < n; frame++) {
        if (Math.random() < p_volatile && row >= frame) {
          is_volatile[frame][row][col] = true
          boards[frame][row][col] = randint(1, 10)
        } else {
          is_volatile[frame][row][col] = false
          boards[frame][row][col] = boards[frame - 1][row][col]
        }
      }
      oracle[row][col] = boards[n - 1][row][col]

      if (Math.random() < p_unreliable) {
        oracle[row][col] = randint(1, 10)
        is_unreliable[row][col] = true
      }
    }
    if (Math.random() < p_transition) {
      is_transition[row - 1] = true
    }
  }

  return [boards, oracle, is_unreliable, is_volatile, is_transition]
}

// ── ported Game class (game.js) ────────────────────────────────────────────
class Game {
  constructor(args) {
    this.n = args.n || 8
    this.p_unreliable = args.p_unreliable || 0.0
    this.p_volatile = args.p_volatile || 0.0
    this.p_transition = args.p_transition || 0.0
    this.show_e_zone = args.show_e_zone || false
    this.is_learnable = args.is_learnable || false
    this.learn_flip_regime = args.learn_flip_regime ?? null
    this.reset()
  }

  reset() {
    const board_vars = create_boards(this.n, this.p_unreliable, this.p_volatile, this.p_transition)
    this.boards = board_vars[0]
    this.oracle = board_vars[1]
    this.is_unreliable = board_vars[2]
    this.is_volatile = board_vars[3]
    this.is_transition = board_vars[4]

    const pasc = pascal(this.n, true)
    this.baseline = dotprod(pasc, this.oracle)

    this.done = false
    this.actions = []
    this.path = []
    this.tuplepath = []
    this.r = 0
    this.c = 0

    this.path.push(this.r + ',' + this.c)
    this.tuplepath.push([this.r, this.c])

    this.total = this.oracle[this.r][this.c]
  }

  act(moveLeft) {
    // boolean -> 0/1 (matches original coercion in `this.c + moveLeft`)
    moveLeft = moveLeft ? 1 : 0
    this.actions.push(moveLeft)

    let flipped
    if (this.learn_flip_regime === 'stochastic') {
      flipped = this.is_transition[this.r]
    } else if (this.learn_flip_regime === 'top') {
      flipped = this.r < 3
    } else if (this.learn_flip_regime === 'bottom') {
      flipped = this.r >= 3
    } else {
      flipped = this.is_learnable ? this.r >= 3 : this.is_transition[this.r]
    }
    this.c = flipped ? this.c + moveLeft : this.c + (1 - moveLeft)
    this.r = this.r + 1

    this.total += this.oracle[this.r][this.c]

    this.path.push(this.r + ',' + this.c)
    this.tuplepath.push([this.r, this.c])

    this.tuplepath.forEach((e) => {
      this.boards[this.r][e[0]][e[1]] = this.oracle[e[0]][e[1]]
    })

    this.done = this.r === this.n - 1
    return true
  }
}

// ── per-instance sprites ───────────────────────────────────────────────────
const img = {
  closed: new Image(),
  openBack: new Image(),
  openFront: new Image(),
  youAreHere: new Image(),
  coinDefault: new Image(),
  coinVisit: new Image(),
  closedMagic: new Image(),
}

function loadSprites() {
  const specs = [
    [img.closed, 'closed'],
    [img.openBack, 'open-back'],
    [img.openFront, 'open-front'],
    [img.youAreHere, 'youarehere'],
    [img.coinDefault, 'coin_default'],
    [img.coinVisit, 'coin_visit'],
    [img.closedMagic, 'closed_magic'],
  ]
  return Promise.all(
    specs.map(
      ([image, name]) =>
        new Promise((resolve) => {
          image.onload = resolve
          image.onerror = resolve
          image.src = `${A}/${name}.png`
        })
    )
  )
}

// ── ported draw helpers (gamehelper.js) — ctx passed in, sprites per-instance ─
function draw_start_node(ctx, game) {
  ctx.drawImage(game.r === 0 ? img.coinVisit : img.coinDefault, -40, -40, 80, 80)
  ctx.font = '23px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = 'black'
  ctx.fillText('START', 0, 8)
  ctx.restore()
  ctx.save()
}

function draw_you_are_here(ctx, width, game, counter, transition_time) {
  if (counter > transition_time) {
    const [posX, posY] = get_coords(width, game.r, game.c)
    ctx.save()
    ctx.translate(posX - 18, posY - 90)
    ctx.drawImage(img.youAreHere, 0, 0, 36, 50)
    ctx.restore()
  }
}

function draw_earthquake_zone(ctx, width, game, counter, transition_time) {
  if (!game.show_e_zone) return

  const y = get_coords(width, game.r, game.c)[1] + size_default / 2
  const shouldDraw = game.r === 0 || counter >= transition_time
  if (shouldDraw) {
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.setLineDash([10, 10])
    ctx.strokeStyle = 'black'
    ctx.moveTo(-width, y)
    ctx.lineTo(width, y)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.restore()
    ctx.save()
  }
}

function draw_chests(ctx, width, game, counter, transition_time) {
  const size = size_default
  const angle = Math.sin(counter / 6) / 5
  const is_animated = counter < transition_time
  ctx.font = '33px sans-serif'
  ctx.textAlign = 'center'

  for (let row = 1; row < game.n; row++) {
    for (let col = 0; col < row + 1; col++) {
      const [posX, posY] = get_coords(width, row, col)
      const is_volatile = game.is_volatile[game.r][row][col]
      const is_current = row === game.r && col === game.c
      const is_unreliable = game.is_unreliable[row][col]

      ctx.save()
      ctx.translate(posX, posY)

      // case 1: already visited
      if (game.path.includes(row + ',' + col) && !is_current) {
        ctx.translate(-size / 2, -size / 2)
        ctx.drawImage(img.openBack, 0, 0, size, size)
        ctx.drawImage(img.coinDefault, size / 2 - coinsize / 2, size / 2 - coinsize / 2 - 35, coinsize, coinsize)
        ctx.fillStyle = 'black'
        ctx.fillText(game.oracle[row][col], size / 2, size / 2 - 25)
      }

      // case 2: currently being visited
      else if (is_current) {
        if (is_animated) {
          const shaken = is_unreliable || is_volatile
          ctx.rotate(shaken ? angle : 0)
          ctx.translate(-size / 2, -size / 2)
          ctx.drawImage(shaken ? img.closedMagic : img.closed, 0, 0, size, size)
          ctx.fillStyle = 'white'
          ctx.fillText(game.boards[Math.max(0, game.r - 1)][row][col], size / 2, size / 2 + 30)
        } else {
          const tx = Math.max(0, Math.min(transition_time, (counter - transition_time) / 2))
          const radius = 25
          ctx.translate(-size_visit / 2, -size_visit / 2)
          ctx.drawImage(img.openBack, 0, 0, size_visit, size_visit)
          ctx.beginPath()
          ctx.arc(size_visit / 2, size_visit / 2 - tx, radius, 0, 2 * Math.PI, false)
          ctx.fillStyle = 'rgb(' + COIN_COLOR.join() + ')'
          ctx.fill()
          ctx.fillStyle = 'black'
          ctx.fillText(game.oracle[row][col], size_visit / 2, size_visit / 2 + 10 - tx)
          ctx.drawImage(img.openFront, 0, 0, size_visit, size_visit)
        }
      }

      // case 3: not visited yet
      else {
        ctx.rotate(is_volatile && is_animated ? angle : 0)
        ctx.translate(-size / 2, -size / 2)
        ctx.drawImage(is_volatile && is_animated ? img.closedMagic : img.closed, 0, 0, size, size)
        ctx.fillStyle = 'white'
        const displayValue =
          game.dest_labels && row === game.n - 1
            ? game.dest_labels[col]
            : game.boards[Math.max(0, game.r - 1)][row][col]
        ctx.fillText(displayValue, size / 2, size / 2 + 30)
      }
      ctx.restore()
    }
  }
}

function draw_path(ctx, width, game, counter, transition_time) {
  ctx.save()
  const is_animated = counter < transition_time

  if (is_animated) {
    const row = game.r
    const col = game.c

    if (row > 0) {
      const prevaction = game.actions[row - 1]
      const [, prevcol] = game.tuplepath[row - 1]

      const expectedcol = prevcol + (1 - prevaction)
      const flipped = col !== expectedcol

      ctx.strokeStyle = flipped
        ? `rgba(${counter < transition_time ? (255 * counter) / transition_time : 255},0,0,0.6)`
        : 'rgba(0, 0, 0, 0.6)'
      const [prevX, prevY] = get_coords(width, row - 1, prevcol)
      const [posX, posY] = get_coords(width, row, col)
      const [otherX] = get_coords(width, row, expectedcol)
      const tr = (transition_time - counter) / transition_time

      ctx.beginPath()
      ctx.moveTo(prevX, prevY)
      ctx.lineWidth = 10
      ctx.lineTo(flipped ? otherX * tr + (1 - tr) * posX : posX, posY)
      ctx.globalCompositeOperation = 'destination-over'
      ctx.stroke()
      ctx.globalCompositeOperation = 'source-over'
    }
  }
  ctx.restore()
}

// render one frame — uses THIS instance's canvas/ctx (no getElementById)
function render_game_frame(ctx, width, g, counter) {
  ctx.clearRect(0, 0, width, width) // width>height, clears the whole (scaled) canvas
  ctx.save()
  const [startX, startY] = get_coords(width, 0, 0)
  ctx.translate(startX, startY)

  draw_start_node(ctx, g)
  draw_you_are_here(ctx, width, g, counter, 20)
  draw_earthquake_zone(ctx, width, g, counter, 60)
  draw_chests(ctx, width, g, counter, 60)
  draw_path(ctx, width, g, counter, 60)
  ctx.restore()
}

// ── component state / auto-player ──────────────────────────────────────────
const canvasEl = ref(null)
const total = ref(0)

let ctx = null
let game = null
let counter = 0
let intervalId = null
let resetTimeout = null
let disposed = false

const INTERVAL = 8 // ms per tick (matches the game's brisk 5ms feel)
const MOVE_TIME = 195 // ticks per move (~1560ms) — a beat slower, easier to follow
const HOLD = 2000 // ms to hold on the finished board before looping

// pick a move: bias toward the higher VISIBLE label, else random.
// returns boolean moveLeft (true = F/left child at col c, false = J/right child at col c+1).
function pickMove() {
  const r = game.r
  const c = game.c
  const frame = Math.max(0, r - 1)
  const leftLabel = game.boards[frame][r + 1][c]
  const rightLabel = game.boards[frame][r + 1][c + 1]
  if (leftLabel !== rightLabel) {
    return leftLabel > rightLabel
  }
  return Math.random() < 0.5
}

function frame() {
  if (!ctx || !game) return
  render_game_frame(ctx, canvasEl.value.width, game, counter)

  if (counter >= MOVE_TIME) {
    if (game.done) {
      // reached the last row: hold on the reveal, then regenerate and loop
      if (!resetTimeout) {
        resetTimeout = setTimeout(() => {
          resetTimeout = null
          game.reset()
          total.value = game.total
          counter = 0
        }, HOLD)
      }
      counter++
    } else {
      const move = pickMove()
      emit('move', move ? 'F' : 'J')  // true = left = F, false = right = J
      game.act(move)
      total.value = game.total // Points already reflects the arrived chest (as in the real game)
      counter = 0
    }
  } else {
    counter++
  }
}

onMounted(async () => {
  await loadSprites()
  const canvas = canvasEl.value
  if (disposed || !canvas) return

  // Copy the game EXACTLY so layout / pin size match, but trim the canvas to the
  // actual tree extent — both HEIGHT (depth) and WIDTH (span) — so shallow trees
  // (mini condition demos) fill their window instead of being fit small by
  // object-fit: contain around empty margins.
  const rowStep = (size_visit * 1.15) / 2 + 10 // 84.75, matches get_coords posY step
  const designH = Math.round(160 + (props.n - 1) * rowStep + 140) // top(160)+rows+bottom margin
  // get_coords centers the tree on design-x = width/2/3 = designW/2, i.e. the
  // middle of the canvas. So trimming the width auto-centers: pick a width that
  // just holds the bottom row (spans ±(spacing/2)(n-1)) plus a half-chest + margin.
  const spacing = size_visit * 1.15 // 149.5, matches get_coords
  const halfSpan = (spacing / 2) * (props.n - 1) + size_visit / 2 + 40
  const designW = Math.round(2 * halfSpan)
  canvas.width = 3 * designW
  canvas.height = 3 * designH
  ctx = canvas.getContext('2d')
  ctx.scale(3, 3) // draw in design space (centerX = designW/2)

  game = new Game({
    n: props.n,
    p_unreliable: props.pUnreliable,
    p_volatile: props.pVolatile,
    p_transition: props.pTransition,
    show_e_zone: props.showEZone,
  })
  total.value = game.total
  counter = 0

  intervalId = setInterval(frame, INTERVAL)
})

onUnmounted(() => {
  disposed = true
  if (intervalId) clearInterval(intervalId)
  if (resetTimeout) clearTimeout(resetTimeout)
  intervalId = null
  resetTimeout = null
})
</script>

<template>
  <div class="game-window">
    <div class="game-topbar">
      <div class="points">
        Points: {{ total }}
      </div>
      <div
        v-if="header"
        class="cond-header"
      >
        {{ header }}
      </div>
    </div>

    <div class="canvas-box">
      <canvas
        ref="canvasEl"
        class="game-canvas"
      />
    </div>

    <div
      v-if="showControls"
      class="move-hint"
    >
      Move Left or Right with "F" and "J"
    </div>
  </div>
</template>

<style scoped>
.game-window {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  background: rgba(255, 253, 248, .58);
  font-family: var(--mono-font);
  color: #111;
}

.game-topbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  flex: 0 0 auto;
}

.points {
  font-weight: 700;
  font-size: 1.12rem;
  line-height: 1.1;
}

.cond-header {
  font-size: var(--research-meta, .84rem);
  color: #6b7280;
  text-align: center;
}

.canvas-box {
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-canvas {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #fffdf8;
  border-radius: 6px;
  box-shadow: inset 0 0 16px rgba(31, 47, 49, 0.1), inset 0 2px 7px rgba(31, 47, 49, 0.07);
}

.move-hint {
  flex: 0 0 auto;
  font-size: var(--research-meta, .84rem);
  color: #333;
}
</style>
