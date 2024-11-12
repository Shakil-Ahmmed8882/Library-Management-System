-- DropForeignKey
ALTER TABLE "borrowRecords" DROP CONSTRAINT "borrowRecords_bookId_fkey";

-- DropForeignKey
ALTER TABLE "borrowRecords" DROP CONSTRAINT "borrowRecords_memberId_fkey";

-- AddForeignKey
ALTER TABLE "borrowRecords" ADD CONSTRAINT "borrowRecords_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("bookId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowRecords" ADD CONSTRAINT "borrowRecords_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("memberId") ON DELETE CASCADE ON UPDATE CASCADE;
