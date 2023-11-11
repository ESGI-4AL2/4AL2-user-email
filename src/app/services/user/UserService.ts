import { User } from '../../users/User';
import { INotificationService } from '../notification/INotificationService';
import { Address } from '../../address/Address';
import { IUserRegistry } from '../../adapters/IUserRegistry';
import { IUserService } from './IUserService';

export class UserService implements IUserService {
	constructor(
		private readonly notificationService: INotificationService,
		private readonly userRegistry: IUserRegistry,
	) {}

	async create(user: User): Promise<null | User> {
		try {
			if (await this.userRegistry.hasUserByEmail(user.email)) {
				throw new Error(`User ${user.email} already exists)`);
			}

			await this.userRegistry.create(user);
			await this.notificationService.sendNotification(user.email, 'Votre compte a été créé avec succès !');
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(user);
	}

	async deleteByEmail(email: string): Promise<boolean> {
		let isDeleted = false;

		try {
			isDeleted = await this.userRegistry.deleteByEmail(email);
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(isDeleted);
	}

	async getAll(): Promise<User[]> {
		let users: User[] = [];

		try {
			users = await this.userRegistry.getAll();
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(users);
	}

	async getByEmail(email: string): Promise<null | User> {
		let user: null | User = null;

		try {
			user = await this.userRegistry.getByEmail(email);
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(user);
	}

	async hasUserByEmail(email: string): Promise<boolean> {
		let hasUser = false;

		try {
			hasUser = await this.userRegistry.hasUserByEmail(email);
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(hasUser);
	}

	async updateByEmail(email: string, user: User): Promise<User> {
		let updatedUser = user;

		try {
			updatedUser = await this.userRegistry.updateByEmail(email, user);
		} catch (e) {
			console.log(e);
		}

		return Promise.resolve(updatedUser);
	}
}
