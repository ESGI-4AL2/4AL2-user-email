import { IUserRegistry } from './IUserRegistry';
import { User } from '../users/User';

export class FakeUserRegistry implements IUserRegistry {
	private readonly users = new Map<string, User>();

	create(user: User): Promise<User> {
		this.users.set(user.email, user);

		return Promise.resolve(user);
	}

	deleteByEmail(email: string): Promise<boolean> {
		const isDeleted = this.users.delete(email);

		return Promise.resolve(isDeleted);
	}

	getAll(): Promise<User[]> {
		return Promise.resolve([...this.users.values()]);
	}

	getByEmail(email: string): Promise<null | User> {
		const user: User | null = this.users.get(email) || null;

		return Promise.resolve(user);
	}

	hasUserByEmail(email: string): Promise<boolean> {
		const hasUser = this.users.has(email);

		return Promise.resolve(hasUser);
	}

	updateByEmail(email: string, user: User): Promise<User> {
		throw new Error('Not implemented');
	}
}
