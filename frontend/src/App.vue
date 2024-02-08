<!--it's bad practice to write inline style sry-->
<template>
  <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
    <div style="display: flex; padding-bottom: 10px; gap: 8px">
      <Dropdown v-model="selectedOption" :dropdown-options="options"/>

      <my-button :is-active="isActive" @click="submit">
        <loader v-show="pending"></loader>
        <span v-show="!pending">{{ isActive ? 'Сохранить' : 'Создать' }}</span>
      </my-button>
    </div>

    <div v-if="rootStore.entities" style="display: flex; flex-direction: column; gap: 8px">
      <AmoItem
          v-for="entity in rootStore.entities"
          :id="entity.id"
          :key="entity.id"
          :label="entity.label"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/MyButton.vue'
import Dropdown from '@/components/Dropdown.vue'
import Loader from '@/components/Loader.vue'
import {computed, ref, watch} from 'vue'
import {useRootStore} from '@/stores/root'
import type {DropdownOption} from '@/types'
import AmoItem from '@/components/AmoItem.vue'

const rootStore = useRootStore()

const isActive = ref<boolean>(false)
const selectedOption = ref<string>('')
const options = ref<DropdownOption[]>([
  {value: '', label: 'Не выбрано'},
  {value: 'leads', label: 'Сделка'},
  {value: 'contacts', label: 'Контакт'},
  {value: 'companies', label: 'Компания'},
])

const pending = computed(() => {
  return rootStore.pending
})

watch(selectedOption, () => {
  isActive.value = selectedOption.value !== ''
})

function submit() {
  rootStore.handleCreate(selectedOption.value)
}
</script>

<style scoped>

</style>

