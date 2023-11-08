import {Address} from "../address/Address";
import {User} from "./User";
import {UserBuilder} from "./UserBuilder";

export interface IUserBuilder {
	withFirstName(firstName: string): UserBuilder;
	withLastName(lastName: string): UserBuilder;
	withAge(age: number): UserBuilder;
	withAddress(address: Address): UserBuilder;
	build(): User
}
