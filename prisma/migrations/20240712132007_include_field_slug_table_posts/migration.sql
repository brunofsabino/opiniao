/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `articles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "articles" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "articles_slug_key" ON "articles"("slug");
