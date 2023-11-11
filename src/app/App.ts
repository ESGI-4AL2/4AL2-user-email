import { IUserService } from './services/user/IUserService';
import { UserBuilder } from './users/UserBuilder';
import { AddressBuilder } from './address/AddressBuilder';

export class App {
	private _userService: IUserService;

	private constructor(readonly userService: IUserService) {
		this._userService = userService;
	}

	static of(userService: IUserService): App {
		return new App(userService);
	}

	async start(): Promise<void> {
		console.log("🚀 Démarrage de l'appli !\n");

		await this.createSomeUsers();
		await this.printAllUsers();
	}

	private async printAllUsers(): Promise<void> {
		const users = await this._userService.getAll();

		console.log(`\n🧾 Actuellement ${users.length} utilisateur(s) : ${users}\n`);
	}

	private async createSomeUsers(): Promise<void> {
		console.log('⏳ Création de quelques utilisateurs...\n');

		const user1 = UserBuilder.create()
			.withFirstName('ARNAUD')
			.withLastName('Alex')
			.withAge(11)
			.withAddress(
				AddressBuilder.create()
					.withStreetNumber(1)
					.withStreetName('rue du Printemps')
					.withCity('Paris')
					.withZipCode('75001')
					.build(),
			)
			.withEmail('a.arnaud@email.fr')
			.build();

		const user2 = UserBuilder.create()
			.withFirstName('BERNARD')
			.withLastName('Bob')
			.withAge(22)
			.withAddress(
				AddressBuilder.create()
					.withStreetNumber(2)
					.withStreetName('rue du fer')
					.withCity('Paris')
					.withZipCode('75002')
					.build(),
			)
			.withEmail('b.bernard@email.fr')
			.build();

		await this._userService.create(user1);
		await this._userService.create(user2);
	}
}
