<template>
  <div>
    <select id="dropdown" @change="this.$emit('update:modelValue',  $event.target.value)" :value="modelValue">
      <option
          v-for="(option, index) in dropdownOptions"
          :value="option.value"
          :key="index"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import type {DropdownOption} from '@/types'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  dropdownOptions: {
    type: Array<DropdownOption>
  }
})
</script>

<style lang="sass" scoped>
#dropdown
  width: 200px
  height: 30px
  border: 1px solid #ccc
  border-radius: 4px
  font-size: 16px
</style>
