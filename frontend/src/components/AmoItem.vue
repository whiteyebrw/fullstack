<template>
  <div class="item">
    <div class="label">{{ label }}</div>
    <div class="id">{{ id }}</div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="sass">
.item
  display: flex
  border: 1px solid #4C8BF7
  width: 300px
  gap: 4px
  justify-content: center
</style>