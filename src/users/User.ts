import {Address} from "../address/Adress";

export class User {
	private readonly name: string;
	private readonly lastName: string;
	private readonly address: Address;
	private readonly age: number;


	constructor (name: string, lastName: string, address: Address, age: number) {
		this.name = name;
		this.lastName = lastName;
		this.address = address;
		this.age = age;
	}

	toString(): string {
		return `
		name: ${this.name}
		lastName: ${this.lastName}
		age: ${this.age}
		address: ${this.address.toString()}
		`;
	}

	get _name(): string {
		return this.name;
	}

	get _lastName(): string {
		return this.lastName;
	}

	get _address(): Address {
		return this.address;
	}

	get _age(): number {
		return this.age;
	}


}
