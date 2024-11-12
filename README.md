![Library](https://www.pixel-studios.com/blog/wp-content/uploads/2018/12/012-1200x600.jpg)

Image source: [Pixel Studios](https://www.pixel-studios.com/blog/library-management-project-software-system/)


# Library Management System

## Project Overview
The **Library Management System** is a backend API designed to manage books, members, and borrowing activities within a library. It allows staff and members to interact with the library’s resources, including managing book details, membership information, and borrowing/returning books. This project provides a clean, efficient, and scalable solution for libraries to manage their day-to-day operations.

## Technology Stack
- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework to handle HTTP requests.
- **Prisma ORM**: To interact with the PostgreSQL database using an object-relational mapping approach.
- **PostgreSQL**: Relational database for storing books, members, and borrow records.
- **TypeScript**: For type safety and better development experience.

## Features
- **CRUD Operations**: Implemented for managing books and members.
- **Borrowing System**: Allows users to borrow and return books, keeping track of the borrow records.
- **Overdue Tracking**: Tracks overdue borrowed books based on a 14-day return policy.
- **Error Handling**: Provides clear and structured error messages for failed operations.

## Endpoints

This API exposes the following key endpoints:

| **Category**                    | **HTTP Method** | **Endpoint**                        | **Description**                                  |
|----------------------------------|-----------------|-------------------------------------|--------------------------------------------------|
| **Book Management**              | **POST**        | `/api/books`                        | Create a new book                               |
|                                  | **GET**         | `/api/books`                        | Get a list of all books                         |
|                                  | **GET**         | `/api/books/:bookId`                | Get details of a specific book                  |
|                                  | **PUT**         | `/api/books/:bookId`                | Update book details                             |
|                                  | **DELETE**      | `/api/books/:bookId`                | Delete a book                                   |
| **Member Management**            | **POST**        | `/api/members`                      | Create a new member                             |
|                                  | **GET**         | `/api/members`                      | Get a list of all members                       |
|                                  | **GET**         | `/api/members/:memberId`            | Get details of a specific member                |
|                                  | **PUT**         | `/api/members/:memberId`            | Update member details                           |
|                                  | **DELETE**      | `/api/members/:memberId`            | Delete a member                                 |
| **Borrowing & Returning Books**  | **POST**        | `/api/borrow`                       | Borrow a book                                   |
|                                  | **POST**        | `/api/return`                       | Return a borrowed book                          |
|                                  | **GET**         | `/api/borrow/overdue`               | Get a list of overdue borrowed books            |
| **Authentication**               | **POST**        | `/api/auth/register`                | Register a new user                             |
|                                  | **POST**        | `/api/auth/login`                   | Login with user credentials                     |
|                                  | **POST**        | `/api/auth/logout`                  | Logout the user                                 |
|                                  | **POST**        | `/api/auth/refresh-token`           | Refresh the authentication token                |
| **Password Reset**               | **POST**        | `/api/auth/forgot-password`         | Request password reset                          |
|                                  | **POST**        | `/api/auth/reset-password`          | Reset user password                             |

## Local Setup and Installation

To run this project locally, follow these steps:

### Prerequisites
- **Node.js** (v14 or above)
- **PostgreSQL** installed and running
- **Prisma CLI** installed globally or locally

### Installation Steps

1. **Clone this repository**:
   git clone 
   ```bash
   https://github.com/Shakil-Ahmmed8882/Library-Management-System.git
   ```
   Change directory
   ```bash
   cd Library-Management-System
   ```

## 3. Set up your PostgreSQL database
Create a PostgreSQL database and configure the .env file with your credentials:
```bash
    DATABASE_URL="postgresql://user:password@localhost:5432/library_db?schema=public"
```


## Environment Variables

| **Variable**                   | **Description**                              | **Value**                                                                                              |
|---------------------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **`DATABASE_URL`**              | PostgreSQL connection string                 | `postgresql://user:password@hostname:5432/database_name?schema=public`                                 |
| **`NODE_ENV`**                  | Application environment                      | `development`                                                                                           |
| **`PORT`**                      | Server port number                           | `3000`                                                                                                  |
| **`JWT_ACCESS_SECRET`**         | JWT access token secret                      | `your-access-token-secret-key`                                                                          |
| **`JWT_ACCESS_EXPIRES_IN`**     | JWT access token expiry                      | `1h`                                                                                                    |
| **`JWT_REFRESH_SECRET`**        | JWT refresh token secret                     | `your-refresh-token-secret-key`                                                                         |
| **`JWT_REFRESH_EXPIRES_IN`**    | JWT refresh token expiry                     | `7d`                                                                                                    |
| **`BCRYPT_SALT_ROUND`**         | Bcrypt hashing salt rounds                   | `10`                                                                                                    |
| **`RESET_PASS_UI_LINK`**        | Password reset UI link                       | `https://yourfrontendapp.com/reset-password`                                                           |



## Run Prisma migrations
Execute the following command to set up the database schema:

```bash
npx prisma migrate dev --name init
```


## ER Diagram Visual Look

Here is the ER diagram visual representation of the Library Management System:

![ER Diagram](https://raw.githubusercontent.com/Shakil-Ahmmed8882/Library-Management-System/refs/heads/main/src/assets/diagram.png)


## And Finally

Creating systems like the Library Management System is a rewarding experience that brings you closer to mastering modern web technologies. This project not only teaches you the intricacies of backend architecture and database management but also provides a practical, real-world solution that can significantly impact library operations.

If you are the kind of person who wants to learn, teach, discuss ideas, and build, Feel free to connect with me on LinkedIn or Facebook. I would be glad to see you. 
- [LinkedIn](https://www.linkedin.com/in/shakil-ahmmed-501aaa26a/)
- [Facebook](https://www.facebook.com/profile.php?id=100089922151860)

---

### A Big Thank You

Thank you for taking the time to explore this project. Whether contributing, learning, or browsing, your interest and dedication to growth make a difference. Keep building, and remember: the best is yet to come. 
