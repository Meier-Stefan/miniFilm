# Minifilm - Cloud Computing Lab 4

This repository contains the code and resources for **Minifilm**, a sample Node.js application written in TypeScript. It demonstrates user login/authentication functionality.

## Description

Minifilm is an example API that demonstrates key concepts such as scalability, fault tolerance, and cloud service integration. It focuses on user authentication and login functionality, utilizing libraries such as `bcryptjs` for password hashing, `dotenv` for environment variable management, `express` for building the API, `joi` for input validation, and `jsonwebtoken` for token-based authentication. Additionally, it connects to a MongoDB database for data storage and retrieval.

## Prerequisites

- Node.js and yarn installed
- Access to a MongoDB (you need to get the `MONGODB_URI` from there, it contains an access token.)
- Required dependencies listed in `package.json`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Meier-Stefan/minifilm.git
   cd minifilm
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

## Usage

1. Configure your cloud provider credentials in the `config.json` file.
2. Start the application:
   ```bash
   yarn start
   ```
