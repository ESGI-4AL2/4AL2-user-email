export class Address {

	private readonly streetName: string;
	private readonly streetNumber: number;
	private readonly city: string;
	private readonly zipCode: string;


	constructor (streatName: string, streatNumber: number, city: string, zipCode: string) {
		this.city = city;
		this.streetName = streatName;
		this.streetNumber = streatNumber;

		if (!/^\d{5}$/.test(zipCode)) {
			throw new Error('invalide zipCode argument');
		}
		this.zipCode = zipCode;
	}

	toString(): string {
		return `
			streetName: ${this.streetName}
			streetNumber: ${this.streetNumber}
			city: ${this.city}
			zipCode: ${this.zipCode}		`;
	}

}
