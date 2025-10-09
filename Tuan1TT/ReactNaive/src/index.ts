import { Person} from './bai1';

var person = new Person("John", 30);
console.log(person);

import { Student } from './bai2';
var student = new Student("An", 20, "12A1");
console.log(student);

import { Car } from './bai3';
const car = new Car("Toyota", "Camry", 2022);
console.log(car);

import { Rectangle } from './bai4';
const rect = new Rectangle(5, 3);
console.log("Diện tích:", rect.getArea());
console.log("Chu vi:", rect.getPerimeter());

import { BankAccount } from './bai5';
const account = new BankAccount(1000);
account.deposit(300);
account.withdraw(100);

import { Book } from './bai6';
const book = new Book ("Xứ sở miên man","Jun Phạm", 2023)
console.log(book);

import { User } from './bai7';
const user = new User("Nguyễn Văn A");
console.log("Bài 7 - Tên người dùng:", user.name);
user.name = "Trần Thị B";
console.log("Bài 7 - Tên người dùng mới:", user.name);


// Bài 8: Khai báo lớp Product và lọc sản phẩm có giá > 100
import { Product } from './bai8';

const products: Product[] = [
    new Product("Bút", 20),
    new Product("Sách", 120),
    new Product("Vở", 80),
    new Product("Balo", 200),
    new Product("Thước", 50)
];

const filteredProducts = products.filter(product => product.price > 100);

console.log("Các sản phẩm có giá > 100:");
filteredProducts.forEach(product => {
    console.log(`Tên: ${product.name}, Giá: ${product.price}`);
});

import { Animal, Chuot } from './bai9';

const dog: Animal = new Chuot("mickey");
dog.sound();


import { Account } from './bai10';
const acc = new Account("user1", "123456", 101);
console.log("Username:", acc.username);
console.log("ID:", acc.id);
console.log("Mật khẩu đúng?", acc.checkPassword("123456"));

