import { IUserService } from './core/services/user/IUserService';
import { UserBuilder } from './core/domain/entities/users/UserBuilder';
import { AddressBuilder } from './core/domain/entities/address/AddressBuilder';
import { GuidService } from './core/services/guid/GuidService';
import { userData } from '../data/users';
import { User } from './core/domain/entities/users/User';

export class App {
	private readonly _userService: IUserService;
	private readonly _guidService: GuidService;

	private constructor(guidService: GuidService, userService: IUserService) {
		this._guidService = guidService;
		this._userService = userService;
	}

	static of(guidService: GuidService, userService: IUserService): App {
		return new App(guidService, userService);
	}

	async start(): Promise<void> {
		console.log("🚀 Démarrage de l'appli !\n");

		await this.createSomeUsers(userData);
		await this.printAllUsers();

		const initialFirstUser = userData[0];
		await this.printFirstInitialUser(initialFirstUser);
		await this.deleteUser(initialFirstUser);
		await this.printAllUsers();
	}

	private async createSomeUsers(userData: User[]): Promise<void> {
		console.log('⏳ Création de quelques utilisateurs...\n');

		for (const userDatum of userData) {
			await this._userService.create(userDatum);
		}
	}

	private async deleteUser(user: User): Promise<void> {
		console.log(`␡ Suppression de ce 1er utilisateur "${user.email}".\n`);

		await this._userService.deleteByEmail(user.email);
	}

	private async printAllUsers(): Promise<void> {
		const users = await this._userService.getAll();

		console.log(`\n🧾 Actuellement ${users.length} utilisateur(s) : ${users}\n`);
	}

	private async printFirstInitialUser(user: User): Promise<void> {
		const retrievedUser = await this._userService.getByEmail(user.email);

		console.log(`🙂 1er utilisateur initial : ${retrievedUser}\n`);
	}
}
