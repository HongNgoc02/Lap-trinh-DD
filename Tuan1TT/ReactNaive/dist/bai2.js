"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Person = Person;
// Thêm lớp Student kế thừa Person, có thuộc tính grade và phương thức hiển thị thông tin
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    hienThiThongTin() {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
    }
}
exports.Student = Student;
