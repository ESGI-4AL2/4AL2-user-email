import {Address} from "../address/Adress";
import {IUserBuilder} from "./IUserBuilder";
import {User} from "./User";

export class UserBuilder implements IUserBuilder {

	private name: string;
	private lastName: string;
	private address: Address;
	private age: number;


	static create(): UserBuilder {
		return new UserBuilder();
	}

	withFirstName(firstName: string): UserBuilder {
		if (firstName === null || firstName.trim() === '') {
			throw new Error('invalide name argument ');
		}
		
		var userBuilder: UserBuilder = new UserBuilder();
		userBuilder.address = this.address;
		userBuilder.age = this.age;
		userBuilder.lastName = this.lastName;
		userBuilder.name = firstName;
		return userBuilder;
	}
	withLastName(lastName: string): UserBuilder {
		if (lastName === null || lastName.trim() === '') {
			throw new Error('invalide lastName argument ')
		}

		var userBuilder: UserBuilder = new UserBuilder();
		userBuilder.address = this.address;
		userBuilder.age = this.age;
		userBuilder.lastName = lastName;
		userBuilder.name = this.name;
		return userBuilder;
	}
	withAge(age: number): UserBuilder {
		var userBuilder: UserBuilder = new UserBuilder();
		userBuilder.address = this.address;
		userBuilder.age = age;
		userBuilder.lastName = this.lastName;
		userBuilder.name = this.name;
		return userBuilder;
	}
	withAddress(address: Address): UserBuilder {
		var userBuilder: UserBuilder = new UserBuilder();
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
