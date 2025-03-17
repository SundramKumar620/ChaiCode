# Finishing Backend With MongoDB

### 1. **Create Routes & Controllers**
- **Login**: Authenticate user with email and password.
- **Logout**: Clear session or token.
- **Reset Password**: Send reset email, update password.
- **Forget Password**: Generate a reset token and email it.
- **Get Profile**: Fetch user profile based on the logged-in user.
  
### 2. **Set up Prisma**
- Initialize Prisma: `npx prisma init`
- Update `schema.prisma` for MongoDB with a `User` model.
- Set `DATABASE_URL` in `.env` and run `npx prisma generate`.

### 3. **JWT Authentication**
- Generate JWT on successful login.
- Use middleware to protect routes (e.g., `/profile`).

### 4. **Password Hashing**
- Use **bcryptjs** to hash passwords during registration and compare hashes during login.
