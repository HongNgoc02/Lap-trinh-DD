export interface Animal {
    name: string;
    sound(): void;
}

export class Chuot implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log(`${this.name} kêu: Chít chít!`);
    }
}