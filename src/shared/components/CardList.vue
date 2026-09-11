<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const cardImageStyle = {
  display: "block",
  width: "100px",
  height: "auto",
  paddingBottom: "10px",
};
</script>

<template>
  <div
    class="flex-row"
    style="gap: 20px"
  >
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
        >
      </div>
      <div style="flex: 1; padding-left: 20px">
        <h4>{{ item.period || item.organization }}</h4>
        <h3>{{ item.title }}</h3>
        <p v-if="item.organization && item.period">
          {{ item.organization }}
        </p>
        <ul v-if="item.details?.length">
          <li
            v-for="detail in item.details"
            :key="detail"
          >
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
