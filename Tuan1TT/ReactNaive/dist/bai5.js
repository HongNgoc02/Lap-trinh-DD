"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Nạp tiền: ${amount}. Số dư mới: ${this.balance}`);
        }
        else {
            console.log("Số tiền nạp phải lớn hơn 0.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Rút tiền: ${amount}. Số dư mới: ${this.balance}`);
        }
        else {
            console.log("Số tiền rút không hợp lệ hoặc vượt quá số dư.");
        }
    }
}
exports.BankAccount = BankAccount;
