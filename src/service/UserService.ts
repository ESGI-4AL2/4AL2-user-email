import { User } from '../users/User';
import { INotificationService } from './INotificationService';
import { Address } from '../address/Address';

export class UserService {
	constructor(private notificationService: INotificationService) {}

	async createUser(name: string, lastName: string, address: Address, age: number, email: string): Promise<User> {
		const newUser = User.of(name, lastName, address, age, email);

		await this.notificationService.sendNotification(newUser.email, 'Votre compte a été créé avec succès !');

		return newUser;
	}
}
