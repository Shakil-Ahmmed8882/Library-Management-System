# Library Management System API

## Objective
Develop a backend API for a Library Management System to manage books, authors, memberships, and borrowing activities. This API includes CRUD operations for books, authors, members, and borrow records, along with endpoints for borrowing and returning books. UUID is used for unique identification in all tables.

---

## Technologies Required
- **Prisma ORM**
- **Node.js**
- **PostgreSQL**
- **Express.js**
- **TypeScript**

---

## Database Schema Requirements
Using Prisma ORM, create the following schema with UUID as the primary key:

### 1. Book Table
| Field           | Type   | Description                               |
|-----------------|--------|-------------------------------------------|
| bookId          | UUID   | Unique identifier for each book           |
| title           | String | Title of the book                         |
| genre           | String | Genre or category of the book             |
| publishedYear   | Int    | Year the book was published               |
| totalCopies     | Int    | Total copies of the book in the library   |
| availableCopies | Int    | Number of copies currently available      |

### 2. Author Table
| Field        | Type     | Description                          |
|--------------|----------|--------------------------------------|
| authorId     | UUID     | Unique identifier for each author    |
| name         | String   | Name of the author                   |
| bio          | Text     | Short biography of the author        |
| dateOfBirth  | DateTime | Birth date of the author             |

### 3. Member Table
| Field           | Type     | Description                           |
|-----------------|----------|---------------------------------------|
| memberId        | UUID     | Unique identifier for each member     |
| name            | String   | Name of the library member           |
| email           | String   | Member’s email (unique)              |
| phone           | String   | Member’s contact number              |
| membershipDate  | DateTime | Date the member joined the library   |

### 4. BorrowRecord Table
| Field        | Type     | Description                           |
|--------------|----------|---------------------------------------|
| borrowId     | UUID     | Unique identifier for each borrow record |
| borrowDate   | DateTime | Date when the book was borrowed       |
| returnDate   | DateTime | Date when the book was returned (nullable) |
| bookId       | UUID     | Foreign key referencing Book          |
| memberId     | UUID     | Foreign key referencing Member        |

---

## Features & Endpoints

### 1. Book CRUD Operations

#### Create Book
- **Endpoint**: `POST /api/books`
- **Request Body**:
  ```json
  {
    "title": "To Kill a Mockingbird",
    "genre": "Fiction",
    "publishedYear": 1960,
    "totalCopies": 10,
    "availableCopies": 10
  }
