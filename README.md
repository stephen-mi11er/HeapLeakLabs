# HeapLeakLabs

Helping Developers Detect and Fix Exploits.

## Project Overview

HeapLeakLabs is a monorepo project designed to manage employee salaries and related operations. It consists of multiple packages, each serving a specific purpose:

- **Core**: Contains the core business logic and handlers.
- **Database**: Manages database schema, migrations, and interactions using Prisma.
- **Frontend**: A Next.js-based web application for the user interface.

## Packages

### Core
The `core` package contains the main business logic and models for the application. It includes handlers for managing employees and users.

### Database
The `database` package is responsible for database schema management and migrations. It uses Prisma for ORM and includes the schema definition in `schema.prisma` and `init.sql`.

### Frontend
The `frontend` package is a Next.js application that serves as the user interface for the project. It includes components, pages, and middleware for the web application.

## Getting Started

### Prerequisites
- Node.js
- Docker

### Running the website
Clone the repository and install dependencies:

1. Copy `.env.example` to `.env`
2. Run `docker-compose up --build --watch`

### Modifying seed script
If you want to change any of the SQL seed data:

1. Run `docker-compose down --volumes`
2. Modify seed data at `packages/database/init.sql`
3. Run `docker-compose up --build --watch`