import { Address } from '../address/Address';
import { GuidService } from '../../../services/guid/GuidService';

export class User {
	private readonly _id: string;
	private readonly _firstName: string;
	private readonly _lastName: string;
	private readonly _address: Address;
	private readonly _age: number;
	private readonly _email: string;

	private constructor(id: string, firstName: string, lastName: string, address: Address, age: number, email: string) {
		this._id = id;
		this._firstName = firstName;
		this._lastName = lastName;
		this._address = address;
		this._age = age;
		this._email = email;
	}

	static of(id: string, firstName: string, lastName: string, address: Address, age: number, email: string): User {
		return new User(id, firstName, lastName, address, age, email);
	}

	toString(): string {
		return `
			name: ${this._firstName}
			lastName: ${this._lastName}
			age: ${this._age}
			address: ${this._address}
			email: ${this._email}
		`;
	}

	get id(): string {
		return this._id;
	}

	get firstName(): string {
		return this._firstName;
	}

	get lastName(): string {
		return this._lastName;
	}

	get address(): Address {
		return this._address;
	}

	get age(): number {
		return this._age;
	}

	get email(): string {
		return this._email;
	}
}
