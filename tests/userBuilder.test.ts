import { Address } from '../src/address/Address';
import { User } from '../src/users/User';
import { UserBuilder } from '../src/users/UserBuilder';

describe('UserBuilder', () => {
	it('should create a user with the specified attributes', () => {
		const user = UserBuilder.create()
			.withFirstName('Toto')
			.withLastName('Toto')
			.withAge(30)
			.withAddress(new Address('mail atlantis', 6, 'Massy', '91300'))
			.build();

		expect(user).toBeInstanceOf(User);
		expect(user._name).toBe('Toto');
		expect(user._lastName).toBe('Toto');
		expect(user._age).toBe(30);
		expect(user._address).toEqual(new Address('mail atlantis', 6, 'Massy', '91300'));
	});

	it('should be different', () => {
		const user1 = UserBuilder.create().withAge(27).withFirstName('John').build();

		const user2 = UserBuilder.create().withAge(23).withLastName('Toto').build();
		expect(user1._age).not.toEqual(user2._age);
		expect(user2._name).toBeUndefined();
	});

	it('should throw an error when first name is invalid', () => {
		expect(() => {
			UserBuilder.create().withFirstName('').build();
		}).toThrowError('invalide name argument ');
	});

	it('should throw an error when last name is invalid', () => {
		expect(() => {
			UserBuilder.create().withLastName(null).build();
		}).toThrowError('invalide lastName argument ');
	});
});
