import { User } from '../../domain/entities/users/User';
import { INotificationService } from '../notification/INotificationService';
import { Address } from '../../domain/entities/address/Address';
import { IUserRegistry } from '../../../adapters/interfaces/IUserRegistry';
import { IUserService } from './IUserService';

export class UserService implements IUserService {
	private readonly _notificationService: INotificationService;
	private readonly _userRegistry: IUserRegistry;

	constructor(notificationService: INotificationService, userRegistry: IUserRegistry) {
		this._notificationService = notificationService;
		this._userRegistry = userRegistry;
	}

	async create(user: User): Promise<null | User> {
		try {
			if (await this._userRegistry.hasUserByEmail(user.email)) {
				throw new Error(`User ${user.email} already exists)`);
			}

			await this._userRegistry.create(user);
			await this._notificationService.sendNotification(user.email, 'Votre compte a été créé avec succès !');
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(user);
	}

	async deleteByEmail(email: string): Promise<boolean> {
		let isDeleted = false;

		try {
			isDeleted = await this._userRegistry.deleteByEmail(email);
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(isDeleted);
	}

	async getAll(): Promise<User[]> {
		let users: User[] = [];

		try {
			users = await this._userRegistry.getAll();
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(users);
	}

	async getByEmail(email: string): Promise<null | User> {
		let user: null | User = null;

		try {
			user = await this._userRegistry.getByEmail(email);
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(user);
	}

	async hasUserByEmail(email: string): Promise<boolean> {
		let hasUser = false;

		try {
			hasUser = await this._userRegistry.hasUserByEmail(email);
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(hasUser);
	}

	async updateByEmail(email: string, user: User): Promise<User> {
		let updatedUser = user;

		try {
			updatedUser = await this._userRegistry.updateByEmail(email, user);
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(updatedUser);
	}
}
