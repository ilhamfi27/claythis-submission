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
│   │   ├── application    # Business logic (use-cases, DTOs)
│   │   ├── domain         # Entities, repositories, and domain models
│   │   ├── infrastructure # Database, API integrations, third-party services
│   │   ├── controllers    # API entry points (optional)
```

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

1. **Node.js 18+**
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

The application is hosted at: [Claythis Submission](https://example.com)

To access, use the following credentials:

```
Username: admin
Password: password123!
```
