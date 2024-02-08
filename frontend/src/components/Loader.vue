<template>
  <span class="loader"></span>
</template>

<style scoped lang="sass">
.loader
  border: 2px solid #ffffff
  border-top: 2px solid #4C8BF7
  border-radius: 50%
  width: 20px
  height: 20px
  animation: spin 1s linear infinite

@keyframes spin
  to
    transform: rotate(360deg)
</style>