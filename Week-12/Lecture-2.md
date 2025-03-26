# The Node Internals

### 1. **libuv**
   - **libuv** is a multi-platform support library used by **Node.js**.
   - It provides the event loop, asynchronous I/O operations, and thread pool functionality for **Node.js**.

### 2. **Async I/O (Asynchronous Input/Output)**
   - **Async I/O** allows non-blocking operations in which Node.js doesn't wait for tasks like file reading, network requests, etc., to finish before moving on to other tasks.
   - Improves performance and responsiveness by performing tasks in the background.

### 3. **Thread Pool**
   - Node.js uses a **thread pool** to perform **CPU-intensive tasks** like file I/O, encryption, compression, and database queries.
   - The thread pool is managed by **libuv** and is typically used for tasks that would block the event loop if executed synchronously.
   - The size of the thread pool can be configured using the `process.env.UV_THREADPOOL_SIZE` environment variable.

### 4. **Node Process**
   - The **Node.js process** is the running instance of Node.js, and each process has its own event loop, memory, and resources.
   - It can be controlled and managed using process-related APIs, like `process.env`, `process.exit()`, etc.

### 5. **Top-Level Code**
   - **Top-level code** refers to the code that is executed directly when a file is run (outside of any functions or callbacks).
   - In Node.js, top-level code is executed when the script is loaded, but asynchronous operations (like I/O) will continue to run later through the event loop.

### 6. **Event-Driven Architecture**
   - **Event-driven programming** is the backbone of Node.js.
   - The application reacts to events (e.g., HTTP requests, file I/O completion, etc.) by executing event handlers (callbacks) in response to the events.

### 7. **Event Callback**
   - **Event callbacks** are functions passed as arguments to event-driven methods.
   - These functions are executed when the corresponding event is emitted, allowing asynchronous handling of tasks.

### 8. **Event Loop**
   - The **event loop** is the core of the Node.js runtime that manages asynchronous operations.
   - It constantly checks for events (like I/O operations) and executes the associated event callbacks in a non-blocking manner.
   - The event loop ensures that Node.js can handle multiple tasks simultaneously without blocking the application.

### 9. **Thread Pool with Intensive Tasks (e.g., Cryptography)**
   - **CPU-intensive tasks** (like encryption, decryption, cryptographic operations) can block the event loop if executed synchronously.
   - Node.js offloads such tasks to the **thread pool** to avoid blocking the event loop and ensure smooth performance.

### 10. **process.env.UV_THREADPOOL_SIZE**
   - The environment variable **`process.env.UV_THREADPOOL_SIZE`** controls the size of Node.js's **thread pool**.
   - Default value is usually **4**, but you can increase it to handle more intensive tasks.
   - Example: `process.env.UV_THREADPOOL_SIZE = 8;` increases the thread pool size to 8.

### 11. **DB Diagram**
   - A **DB diagram** (Database Diagram) visually represents the structure of a database.
   - It shows tables, relationships between them (one-to-many, many-to-many), and other database elements.

### 12. **ER Diagram (Entity-Relationship Diagram)**
   - **ER diagrams** model the relationships between entities in a database.
   - It consists of **entities (tables)** and their **relationships** (e.g., one-to-many, many-to-many), helping to design and understand the database schema.

Eraser Link :- https://app.eraser.io/workspace/g84kDfwa79tp1QiF4uEW

