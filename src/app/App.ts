import { IUserService } from './core/services/user/IUserService';
import { userData } from '../data/users';
import { User } from './core/domain/entities/users/User';
import { IGuidService } from './core/services/guid/IGuidService';

export class App {
	private readonly _userService: IUserService;
	private readonly _guidService: IGuidService;

	private constructor(guidService: IGuidService, userService: IUserService) {
		this._guidService = guidService;
		this._userService = userService;
	}

	static of(guidService: IGuidService, userService: IUserService): App {
		return new App(guidService, userService);
	}

	async start(): Promise<void> {
		console.log("🚀 Démarrage de l'appli !\n");

		if (userData.length == 0) {
			console.log('Aucune donnée à exploiter...');
			return;
		}

		await this.createSomeUsers(userData);
		await this.printAllUsers();

		const initialFirstUser = userData[0];
		if (!initialFirstUser) {
			console.log("L'utilisateur ne peut pas être exploité...");
			return;
		}
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
		const { email } = user;
		if (!(await this._userService.hasUserByEmail(email))) {
			console.log(`⛔️ Impossible de supprimer l'utilisateur "${email}".\n`);
			return;
		}

		await this._userService.deleteByEmail(email);

		console.log(`␡ L'utilisateur "${email}" a été supprimé.\n`);
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
