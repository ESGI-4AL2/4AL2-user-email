import { App } from './App';
import { IUserService } from './services/user/IUserService';

export class AppBuilder {
	private userService: IUserService;

	static create(): AppBuilder {
		return new AppBuilder();
	}

	withUserService(userService: IUserService) {
		const appBuilder = new AppBuilder();
		appBuilder.userService = userService;

		return appBuilder;
	}

	build(): App {
		return App.of(this.userService);
	}
}
