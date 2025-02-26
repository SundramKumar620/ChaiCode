# Project and Machine Coding Round

Summary:
1. **Synchronous Code**: Runs sequentially, blocking further execution until each task finishes.
2. **Asynchronous Code**: Executes tasks independently, allowing other operations to run without waiting.
3. **Blocking Code**: Stops program execution until a task is completed (e.g., `readFileSync`).
4. **Non-blocking Code**: Allows the program to continue executing while waiting for a task to finish (e.g., `readFile` with a callback).
5. **File System (fs)**: Provides functions to interact with the file system, such as reading and writing files (`fs.readFile`, `fs.writeFile`).
6. **Callback Function**: A function passed as an argument to another function that is invoked after an operation completes.
7. **Event Loop**: Continuously checks the call stack and message queue, handling asynchronous tasks.
8. **Promises**: Represent a value that may be available now or in the future, used for handling async operations (`.then`, `.catch`).
9. **Custom Promise**: Creating your own promise to handle asynchronous logic using `new Promise()`.
10. **Promisify**: Converting callback-based functions into promise-based ones

