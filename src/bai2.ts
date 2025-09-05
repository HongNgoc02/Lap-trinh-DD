export class Person{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// Thêm lớp Student kế thừa Person, có thuộc tính grade và phương thức hiển thị thông tin
export class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    hienThiThongTin(): void {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
    }
}