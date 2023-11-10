import { Address } from './Address';
import { IAddressBuilder } from './IAddressBuilder';

export class AddressBuilder implements IAddressBuilder {
	private streetName: string;
	private streetNumber: number;
	private city: string;
	private zipCode: string;

	static create(): AddressBuilder {
		return new AddressBuilder();
	}

	withStreetNumber(streetNumber: number): AddressBuilder {
		const addressBuilder = new AddressBuilder();
		addressBuilder.city = this.city;
		addressBuilder.streetName = this.streetName;
		addressBuilder.streetNumber = streetNumber;
		addressBuilder.zipCode = this.zipCode;

		return addressBuilder;
	}

	withZipCode(zipCode: string): AddressBuilder {
		const addressBuilder = new AddressBuilder();
		addressBuilder.city = this.city;
		addressBuilder.streetName = this.streetName;
		addressBuilder.streetNumber = this.streetNumber;
		addressBuilder.zipCode = zipCode;

		return addressBuilder;
	}

	withCity(city: string): AddressBuilder {
		if (!city.trim()) {
			throw new Error('Invalid city argument');
		}

		const addressBuilder = new AddressBuilder();
		addressBuilder.city = city;
		addressBuilder.streetName = this.streetName;
		addressBuilder.streetNumber = this.streetNumber;
		addressBuilder.zipCode = this.zipCode;

		return addressBuilder;
	}

	withStreetName(streetName: string): AddressBuilder {
		if (!streetName.trim()) {
			throw new Error('Invalid streetName argument');
		}

		const addressBuilder = new AddressBuilder();
		addressBuilder.city = this.city;
		addressBuilder.streetName = streetName;
		addressBuilder.streetNumber = this.streetNumber;
		addressBuilder.zipCode = this.zipCode;

		return addressBuilder;
	}

	build(): Address {
		return Address.of(this.streetName, this.streetNumber, this.city, this.zipCode);
	}
}
