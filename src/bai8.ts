export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

// Tạo mảng sản phẩm
const products: Product[] = [
    new Product("Bút", 20),
    new Product("Sách", 120),
    new Product("Vở", 80),
    new Product("Balo", 200),
    new Product("Thước", 50)
];

// Lọc sản phẩm có giá > 100
const filteredProducts = products.filter(product => product.price > 100);

console.log("Các sản phẩm có giá > 100:");
filteredProducts.forEach(product => {
    console.log(`Tên: ${product.name}, Giá: ${product.price}`);
});