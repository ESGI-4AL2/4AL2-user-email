import { App } from './App';
import { IUserService } from './services/user/IUserService';
import { IGuidService } from './services/guid/IGuidService';

export class AppBuilder {
	private userService: IUserService;
	private guidService: IGuidService;

	static create(): AppBuilder {
		return new AppBuilder();
	}

	withGuidService(guidService: IGuidService): AppBuilder {
		const appBuilder = new AppBuilder();
		appBuilder.guidService = guidService;
		appBuilder.userService = this.userService;

		return appBuilder;
	}

	withUserService(userService: IUserService): AppBuilder {
		const appBuilder = new AppBuilder();
		appBuilder.guidService = this.guidService;
		appBuilder.userService = userService;

		return appBuilder;
	}

	build(): App {
		return App.of(this.guidService, this.userService);
	}
}
