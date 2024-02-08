import {Injectable} from '@nestjs/common'
import axios, {AxiosInstance} from 'axios'


// it would be good to put axios in a separate place here
@Injectable()
export class AppService {
	private apiClient: AxiosInstance

	constructor() {
		this.apiClient = axios.create({
			baseURL: `${process.env.base_url}/api`,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.token}`
			}
		})
	}

	async createContact() {
		const response = await this.apiClient.post('/v4/contacts', [{}])
		const contact = response.data._embedded['contacts'][0]

		return {
			id: contact.id,
			label: 'contact'
		}
	}

	async createCompany() {
		const response = await this.apiClient.post('/v4/companies', [{}])
		const company = response.data._embedded['companies'][0]

		return {
			id: company.id,
			label: 'company'
		}
	}

	async createLead() {
		const response = await this.apiClient.post('/v4/leads', [{}])
		const lead = response.data._embedded['leads'][0]

		return {
			id: lead.id,
			label: 'lead'
		}
	}
}
