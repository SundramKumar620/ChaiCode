# Prisma Express and Postgresql database in backend
Summar:-

1. **Prisma + DB**: 
   - **Prisma** is an ORM for easy database management (PostgreSQL, MySQL, etc.) using a schema file. It handles database connections, migrations, and queries.

2. **Auth in PostgreSQL**:
   - **PostgreSQL** stores user credentials securely. Use Prisma to handle queries for managing users, sessions, and passwords.

3. **Stateful vs Stateless**:
   - **Stateful**: The server maintains session data (cookies, session storage).
   - **Stateless**: Data like JWT is stored client-side, so the server doesn’t need to remember session info.

4. **Symmetric Encryption**:
   - **Single key** for both encryption and decryption. Faster but less secure if the key is exposed. Example: AES.

5. **Asymmetric Encryption**:
   - Uses a **public** key for encryption and a **private** key for decryption. More secure, often used in SSL/TLS and email encryption. Example: RSA.

6. **Auth0**:
   - A service for managing authentication (sign-ups, logins, roles). Supports OAuth, social logins, and Single Sign-On (SSO).

7. **OpenID Connect**:
   - Extension of **OAuth 2.0** for user authentication. It lets clients authenticate users via an identity provider.

8. **SAML**:
   - **XML-based** protocol for Single Sign-On (SSO) in enterprise environments. Used for securely exchanging authentication data between parties.

9. **Refresh Token**:
   - A **long-lived token** used to obtain a new **short-lived access token** when the old one expires, without requiring the user to log in again.

10. **Access Token**:
    - A **short-lived token** that provides access to specific resources or APIs. It typically expires after a set period.

This gives a little more context for each! Let me know if you'd like more details on any part.
