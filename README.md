# Homework Assignment 8

This project is part of the **React 2.0** course in the **FSON-112** group. It
is built using **Vite** and deployed on **Vercel**.

## Overview

This project extends the functionality of Homework Assignment 7 by **adding user
authentication** and **integrating with a ready-made backend**. Instead of using
`mockapi.io`, the application now interacts with a production-ready API:  
🔗 **[Connections API](https://connections-api.goit.global/docs)**

Users must **register and log in** to access their personal contact list.
Contacts are stored securely on the backend, ensuring **each user sees only
their own contacts**. Authentication is handled using **JWT (JSON Web Tokens)**
for secure access.

### Tech Stack

- **React** – Frontend library
- **Redux Toolkit** – State management
- **Redux Async Thunks** – Handling asynchronous API requests
- **Axios** – API request library
- **Connections API** – Backend for authentication and contact management
- **JWT** – Secure user authentication
- **Vite** – Fast development and build tool
- **Vercel** – Deployment platform

### Features

- **User authentication with JWT**:
  - Implemented **user registration** (`POST /users/signup`).
  - Added **user login** (`POST /users/login`).
  - Used **token-based authentication** for secure access.
- **Backend integration for authentication and private data**:

  - Contacts are fetched **only for authenticated users** (`GET /contacts`).
  - User credentials and tokens are securely stored.

- **Updated contact management system**:
  - Contacts are **protected and user-specific**.
  - Added API calls for **adding, deleting, and fetching contacts**.

### Migration Highlights

This project **refactors Homework Assignment 7**, replacing the previous mock
backend (`mockapi.io`) with an **authenticated API service**:

1. Integrated **Connections API** with JWT authentication.
2. Added user authentication (`signup` & `login`) and protected contacts.
3. Updated Redux store to manage authentication state and API calls.
4. Ensured contacts are fetched **only for logged-in users**.
5. Modified components to conditionally render UI based on authentication
   status.

---

The application remains deployed on **Vercel** and continues to utilize **Vite**
for fast development and builds.
