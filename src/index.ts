import { UserService } from './app/services/user/UserService';
import { FakeNotificationService } from './app/services/notification/FakeNotification';
import { FakeUserRegistry } from './app/adapters/FakeUserRegistry';
import { AppBuilder } from './app/AppBuilder';
import { GuidService } from './app/services/guid/GuidService';

AppBuilder.create()
	.withGuidService(new GuidService())
	.withUserService(new UserService(new FakeNotificationService(), new FakeUserRegistry()))
	.build()
	.start()
	.then(() => {})
	.catch((err) => console.error(`❌ Erreur : ${err.message}`));
