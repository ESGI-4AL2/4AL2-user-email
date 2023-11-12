export interface INotificationService {
	sendNotification(emailAddress: string, message: string): Promise<void>;
}
