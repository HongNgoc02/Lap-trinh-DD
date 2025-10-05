export class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo(): void {
        console.log(`Hãng: ${this.brand}, Mẫu: ${this.model}, Năm: ${this.year}`);
    }
}