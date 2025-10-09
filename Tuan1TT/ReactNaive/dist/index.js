"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
var person = new bai1_1.Person("John", 30);
console.log(person);
const bai2_1 = require("./bai2");
var student = new bai2_1.Student("An", 20, "12A1");
console.log(student);
const bai3_1 = require("./bai3");
const car = new bai3_1.Car("Toyota", "Camry", 2022);
console.log(car);
const bai4_1 = require("./bai4");
const rect = new bai4_1.Rectangle(5, 3);
console.log("Diện tích:", rect.getArea());
console.log("Chu vi:", rect.getPerimeter());
const bai5_1 = require("./bai5");
const account = new bai5_1.BankAccount(1000);
account.deposit(300);
account.withdraw(100);
const bai6_1 = require("./bai6");
const book = new bai6_1.Book("Xứ sở miên man", "Jun Phạm", 2023);
console.log(book);
const bai7_1 = require("./bai7");
const user = new bai7_1.User("Nguyễn Văn A");
console.log("Bài 7 - Tên người dùng:", user.name);
user.name = "Trần Thị B";
console.log("Bài 7 - Tên người dùng mới:", user.name);
// Bài 8: Khai báo lớp Product và lọc sản phẩm có giá > 100
const bai8_1 = require("./bai8");
const products = [
    new bai8_1.Product("Bút", 20),
    new bai8_1.Product("Sách", 120),
    new bai8_1.Product("Vở", 80),
    new bai8_1.Product("Balo", 200),
    new bai8_1.Product("Thước", 50)
];
const filteredProducts = products.filter(product => product.price > 100);
console.log("Các sản phẩm có giá > 100:");
filteredProducts.forEach(product => {
    console.log(`Tên: ${product.name}, Giá: ${product.price}`);
});
const bai9_1 = require("./bai9");
const dog = new bai9_1.Chuot("mickey");
dog.sound();
const bai10_1 = require("./bai10");
const acc = new bai10_1.Account("user1", "123456", 101);
console.log("Username:", acc.username);
console.log("ID:", acc.id);
console.log("Mật khẩu đúng?", acc.checkPassword("123456"));
