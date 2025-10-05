"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(username, password, id) {
        this.username = username;
        this.password = password;
        this.id = id;
    }
    // Phương thức để kiểm tra mật khẩu
    checkPassword(pass) {
        return this.password === pass;
    }
}
exports.Account = Account;
