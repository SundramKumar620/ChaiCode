# Building full stack project (Auth)
Summary :-

1. **NPM (Node Package Manager):**
   - Used to manage dependencies in a Node.js project.
   - Allows you to install, update, and manage packages.

2. **Semantic Versioning:**
   - Versioning scheme: `MAJOR.MINOR.PATCH`.
     - **MAJOR**: Incompatible changes.
     - **MINOR**: Backward-compatible new features.
     - **PATCH**: Backward-compatible fixes.

3. **Import:**
   - Use `require()` in Node.js to import modules.

4. **Environment Variables (.env):**
   - Use a `.env` file to store sensitive configuration (e.g., API keys, DB credentials).
   - Load variables with the `dotenv` package.

5. **GET, POST, PUT, DELETE (HTTP Methods):**
   - **GET**: Retrieve data.
   - **POST**: Create new data.
   - **PUT**: Update existing data.
   - **DELETE**: Remove data.

6. **Nodemon:**
   - A development tool that automatically restarts the Node.js server when file changes are detected.

7. **Routes:**
   - Define paths and handle requests in Express.js using `app.get()`, `app.post()`, etc.

8. **Start Server:**
   - Use `node <filename>.js` or `npm start` to run the application.

9. **CORS (Cross-Origin Resource Sharing):**
   - Allows your server to handle requests from different domains.
   - Use the `cors` package to enable it in Express.

10. **IP Whitelisting:**
    - Restrict access to the server based on IP addresses.
    - Can be set up through middleware to check the requester's IP.

11. **Connect Database:**
    - Use packages like `mongoose` (for MongoDB)

