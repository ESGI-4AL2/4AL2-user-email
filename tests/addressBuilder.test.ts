import { AddressBuilder } from '../src/address/AddressBuilder';
import { Address } from '../src/address/Address';

describe('AddressBuilder', () => {
	it('should create an address with the specified attributes', () => {
		const address = AddressBuilder.create()
			.withStreetName('Main Street')
			.withStreetNumber(123)
			.withCity('Springfield')
			.withZipCode('12345')
			.build();

		expect(address).toBeInstanceOf(Address);
		expect(address.streetName).toBe('Main Street');
		expect(address.streetNumber).toBe(123);
		expect(address.city).toBe('Springfield');
		expect(address.zipCode).toBe('12345');
	});

	it('should create distinct addresses', () => {
		const address1 = AddressBuilder.create().withStreetName('Elm Street').withCity('Gotham').build();

		const address2 = AddressBuilder.create().withStreetName('Fifth Avenue').withCity('Metropolis').build();

		expect(address1.city).not.toEqual(address2.city);
	});

	it('should throw an error with invalid zip code', () => {
		expect(() => {
			AddressBuilder.create().withZipCode('ABCDE').build();
		}).toThrowError('Invalid zipCode argument');
	});

	it('should throw an error with invalid city', () => {
		expect(() => {
			AddressBuilder.create().withCity('').build();
		}).toThrowError('Invalid city argument');
	});

	it('should throw an error with invalid street name', () => {
		expect(() => {
			AddressBuilder.create().withStreetName('').build();
		}).toThrowError('Invalid streetName argument');
	});
});
