import { AddressBuilder } from './AddressBuilder';
import { Address } from './Address';

export interface IAddress {
	withStreetNumber(streetNumber: number): AddressBuilder;
	withStreetName(streetName: string): AddressBuilder;
	withZipCode(zipCode: string): AddressBuilder;
	withCity(city: string): AddressBuilder;
	build(): Address;
}
