"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async_await_1 = require("./async-await");
async function main() {
    console.log("Running Async/Await exercises...\n");
    await (0, async_await_1.getHelloAsync)();
    await (0, async_await_1.runSimulatedTask)();
    await (0, async_await_1.handleTaskError)();
    const result14 = await (0, async_await_1.multiplyAfterDelay)(5);
    console.log("14. Multiply result:", result14);
    await (0, async_await_1.runSequentially)();
    await (0, async_await_1.runInParallel)();
    await (0, async_await_1.iteratePromises)();
    const user18 = await (0, async_await_1.fetchUser)(1);
    console.log("18. Fetched user:", user18);
    await (0, async_await_1.fetchUsers)([1, 2, 3]);
    try {
        const user20 = await (0, async_await_1.fetchWithTimeout)(1);
        console.log("20. Fetched user with timeout:", user20);
    }
    catch (error) {
        console.error("20. Timeout error:", error.message);
    }
}
main();
