/*
  Warnings:

  - You are about to drop the `commentInForums` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "commentInForums" DROP CONSTRAINT "commentInForums_forum_id_fkey";

-- DropForeignKey
ALTER TABLE "commentInForums" DROP CONSTRAINT "commentInForums_user_id_fkey";

-- DropForeignKey
ALTER TABLE "likeInForums" DROP CONSTRAINT "likeInForums_commentInForum_id_fkey";

-- DropForeignKey
ALTER TABLE "response_comments_forum" DROP CONSTRAINT "response_comments_forum_id_commentForum_fkey";

-- AlterTable
ALTER TABLE "likeInForums" ADD COLUMN     "commentInArticleId" TEXT;

-- AlterTable
ALTER TABLE "response_comments_forum" ADD COLUMN     "commentInArticleId" TEXT;

-- DropTable
DROP TABLE "commentInForums";

-- CreateTable
CREATE TABLE "commentInArticles" (
    "id" TEXT NOT NULL,
    "id_comment_forum" TEXT,
    "forum_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT NOT NULL,
    "nameUserInComment" TEXT,
    "nickName" TEXT,
    "imgUserInComment" TEXT,
    "id_commentReply" TEXT,
    "nameUserReplyComment" TEXT,
    "imgUserReplyComment" TEXT,
    "userNameCommentReply" TEXT,
    "userAvatarCommentReply" TEXT,
    "qtLikes" INTEGER,
    "likeShow" BOOLEAN DEFAULT false,
    "commentShow" BOOLEAN DEFAULT true,
    "commentModerationShow" BOOLEAN DEFAULT true,
    "dateCommentReply" TIMESTAMP(3),
    "commentReply" TEXT,

    CONSTRAINT "commentInArticles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "commentInArticles" ADD CONSTRAINT "commentInArticles_forum_id_fkey" FOREIGN KEY ("forum_id") REFERENCES "articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentInArticles" ADD CONSTRAINT "commentInArticles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_comments_forum" ADD CONSTRAINT "response_comments_forum_commentInArticleId_fkey" FOREIGN KEY ("commentInArticleId") REFERENCES "commentInArticles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInForums" ADD CONSTRAINT "likeInForums_commentInArticleId_fkey" FOREIGN KEY ("commentInArticleId") REFERENCES "commentInArticles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
