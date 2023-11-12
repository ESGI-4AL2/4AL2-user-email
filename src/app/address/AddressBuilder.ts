import { Address } from './Address';
import { IAddressBuilder } from './IAddressBuilder';

export class AddressBuilder implements IAddressBuilder {
	private _streetName: string;
	private _streetNumber: number;
	private _city: string;
	private _zipCode: string;

	static create(): AddressBuilder {
		return new AddressBuilder();
	}

	withStreetNumber(streetNumber: number): AddressBuilder {
		const addressBuilder = new AddressBuilder();
		addressBuilder._city = this._city;
		addressBuilder._streetName = this._streetName;
		addressBuilder._streetNumber = streetNumber;
		addressBuilder._zipCode = this._zipCode;

		return addressBuilder;
	}

	withZipCode(zipCode: string): AddressBuilder {
		const addressBuilder = new AddressBuilder();
		addressBuilder._city = this._city;
		addressBuilder._streetName = this._streetName;
		addressBuilder._streetNumber = this._streetNumber;
		addressBuilder._zipCode = zipCode;

		return addressBuilder;
	}

	withCity(city: string): AddressBuilder {
		if (!city.trim()) {
			throw new Error('Invalid city argument');
		}

		const addressBuilder = new AddressBuilder();
		addressBuilder._city = city;
		addressBuilder._streetName = this._streetName;
		addressBuilder._streetNumber = this._streetNumber;
		addressBuilder._zipCode = this._zipCode;

		return addressBuilder;
	}

	withStreetName(streetName: string): AddressBuilder {
		if (!streetName.trim()) {
			throw new Error('Invalid streetName argument');
		}

		const addressBuilder = new AddressBuilder();
		addressBuilder._city = this._city;
		addressBuilder._streetName = streetName;
		addressBuilder._streetNumber = this._streetNumber;
		addressBuilder._zipCode = this._zipCode;

		return addressBuilder;
	}

	build(): Address {
		return Address.of(this._streetName, this._streetNumber, this._city, this._zipCode);
	}
}
