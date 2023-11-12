import { Address } from '../address/Address';
import { User } from './User';
import { UserBuilder } from './UserBuilder';
import { IGuidService } from '../services/guid/IGuidService';

export interface IUserBuilder {
	withFirstName(firstName: string): UserBuilder;
	withLastName(lastName: string): UserBuilder;
	withAge(age: number): UserBuilder;
	withAddress(address: Address): UserBuilder;
	build(guidService: IGuidService): User;
}
