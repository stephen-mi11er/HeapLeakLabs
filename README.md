# PayTrack | Employee Salary Exploit Software

Helping Developers Detect and Fix Exploits

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) 

## Table of Contents

* [Features](#features)
* [Architecture](#architecture)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
  * [Clone the Repository](#clone-the-repository)
  * [Configure Environment Variables](#configure-environment-variables)
  * [Start with Docker Compose](#start-with-docker-compose)
* [Modifying Seed Data](#modifying-seed-data)
* [Project Structure](#project-structure)
* [Testing](#testing)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* **Modular Monorepo**: Separate packages for core logic, database, and frontend.
* **Secure Data Management**: Prisma ORM with automated migrations.
* **Developer Tooling**: Pre-configured Docker Compose for rapid local setup.
* **Next.js Frontend**: Server‑side rendering, API routes, and modern React.

## Architecture

PayTrack is organized into three packages:

1. **Core**: Business logic, domain models, and request handlers.
2. **Database**: Prisma schema, migration scripts, and `init.sql` seed data.
3. **Frontend**: Next.js application with pages, components, and middleware.

Services are orchestrated via `docker-compose.yml` to ensure consistent development environments.

## Prerequisites

* **Node.js** (v16 or later)
* **Docker** & **Docker Compose**

## Getting Started

Follow these steps to run PayTrack locally.

### Clone the Repository

```bash
git clone https://github.com/stephen-mi11er/PayTrack
cd PayTrack
```

### Configure Environment Variables

Duplicate the example file and update values:

```bash
cp .env.example .env
# Edit .env as needed
```

### Start with Docker Compose

```bash
docker-compose up --build --watch
```

This command will:

* Spin up a PostgreSQL database
* Apply Prisma migrations
* Seed initial data from `init.sql`
* Launch the Next.js frontend (default port: 4321)

Visit `http://localhost:4321` in your browser to access the app.

## Modifying Seed Data

If you need to adjust the SQL seed data in `init.sql`:

1. Tear down containers and volumes:

   ```bash
   docker-compose down --volumes
   ```

2. Edit the seed file:

   ```bash
   vim packages/database/init.sql
   ```

3. Restart the stack:

   ```bash
   docker-compose up --build
   ```

## Project Structure

```
PayTrack/
├── packages/
│   ├── core/       # Business logic, models, and handlers
│   ├── database/   # Prisma schema, migrations, and seed data
│   └── frontend/   # Next.js application
├── docker-compose.yml
├── .env.example
└── README.md
```

## Contributing

We welcome contributions that help improve HeapLeakLabs! Whether you’re submitting a bug fix, enhancing existing functionality, or adding new exploit detection scenarios, here’s how to get started:

Fork the repository and create a exploit branch:

```bash
git checkout -b exploit/your-exploit-name
```

Implement your changes:

Bug fixes: Describe the issue, include steps to reproduce, and explain how your patch resolves it. Use the `bug/you-bug-name` branch naming convention.

New exploits: Add or extend detection modules in packages/core, update database seed data under packages/database/init.sql to simulate the exploit, and create any necessary fixtures. Use the `exploit/you-exploit-name` branch naming convention.

Write a detailed description: Write a detailed description on how to exploit the vulnerability you are submitting.

Update documentation: Document new functionality or changes in this README, add usage examples, and update CHANGELOG.md if applicable.

Commit and push:

```bash
git add .
git commit -m 'feat: add detection for <exploit-name>'
git push origin feature/your-feature-name
```

Open a Pull Request: Provide a clear title and description, link to any related issues, and request reviews from the core team.

## License

This project is licensed under the [MIT License](LICENSE).