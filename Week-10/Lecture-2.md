# Building full stack Project 2

Summary :-

1. **Always Use `await` in DB**:
   - `await` is used to ensure asynchronous operations like database queries finish before proceeding to the next task.
   - Helps avoid race conditions and ensures smoother code execution.

2. **Route Parameters**:
   - Part of the URL path, used to capture dynamic values (e.g., `/user/:id`).
   - Useful in REST APIs for identifying resources.

3. **Query Parameters**:
   - Key-value pairs added to the URL after `?`, used for filtering or searching data (e.g., `/users?age=25`).
   - Common in GET requests.

4. **Postman**:
   - A tool for testing APIs.
   - Allows sending requests (GET, POST, PUT, DELETE) and examining responses, useful for API development.

5. **Validation (Zod, Yup)**:
   - **Zod**: A TypeScript-first schema validation library.
   - **Yup**: A JavaScript validation library for schema definitions, often used in forms.

6. **Register User**:
   - Process of storing new user information (username, password) in the database, often with validation and password hashing.

7. **Create Token with Crypto**:
   - Cryptography libraries (like `crypto`) are used to generate secure tokens for authentication.
   - Often involves generating random strings or hashes for session management.

8. **Pre-save Hook (Mongoose)**:
   - Used to run certain logic or validation on documents before they are saved to the database (e.g., hashing passwords).

9. **Bcryptjs**:
   - A library to hash and compare passwords securely.
   - Commonly used to store hashed passwords instead of plain-text ones.

10. **JWT (JSON Web Token)**:
    - Used for securely transmitting information between client and server.
    - Contains a payload (user info) and is signed to ensure integrity.

11. **Cookies**:
    - A small piece of data sent from the server and stored on the client-side.
    - Often used for managing user sessions (e.g., storing JWT).

12. **Login**:
    - User sends credentials (username, password) via POST request.
    - If valid, a token (JWT) is issued and sent to the client, typically stored in cookies for authentication on subsequent requests.

This summary covers key points about how to work with user registration, secure authentication, and API testing.
