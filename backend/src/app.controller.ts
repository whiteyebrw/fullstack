import {Controller, Post} from '@nestjs/common'
import {AppService} from './app.service'

// here could have been split on a per module basis for the entity, but I didn't make it more complicated than that
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {
	}

	@Post('/leads')
	createLead() {
		return this.appService.createLead()
	}

	@Post('/contacts')
	createContact() {
		return this.appService.createContact()
	}

	@Post('/companies')
	createCompany() {
		return this.appService.createCompany()
	}
}
