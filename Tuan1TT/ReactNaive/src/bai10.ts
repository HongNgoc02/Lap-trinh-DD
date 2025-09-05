export class Account {
    public username: string;
    private password: string;
    public readonly id: number;

    constructor(username: string, password: string, id: number) {
        this.username = username;
        this.password = password;
        this.id = id;
    }

    // Phương thức để kiểm tra mật khẩu
    checkPassword(pass: string): boolean {
        return this.password === pass;
    }
}