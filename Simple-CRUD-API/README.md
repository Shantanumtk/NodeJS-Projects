# Simple CRUD API

This is a basic Node.js CRUD API project that uses in-memory storage without a database. It provides endpoints for creating, reading, updating, and deleting items. The project also includes tests using Mocha, Chai, and Supertest.

## Features

- RESTful API for CRUD operations
- In-memory storage (no database)
- Testing with Mocha, Chai, and Supertest

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) installed

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/simple-crud-api.git
   cd simple-crud-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Start the Server

To start the server, run:

```bash
npm start
```

The server will run at [http://localhost:3000](http://localhost:3000).

### API Endpoints

| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| GET    | /items       | Get all items            |
| GET    | /items/:id   | Get item by ID           |
| POST   | /items       | Create a new item        |
| PUT    | /items/:id   | Update an existing item  |
| DELETE | /items/:id   | Delete an item           |

#### Example Requests

1. **Create an item:**
   ```bash
   curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"id": "1", "name": "Test Item"}'
   ```

2. **Get all items:**
   ```bash
   curl -X GET http://localhost:3000/items
   ```

3. **Update an item:**
   ```bash
   curl -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name": "Updated Item"}'
   ```

4. **Delete an item:**
   ```bash
   curl -X DELETE http://localhost:3000/items/1
   ```

## Testing

Run the tests using Mocha, Chai, and Supertest:

```bash
npm test
```

## Project Structure

```
simple-crud-api/
│
├── server.js           # Main server file
├── package.json        # Project metadata and dependencies
├── test/               # Test directory
│   └── api.test.js     # API test cases
└── README.md           # Project documentation
```

