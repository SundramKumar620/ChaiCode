# Backend Internals - Node.js

### **1. Node.js as a Runtime**
- **Node.js** is a runtime environment for executing JavaScript code on the server-side.
- It combines the power of **JavaScript (JS)** with low-level system operations, offering high performance through **C++ bindings**.
- **V8 engine** (from Chrome) powers Node.js, providing fast execution of JavaScript code.

### **2. JavaScript Engines**
- **V8 Engine**: Google's high-performance JavaScript engine used in Node.js to execute JS code.
- **SpiderMonkey**: Mozilla's JS engine used in Firefox.
- **Apple WebKit**: JavaScript engine used in Apple’s Safari browser.

### **3. Deno and Bun**
- **Deno**: A modern runtime for JavaScript and TypeScript, created by Node.js's creator, Ryan Dahl, to address some limitations in Node.js.
- **Bun**: A fast, new JavaScript runtime built from scratch to focus on performance (faster startup and faster execution), and it’s compatible with most Node.js APIs.

### **4. Drop-in Replacement**
- **Drop-in replacement** means that one piece of software can be swapped with another without changing other components. For example, Deno or Bun can be used as replacements for Node.js in certain scenarios, as they have similar APIs.

### **5. NPM (Node Package Manager)**
- **NPM** is the package manager for Node.js. It helps developers to install, share, and manage dependencies in their applications.
- It manages **dependencies** (libraries or modules) that your Node.js app needs.

### **6. Code Execution in Node.js**
- When Node.js executes code, it **wraps it in a function** and gives certain parameters like:
  - `__filename`: Represents the full path to the current file.
  - `__dirname`: Represents the directory name of the current module.
  - `module`: The current module.
  - `exports`: An object used to export functionality from a module.
  - `require`: A function used to import modules.

### **7. Package Files in Node.js**
- **package.json**: Contains metadata about your project, like dependencies, scripts, and other configurations.
- **package-lock.json**: Ensures that your project dependencies remain the same across different installations, locking the versions of installed packages.

### **8. Semantic Versioning (Semver)**
- **Semantic Versioning** is a versioning system for software, defined as `MAJOR.MINOR.PATCH`.
  - **MAJOR**: Changes that break backward compatibility.
  - **MINOR**: New features that are backward-compatible.
  - **PATCH**: Bug fixes or minor changes that don’t affect functionality.
  
  **Example**: `1.2.3` means major version 1, minor version 2, patch version 3.

### **9. Codemod**
- **Codemod** refers to a tool used to apply changes across large codebases, usually to automate refactoring or updates.

### **10. Dependencies in Node.js**
- **Dependencies**: External libraries or modules your project relies on.
- They are listed in `package.json` and managed by NPM.

### **11. The `^` Symbol in Versioning**
- In **semver**, the `^` symbol means "compatible with the version". It allows automatic updates to minor and patch versions but **not major versions**. For example:
  - `"^1.2.3"` means any version `>=1.2.3` but `<2.0.0`.

### **12. Creating a Server Using Node.js**
- You can create an HTTP server in Node.js using the built-in **http module**. 
  Example:
  ```javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  });
  server.listen(8000, () => console.log('Server running at http://localhost:8000/'));
  ```

### **13. `req.method` and `req.url`**
- **`req.method`**: The HTTP method (e.g., GET, POST, PUT, DELETE) used for the request.
- **`req.url`**: The URL requested by the client, which indicates the endpoint or resource being accessed.

### **14. `curl` Command**
- **`curl`** is a command-line tool used to transfer data to or from a server.
  - It's commonly used to test APIs, e.g., to make GET, POST, or other types of HTTP requests.
  Example:
  ```bash
  curl http://localhost:8000
  ```

### **15. Summary: Key Concepts**
- **Node.js**: A runtime that uses **V8 engine**, developed to run JavaScript outside the browser.
- **NPM**: The package manager for managing project dependencies.
- **Modules**: Reusable units of code in Node.js (via `require`, `module.exports`).
- **HTTP Server**: You can create a server using Node.js to handle requests with `req.method` and `req.url`.
- **Versioning**: Semantic versioning (`MAJOR.MINOR.PATCH`) is used to track updates and compatibility.
- **Tools**: Use **`curl`** for making HTTP requests and testing your server.

---

This is a high-level summary of the topics you're covering in your **Node.js backend internals** class. Each of these topics builds foundational knowledge for understanding how Node.js operates and how to use it effectively for backend development.
