import { Address } from './Address';
import { IAddress } from './IAddress';

export class AddressBuilder implements IAddress {
	private streetName: string;
	private streetNumber: number;
	private city: string;
	private zipCode: string;

	static create(): AddressBuilder {
		return new AddressBuilder();
	}

	withStreetNumber(streetNumber: number): AddressBuilder {
		var addressBuilder: AddressBuilder = new AddressBuilder();
		addressBuilder.city = this.city;
		addressBuilder.streetName = this.streetName;
		addressBuilder.streetNumber = streetNumber;
		addressBuilder.zipCode = this.zipCode;
		return addressBuilder;
	}
	withZipCode(zipCode: string): AddressBuilder {
		var addressBuilder: AddressBuilder = new AddressBuilder();
		addressBuilder.city = this.city;
		addressBuilder.streetName = this.streetName;
		addressBuilder.streetNumber = this.streetNumber;
		addressBuilder.zipCode = zipCode;
		return addressBuilder;
	}
	withCity(city: string): AddressBuilder {
		if (city === null || city.trim() === '') {
			throw new Error('Invalid city argument');
		}
		var addressBuilder: AddressBuilder = new AddressBuilder();
		addressBuilder.city = city;
		addressBuilder.streetName = this.streetName;
		addressBuilder.streetNumber = this.streetNumber;
		addressBuilder.zipCode = this.zipCode;
		return addressBuilder;
	}

	withStreetName(streetName: string): AddressBuilder {
		if (streetName === null || streetName.trim() === '') {
			throw new Error('Invalid streetName argument');
		}
		var addressBuilder: AddressBuilder = new AddressBuilder();
		addressBuilder.city = this.city;
		addressBuilder.streetName = streetName;
		addressBuilder.streetNumber = this.streetNumber;
		addressBuilder.zipCode = this.zipCode;
		return addressBuilder;
	}

	build(): Address {
		return new Address(this.streetName, this.streetNumber, this.city, this.zipCode);
	}
}
