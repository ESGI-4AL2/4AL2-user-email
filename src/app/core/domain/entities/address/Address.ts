export class Address {
	private readonly _streetNumber: number;
	private readonly _streetName: string;
	private readonly _city: string;
	private readonly _zipCode: string;

	private constructor(streetName: string, streetNumber: number, city: string, zipCode: string) {
		this._streetNumber = streetNumber;
		this._streetName = streetName;
		this._city = city;
		this._zipCode = zipCode;
	}

	static of(streetName: string, streetNumber: number, city: string, zipCode: string): Address {
		const isOnlyFiveDigits = /^\d{5}$/.test(zipCode);
		if (!isOnlyFiveDigits) {
			throw new Error('Invalid zipCode argument');
		}

		return new Address(streetName, streetNumber, city, zipCode);
	}

	get streetName(): string {
		return this._streetName;
	}

	get city(): string {
		return this._city;
	}

	get zipCode(): string {
		return this._zipCode;
	}

	get streetNumber(): number {
		return this._streetNumber;
	}

	toString(): string {
		return `
				streetName: ${this._streetName}
				streetNumber: ${this._streetNumber}
				city: ${this._city}
				zipCode: ${this._zipCode}`;
	}
}
