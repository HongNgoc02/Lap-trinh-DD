"use strict";
//1. Tạo một Promise trả về chuỗi "Hello Async" sau 2 giây.
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
helloPromise.then((result) => console.log("1. Hello Async:", result));
//2. Viết một hàm trả về một Promise có kết quả là 10 sau 1 giây.
function resolveWithTen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
resolveWithTen().then((result) => console.log("2. Resolve with 10:", result));
//3. Viết một hàm từ chối một Promise với lỗi 
//"Something went wrong" sau 1 giây.
function rejectWithError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
rejectWithError().catch((error) => console.log("3. Reject with error:", error.message));
//4. Sử dụng .then() và .catch() để xử lý một Promise trả về một số ngẫu nhiên.
const randomPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve(randomNumber);
    }
    else {
        reject(new Error("so ngau nhien nho hon 0.5"));
    }
});
randomPromise
    .then((result) => console.log("4. So ngau nhien (lon hon 0.5):", result))
    .catch((error) => console.log("4. Error:", error.message));
//5. Tạo một hàm simulateTask(time) trả về một Promise có 
//kết quả là "Task done" sau time ms.
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
simulateTask(1500).then((result) => console.log("5. Simulate Task:", result));
//6. Sử dụng Promise.all() để chạy song song 3 Promise được mô phỏng và in kết quả.
const task1 = simulateTask(1000);
const task2 = simulateTask(2000);
const task3 = simulateTask(1500);
Promise.all([task1, task2, task3])
    .then((results) => console.log("6. Promise.all results:", results))
    .catch((error) => console.log("6. Error in Promise.all:", error.message));
//7. Sử dụng Promise.race() để trả về bất kỳ Promise nào có kết quả là 2 trước.
const fastTask = simulateTask(500);
const slowTask = simulateTask(2000);
Promise.race([fastTask, slowTask])
    .then((result) => console.log("7. Promise.race result:", result));
//8. Tạo một chuỗi Promise: bình phương số 2, sau đó nhân đôi nó, rồi cộng thêm 5.
Promise.resolve(2)
    .then((num) => num * num)
    .then((num) => num * 2)
    .then((num) => num + 5)
    .then((result) => console.log("8. Promise chain result:", result));
//9. Viết một Promise đọc một mảng sau 1 giây và lọc các số chẵn.
const filterEvenPromise = new Promise((resolve) => {
    const numbers = [1, 2, 3, 4, 5, 6];
    setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        resolve(evenNumbers);
    }, 1000);
});
filterEvenPromise.then((result) => console.log("9. Filtered even numbers:", result));
//10. Sử dụng .finally() để ghi lại thông báo "Hoàn thành" khi một Promise kết thúc (thành công hoặc thất bại).
const finalPromise = new Promise((resolve) => {
    resolve("Success!");
});
const finalRejectPromise = new Promise((_, reject) => {
    reject("Failure!");
});
finalPromise
    .then((result) => console.log("10. Success:", result))
    .finally(() => console.log("10. The first promise is done."));
finalRejectPromise
    .catch((error) => console.log("10. Error:", error))
    .finally(() => console.log("10. The second promise is done."));
