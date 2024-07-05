/*
  Warnings:

  - You are about to drop the `userAdm` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "articleId" TEXT;

-- AlterTable
ALTER TABLE "likeInComments" ADD COLUMN     "articleId" TEXT;

-- AlterTable
ALTER TABLE "likeInResponseComments" ADD COLUMN     "articleId" TEXT;

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "authorPost" TEXT,
ADD COLUMN     "legendImg" TEXT;

-- AlterTable
ALTER TABLE "response_comments" ADD COLUMN     "articleId" TEXT;

-- DropTable
DROP TABLE "userAdm";

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "contentArticle" TEXT NOT NULL,
    "title2" TEXT,
    "contentTitle2" TEXT,
    "title3" TEXT,
    "contentTitle3" TEXT,
    "title4" TEXT,
    "contentTitle4" TEXT,
    "title5" TEXT,
    "contentTitle5" TEXT,
    "title6" TEXT,
    "contentTitle6" TEXT,
    "title7" TEXT,
    "contentTitle7" TEXT,
    "title8" TEXT,
    "contentTitle8" TEXT,
    "title9" TEXT,
    "contentTitle9" TEXT,
    "title10" TEXT,
    "contentTitle10" TEXT,
    "contentPreComment" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "articleShow" BOOLEAN NOT NULL DEFAULT false,
    "summaryParagraph" TEXT NOT NULL,
    "qtComments" INTEGER,
    "img" TEXT,
    "legendImg" TEXT,
    "authorArticle" TEXT,
    "video" TEXT,
    "instagram" TEXT,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_comments" ADD CONSTRAINT "response_comments_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInComments" ADD CONSTRAINT "likeInComments_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInResponseComments" ADD CONSTRAINT "likeInResponseComments_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
