/*
  Warnings:

  - Added the required column `membershipDate` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" ADD COLUMN     "membershipDate" TEXT NOT NULL;
