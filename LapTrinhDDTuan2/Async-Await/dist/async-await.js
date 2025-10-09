"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHelloAsync = getHelloAsync;
exports.runSimulatedTask = runSimulatedTask;
exports.handleTaskError = handleTaskError;
exports.multiplyAfterDelay = multiplyAfterDelay;
exports.runSequentially = runSequentially;
exports.runInParallel = runInParallel;
exports.iteratePromises = iteratePromises;
exports.fetchUser = fetchUser;
exports.fetchUsers = fetchUsers;
exports.fetchWithTimeout = fetchWithTimeout;
// Các hàm Promise từ phần trước, được dùng lại ở đây
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
// Bài 11: Convert Exercise 1 into async/await.
async function getHelloAsync() {
    const result = await helloPromise;
    console.log("11. Async/Await Hello:", result);
}
// Bài 12: Write an async function that calls simulateTask(2000) and logs the result.
async function runSimulatedTask() {
    console.log("12. Running simulated task...");
    const result = await simulateTask(2000);
    console.log("12. Task result:", result);
}
// Bài 13: Handle errors using try/catch with async/await.
async function handleTaskError() {
    try {
        // Giả lập một Promise bị lỗi
        const taskWithError = new Promise((_, reject) => {
            setTimeout(() => reject("Async/await error occurred!"), 1000);
        });
        await taskWithError;
    }
    catch (error) {
        console.error("13. Caught error:", error);
    }
}
// Bài 14: Write an async function that takes a number, waits 1 second, and returns the number * 3.
async function multiplyAfterDelay(num) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
}
// Bài 15: Call multiple async functions sequentially using await.
async function runSequentially() {
    console.log("15. Running tasks sequentially...");
    const result1 = await simulateTask(1000);
    console.log(`15. Sequential result 1: ${result1}`);
    const result2 = await simulateTask(500);
    console.log(`15. Sequential result 2: ${result2}`);
}
// Bài 16: Call multiple async functions in parallel using Promise.all().
async function runInParallel() {
    console.log("16. Running tasks in parallel...");
    const [result1, result2, result3] = await Promise.all([
        simulateTask(1000),
        simulateTask(1500),
        simulateTask(500),
    ]);
    console.log("16. Parallel results:", [result1, result2, result3]);
}
// Bài 17: Use for await...of to iterate over an array of Promises.
async function iteratePromises() {
    const promises = [
        simulateTask(500),
        simulateTask(200),
        simulateTask(1000),
    ];
    console.log("17. Iterating over promises...");
    for await (const result of promises) {
        console.log("17. Iteration result:", result);
    }
}
// Bài 18: Write an async function fetchUser(id) that simulates an API call.
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User_${id}` });
        }, 1000);
    });
}
// Bài 19: Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
async function fetchUsers(ids) {
    const userPromises = ids.map((id) => fetchUser(id));
    const users = await Promise.all(userPromises);
    console.log("19. Fetched all users:", users);
}
// Bài 20: Add a timeout: if the API call takes more than 2 seconds, throw an error.
async function fetchWithTimeout(id) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request timed out after 2 seconds"));
        }, 2000);
    });
    return Promise.race([fetchUser(id), timeoutPromise]);
}
