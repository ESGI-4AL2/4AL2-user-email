import { UserBuilder } from '../app/core/domain/entities/users/UserBuilder';
import { AddressBuilder } from '../app/core/domain/entities/address/AddressBuilder';
import { User } from '../app/core/domain/entities/users/User';
import { GuidService } from '../app/core/services/guid/GuidService';
import { IGuidService } from '../app/core/services/guid/IGuidService';

const guidService: IGuidService = new GuidService();

export const userData: User[] = [
	UserBuilder.create()
		.withFirstName('ARNAUD')
		.withLastName('Alex')
		.withAge(11)
		.withAddress(
			AddressBuilder.create()
				.withStreetNumber(1)
				.withStreetName('rue du Printemps')
				.withCity('Paris')
				.withZipCode('75001')
				.build(),
		)
		.withEmail('a.arnaud@email.fr')
		.build(guidService),
	UserBuilder.create()
		.withFirstName('BERNARD')
		.withLastName('Bob')
		.withAge(22)
		.withAddress(
			AddressBuilder.create()
				.withStreetNumber(2)
				.withStreetName('rue du fer')
				.withCity('Paris')
				.withZipCode('75002')
				.build(),
		)
		.withEmail('b.bernard@email.fr')
		.build(guidService),
	UserBuilder.create()
		.withFirstName('CRETOIS')
		.withLastName('Charles')
		.withAge(33)
		.withAddress(
			AddressBuilder.create()
				.withStreetNumber(3)
				.withStreetName('rue de la mélée')
				.withCity('Paris')
				.withZipCode('75003')
				.build(),
		)
		.withEmail('c.cretois@email.fr')
		.build(guidService),
];
