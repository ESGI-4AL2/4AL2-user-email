import { Address } from '../address/Address';
import { IUserBuilder } from './IUserBuilder';
import { User } from './User';

export class UserBuilder implements IUserBuilder {
	private name: string;
	private lastName: string;
	private address: Address;
	private age: number;

	static create(): UserBuilder {
		return new UserBuilder();
	}

	withFirstName(firstName: string): UserBuilder {
		if (!firstName.trim()) {
			throw new Error('invalide name argument ');
		}

		const userBuilder = new UserBuilder();
		userBuilder.address = this.address;
		userBuilder.age = this.age;
		userBuilder.lastName = this.lastName;
		userBuilder.name = firstName;

		return userBuilder;
	}
	withLastName(lastName: string): UserBuilder {
		if (!lastName.trim()) {
			throw new Error('invalide lastName argument ');
		}

		const userBuilder = new UserBuilder();
		userBuilder.address = this.address;
		userBuilder.age = this.age;
		userBuilder.lastName = lastName;
		userBuilder.name = this.name;

		return userBuilder;
	}
	withAge(age: number): UserBuilder {
		const userBuilder = new UserBuilder();
		userBuilder.address = this.address;
		userBuilder.age = age;
		userBuilder.lastName = this.lastName;
		userBuilder.name = this.name;

		return userBuilder;
	}
	withAddress(address: Address): UserBuilder {
		const userBuilder = new UserBuilder();
		userBuilder.address = address;
		userBuilder.age = this.age;
		userBuilder.lastName = this.lastName;
		userBuilder.name = this.name;

		return userBuilder;
	}

	build(): User {
		return new User(this.name, this.lastName, this.address, this.age);
	}
}
