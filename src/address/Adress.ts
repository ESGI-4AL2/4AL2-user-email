export class Address {
	private readonly streetName: string;
	private readonly streetNumber: number;
	private readonly city: string;
	private readonly zipCode: string;

	constructor(streetName: string, streetNumber: number, city: string, zipCode: string) {
		this.city = city;
		this.streetName = streetName;
		this.streetNumber = streetNumber;

		if (zipCode && !/^\d{5}$/.test(zipCode)) {
			throw new Error('Invalid zipCode argument');
		}
		this.zipCode = zipCode;
	}

	get _streetName(): string {
		return this.streetName;
	}

	get _city(): string {
		return this.city;
	}

	get _zipCode(): string {
		return this.zipCode;
	}

	get _streetNumber(): number {
		return this.streetNumber;
	}

	toString(): string {
		return `
			streetName: ${this.streetName}
			streetNumber: ${this.streetNumber}
			city: ${this.city}
			zipCode: ${this.zipCode}		`;
	}
}
