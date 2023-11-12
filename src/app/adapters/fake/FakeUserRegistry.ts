import { IUserRegistry } from '../interfaces/IUserRegistry';
import { User } from '../../core/domain/entities/users/User';

export class FakeUserRegistry implements IUserRegistry {
	private readonly _users = new Map<string, User>();

	create(user: User): Promise<User> {
		this._users.set(user.email, user);

		return Promise.resolve(user);
	}

	deleteByEmail(email: string): Promise<boolean> {
		const isDeleted = this._users.delete(email);

		return Promise.resolve(isDeleted);
	}

	getAll(): Promise<User[]> {
		return Promise.resolve([...this._users.values()]);
	}

	getByEmail(email: string): Promise<null | User> {
		const user: User | null = this._users.get(email) || null;

		return Promise.resolve(user);
	}

	hasUserByEmail(email: string): Promise<boolean> {
		const hasUser = this._users.has(email);

		return Promise.resolve(hasUser);
	}

	updateByEmail(email: string, user: User): Promise<User> {
		throw new Error('Not implemented');
	}
}
