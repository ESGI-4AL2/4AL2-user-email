import { Address } from '../address/Address';

export class User {
	private readonly _firstName: string;
	private readonly _lastName: string;
	private readonly _address: Address;
	private readonly _age: number;

	constructor(firstName: string, lastName: string, address: Address, age: number) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._address = address;
		this._age = age;
	}

	toString(): string {
		return `
			name: ${this._firstName}
			lastName: ${this._lastName}
			age: ${this._age}
			address: ${this._address.toString()}
		`;
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
}
