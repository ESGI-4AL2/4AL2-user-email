import { UserService } from './app/core/services/user/UserService';
import { FakeNotificationService } from './app/core/services/notification/FakeNotification';
import { FakeUserRegistry } from './app/adapters/fake/FakeUserRegistry';
import { AppBuilder } from './app/AppBuilder';
import { GuidService } from './app/core/services/guid/GuidService';

AppBuilder.create()
	.withGuidService(new GuidService())
	.withUserService(new UserService(new FakeNotificationService(), new FakeUserRegistry()))
	.build()
	.start()
	.then(() => {})
	.catch((err) => console.error(`❌ Erreur : ${err.message}`));
