import {AddressBuilder} from "./AddressBuilder";
import {Address} from "./Adress";

export interface IAddress {
	withStreetName(streetName: string): AddressBuilder;
	withStreetNumner(streetNumber: number): AddressBuilder;
	withZipCode(zipCode: string): AddressBuilder;
	withCity(city: string): AddressBuilder;
	build(): Address;
}