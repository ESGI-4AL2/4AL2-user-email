import { Address } from '../src/app/address/Address';
import { User } from '../src/app/users/User';
import { UserBuilder } from '../src/app/users/UserBuilder';
import { IGuidService } from '../src/app/services/guid/IGuidService';
import { GuidService } from '../src/app/services/guid/GuidService';

describe('UserBuilder', () => {
	let guidService: IGuidService;

	beforeEach(() => {
		guidService = new GuidService();
	});

	it('should create a user with the specified attributes', () => {
		const user = UserBuilder.create()
			.withFirstName('Toto')
			.withLastName('Toto')
			.withAge(30)
			.withAddress(Address.of('mail atlantis', 6, 'Massy', '91300'))
			.withEmail('toto@example.com')
			.build(guidService);

		expect(user).toBeInstanceOf(User);
		expect(user.firstName).toBe('Toto');
		expect(user.lastName).toBe('Toto');
		expect(user.age).toBe(30);
		expect(user.address).toEqual(Address.of('mail atlantis', 6, 'Massy', '91300'));
		expect(user.email).toBe('toto@example.com');
	});

	it('should be different', () => {
		const user1 = UserBuilder.create().withAge(27).withFirstName('John').build(guidService);

		const user2 = UserBuilder.create().withAge(23).withLastName('Toto').build(guidService);
		expect(user1.age).not.toEqual(user2.age);
		expect(user2.firstName).toBeUndefined();
	});

	it('should throw an error when first name is invalid', () => {
		expect(() => {
			UserBuilder.create().withFirstName('').build(guidService);
		}).toThrowError('invalide name argument ');
	});

	it('should throw an error when last name is invalid', () => {
		expect(() => {
			UserBuilder.create().withLastName('').build(guidService);
		}).toThrowError('invalide lastName argument ');
	});
});
