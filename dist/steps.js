"use strict";
/**
 * create admin module (api) -> keep common user in user collection
 * login user
 * create auth middleware to check permission to access
 * create new accesstoken token api by refresh token
 * create reusable function to validate repetative check , {dynamic_.. } exist, status,
 *
 * [] DONE LOGIN SYSTEMH
 * ----------------------------------------------------------------------
 *                          INITIAL SETUP
 * ----------------------------------------------------------------------
 * [✅] Commit History Requirement: 🌳 (1)
 * ----------------------------------------------------------------------
 *                          TABLE CREATION
 * ----------------------------------------------------------------------
 * [✅] create book table
 * [✅] create author table
 * [✅] Commit History Requirement: 🌳 (2)
 * [✅] create member table
 * [✅] create borrowrecord table
 * [✅] Commit History Requirement: 🌳 (3)
 *
 * [] DONE TABLE CREATION
 * ----------------------------------------------------------------------
 *                          ENDPOINT CREATION ( BOOK )
 * ----------------------------------------------------------------------
 * [✅] create book  ➡➡ POST /api/books (libraryDB)
 * [✅] Read All Books ➡➡ GET /api/books
 * [✅] Commit History Requirement: 🌳 (4)
 * [✅] Read Book by ID ➡➡ GET /api/books/:bookId
 * [✅] Update Book ➡➡ PUT /api/books/:bookId
 * [✅] Delete Book ➡➡ DELETE /api/books/:bookId
 * [✅] Commit History Requirement: 🌳 (5)
 *
 * [] DONE BOOK CRUD
 * ----------------------------------------------------------------------
 *                          ENDPOINT CREATION ( MEMBER )
 * ----------------------------------------------------------------------
 * [✅] Adds a new member ➡➡ POST /api/members
 * [✅] Read All members ➡➡ GET /api/members
 * [✅] Commit History Requirement: 🌳 (6)
 * [✅] Read Member by ID ➡➡ GET /api/members/:memberId
 * [✅] Update Member ➡➡ PUT /api/members/:memberId
 * [✅] Delete Member ➡➡ DELETE /api/members/:memberId
 * [✅] Commit History Requirement: 🌳 (7)
 *
 *
 * [] DONE BOOK CRUD
 * ----------------------------------------------------------------------
 *                          ENDPOINT CREATION ( Borrow & Return Books )
 * ----------------------------------------------------------------------
 * [] Borrow a Book ➡➡ POST /api/borrow
 * [] Return a Book ➡➡ POST /api/return
 * [] Commit History Requirement: 🌳 (8)
 * [] DONE BORROW & RETURN CRUD
 * ----------------------------------------------------------------------
 *                          ERROR HANDLING (BONUS)
 * ----------------------------------------------------------------------
 * [] Handle any error in the same structure
 * []  Overdue Borrow List
 * [] Commit History Requirement: 🌳 (9)
 * Calculate overdue books based on the due date.
 * Provide a list of overdue items with borrower details.
 *
 * [] DONE BORROW & RETURN CRUD
 *
 * ----------------------------------------------------------------------
 *                          SUBMISSION GUIDELINES:
 * ----------------------------------------------------------------------
 * [] clean codebase
 * [] Readme.md file
 * [] Commit History Requirement: 🌳 (10)
 * [] Live Deployment Link (Backend):
 * [] GitHub Repository Link
 *
 *
 * [] DONE BORROW & RETURN CRUD
 * ---------------------------------------------------------------------------------
 *
 *
 *
 *
 *
 *
 *
 *
 */
/*
feat(members): add CRUD operations for members

- Add create member endpoint POST /api/members
- Add get all members endpoint GET /api/members
- Add get member by id endpoint GET /api/members/:memberId
- Add update member endpoint PUT /api/members/:memberId
- Add delete member endpoint DELETE /api/members/:memberId



feat(members): add read, update, and delete member operations

- Add get member by id endpoint GET /api/members/:memberId
- Add update member endpoint PUT /api/members/:memberId
- Add delete member endpoint DELETE /api/members/:memberId



*/ 
