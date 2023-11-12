import { App } from './App';
import { IUserService } from './services/user/IUserService';
import { IGuidService } from './services/guid/IGuidService';

export class AppBuilder {
	private _userService: IUserService;
	private _guidService: IGuidService;

	static create(): AppBuilder {
		return new AppBuilder();
	}

	withGuidService(guidService: IGuidService): AppBuilder {
		const appBuilder = new AppBuilder();
		appBuilder._guidService = guidService;
		appBuilder._userService = this._userService;

		return appBuilder;
	}

	withUserService(userService: IUserService): AppBuilder {
		const appBuilder = new AppBuilder();
		appBuilder._guidService = this._guidService;
		appBuilder._userService = userService;

		return appBuilder;
	}

	build(): App {
		return App.of(this._guidService, this._userService);
	}
}
