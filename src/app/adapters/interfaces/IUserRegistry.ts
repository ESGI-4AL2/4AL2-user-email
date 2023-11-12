import { User } from '../../core/domain/entities/users/User';

export interface IUserRegistry {
	create(user: User): Promise<User>;
	getAll(): Promise<User[]>;
	getByEmail(email: string): Promise<null | User>;
	hasUserByEmail(email: string): Promise<boolean>;
	updateByEmail(email: string, user: User): Promise<User>;
	deleteByEmail(email: string): Promise<boolean>;
}
