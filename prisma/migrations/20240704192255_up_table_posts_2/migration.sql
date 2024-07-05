/*
  Warnings:

  - You are about to drop the column `userADMId` on the `posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_userADMId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "userADMId";
