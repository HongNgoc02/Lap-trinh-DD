"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Hãng: ${this.brand}, Mẫu: ${this.model}, Năm: ${this.year}`);
    }
}
exports.Car = Car;
