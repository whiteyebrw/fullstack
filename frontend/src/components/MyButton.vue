<template>
  <button :class="['btn', isActive ? 'active' : '']" :disabled="!isActive">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped lang="sass">
.btn
  display: flex
  justify-content: center
  align-items: center
  width: 100px
  height: 30px
  border: 1px solid #F5F6F6
  border-radius: 3px

  &.active
    color: white
    background-color: #4C8BF7

</style>