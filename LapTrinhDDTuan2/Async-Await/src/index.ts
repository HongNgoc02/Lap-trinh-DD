import {
  getHelloAsync,
  runSimulatedTask,
  handleTaskError,
  multiplyAfterDelay,
  runSequentially,
  runInParallel,
  iteratePromises,
  fetchUser,
  fetchUsers,
  fetchWithTimeout,
} from "./async-await";

async function main() {
  console.log("Running Async/Await exercises...\n");

  await getHelloAsync();
  await runSimulatedTask();
  await handleTaskError();
  const result14 = await multiplyAfterDelay(5);
  console.log("14. Multiply result:", result14);
  await runSequentially();
  await runInParallel();
  await iteratePromises();
  const user18 = await fetchUser(1);
  console.log("18. Fetched user:", user18);
  await fetchUsers([1, 2, 3]);
  try {
    const user20 = await fetchWithTimeout(1);
    console.log("20. Fetched user with timeout:", user20);
  } catch (error: any) {
    console.error("20. Timeout error:", error.message);
  }
}

main();