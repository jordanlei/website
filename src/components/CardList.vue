<script setup>
defineProps({
  items: Array
})

const cardImageStyle = {
  display: "block",
  width: "100px",
  height: "auto",
  paddingBottom: "10px",
};
</script>

<template>
  <div class="flex-row" style="gap: 20px">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex-row frostedCard"
      style="width: 100%; margin-bottom: 15px; align-items: flex-start"
    >
      <div style="flex: 0 0 130px; margin-top: 5px">
        <img
          :src="item.image"
          width="120"
          height="120"
          :style="cardImageStyle"
          :alt="item.alt || ''"
        />
      </div>
      <div style="flex: 1; padding-left: 20px">
        <slot :name="'caption-' + index">
          <div v-html="item.caption"></div>
        </slot>
      </div>
    </div>
  </div>
</template>
