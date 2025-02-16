# Claythis Submission

This project follows a **monolithic** architecture using **NestJS** for the backend and **NextJS** for the frontend.

## 📂 Project Structure

```
root
│── app
│   ├── backend   # NestJS (Backend)
│   ├── frontend  # NextJS (Frontend)
│
│── misc
│   ├── docker    # Docker Compose configuration
```

### 🏗 Backend (NestJS)

The backend follows **Domain-Driven Design (DDD)** with the following structure:

```
app/backend
│── src
│   ├── <module-name>
│       ├── application
│           ├── rest
│               └── controllers.ts  # handles REST request & response
│           ├── dto                 # store all DTO used by application REST layer
│       ├── domain                  # store all domain or logics
│           └── module.service.ts
│       ├── infrastructure          # store all logic to connect to external services
```

With DDD architecture, here we separate logic, and REST layer.

### 🎨 Frontend (NextJS)

The frontend uses **App Router** (NextJS 13+) with the following structure:

```
app/frontend
│── src
│   ├── app         # Next.js app router
│   ├── components  # Reusable UI components
│   ├── services    # External API calls
│   ├── store       # Redux state management
│   ├── hooks       # Custom React hooks
```

---

## ⚙️ Requirements

Before developing this project, ensure you have the following installed:

1. **Node.js 20+**
2. **Docker**

---

## 🚀 Start Development Environment

### 1️⃣ Install dependencies for both backend and frontend:

```sh
yarn backend && yarn frontend
```

### 2️⃣ Copy environment files from example templates:

```sh
cd app/backend && cp .env.example .env
cd ../../
cd app/frontend && cp .env.example .env.local
cd ../../
```

### 3️⃣ Start the development servers:

```sh
yarn start:all:dev
```

Once all services are running:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:1321](http://localhost:1321)

---

## 🌍 Domain and Credentials

The application is hosted at: [Claythis Submission](https://claythis-submission.vercel.app)

To access the dashboard from login page, use the following credentials:

```
Username: admin
Password: password123!
```

## <img src="https://www.svgrepo.com/show/374111/swagger.svg" alt="Swagger Logo" width="30"/> Swagger

The backend also have a swagger, you can access it by opening `/api-docs` path or here [Swagger](https://claythis-backend-production.up.railway.app/api-docs)

You need to login using the API in order to use the other API. The username and the password is the same.
