import { INotificationService } from './INotificationService';

export class FakeNotificationService implements INotificationService {
	async sendNotification(emailAddress: string, message: string): Promise<void> {
		console.log(`Sending notification to ${emailAddress}: ${message}`);
	}
}
