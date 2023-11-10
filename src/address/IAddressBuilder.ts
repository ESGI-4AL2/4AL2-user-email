import { Address } from './Address';

export interface IAddressBuilder {
	withStreetNumber(streetNumber: number): IAddressBuilder;
	withStreetName(streetName: string): IAddressBuilder;
	withZipCode(zipCode: string): IAddressBuilder;
	withCity(city: string): IAddressBuilder;
	build(): Address;
}
