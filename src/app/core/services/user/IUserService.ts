import { User } from '../../domain/entities/users/User';

export interface IUserService {
	create(user: User): Promise<null | User>;
	getAll(): Promise<User[]>;
	getByEmail(email: string): Promise<null | User>;
	hasUserByEmail(email: string): Promise<boolean>;
	updateByEmail(email: string, user: User): Promise<User>;
	deleteByEmail(email: string): Promise<boolean>;
}
