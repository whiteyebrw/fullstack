import {defineStore} from 'pinia'
import type {Ref} from 'vue'
import {ref} from 'vue'
import axios from 'axios'
import type {Entity} from '@/types'
import {api} from '@/api'


export const useRootStore = defineStore('root', () => {
	const pending = ref<boolean>(false)
	const entities: Ref<Entity[]> = ref([])

	const handleCreate = (option: string) => {
		pending.value = true

		api.post(`/${option}`)
			.then((response: axios.AxiosResponse<any>) => {
				const entity = response.data

				entities.value.push({
					id: entity.id,
					label: entity.label
				})
			})
			.finally(() => pending.value = false)
	}

	return {
		pending,
		handleCreate,
		entities
	}
})