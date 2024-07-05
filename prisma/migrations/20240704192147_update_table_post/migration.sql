-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_userADMId_fkey";

-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "userADMId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userADMId_fkey" FOREIGN KEY ("userADMId") REFERENCES "userAdm"("id") ON DELETE SET NULL ON UPDATE CASCADE;
