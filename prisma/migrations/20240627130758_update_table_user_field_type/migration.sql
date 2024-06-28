-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "nickName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userAdm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "userAdm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "contentPost" TEXT NOT NULL,
    "contentPreComment" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "mainNewsShow" BOOLEAN NOT NULL DEFAULT false,
    "slideShow" BOOLEAN NOT NULL DEFAULT false,
    "newsShow" BOOLEAN NOT NULL DEFAULT false,
    "summaryParagraph" TEXT NOT NULL,
    "qtComments" INTEGER,
    "img" TEXT,
    "video" TEXT,
    "userADMId" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "nameUserInComment" TEXT NOT NULL,
    "imgUserInComment" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT NOT NULL,
    "id_commentReply" TEXT,
    "nameUserReplyComment" TEXT,
    "nickName" TEXT,
    "imgUserReplyComment" TEXT,
    "userNameCommentReply" TEXT,
    "userAvatarCommentReply" TEXT,
    "qtLikes" INTEGER,
    "likeShow" BOOLEAN DEFAULT false,
    "commentShow" BOOLEAN DEFAULT true,
    "commentModerationShow" BOOLEAN DEFAULT true,
    "dateCommentReply" TIMESTAMP(3),
    "commentReply" TEXT,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "response_comments" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "id_comment" TEXT NOT NULL,
    "nameUser" TEXT NOT NULL,
    "nickName" TEXT,
    "imgUser" TEXT NOT NULL,
    "userNameCommentReply" TEXT NOT NULL,
    "userAvatarCommentReply" TEXT NOT NULL,
    "userCommentReply" TEXT,
    "dateCommentReply" TIMESTAMP(3) NOT NULL,
    "qtLikes" INTEGER,
    "likeShow" BOOLEAN DEFAULT false,
    "commentShow" BOOLEAN DEFAULT true,
    "commentModerationShow" BOOLEAN DEFAULT true,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment_response" TEXT NOT NULL,

    CONSTRAINT "response_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likeInComments" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "comment_id" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "likeInComments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likeInResponseComments" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "comment_id" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT true,
    "likeShow" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "likeInResponseComments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forums" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "avatar_user" TEXT,
    "nickName" TEXT,
    "name_user" TEXT,
    "nameLastComment" TEXT,
    "qtComments" INTEGER,

    CONSTRAINT "forums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commentInForums" (
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

    CONSTRAINT "commentInForums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "response_comments_forum" (
    "id" TEXT NOT NULL,
    "forum_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "id_commentForum" TEXT NOT NULL,
    "nameUser" TEXT NOT NULL,
    "imgUser" TEXT NOT NULL,
    "nickName" TEXT,
    "userNameCommentReply" TEXT NOT NULL,
    "userAvatarCommentReply" TEXT NOT NULL,
    "userCommentReply" TEXT,
    "dateCommentReply" TIMESTAMP(3) NOT NULL,
    "qtLikes" INTEGER,
    "likeShow" BOOLEAN DEFAULT false,
    "commentShow" BOOLEAN DEFAULT true,
    "commentModerationShow" BOOLEAN DEFAULT true,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment_response" TEXT NOT NULL,

    CONSTRAINT "response_comments_forum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likeInForums" (
    "id" TEXT NOT NULL,
    "forum_id" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT true,
    "user_id" TEXT NOT NULL,
    "commentInForum_id" TEXT NOT NULL,

    CONSTRAINT "likeInForums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likeInResponseCommentsForum" (
    "id" TEXT NOT NULL,
    "forum_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "commentForum_id" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT true,
    "likeShow" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "likeInResponseCommentsForum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "denounces" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "nameUser" TEXT NOT NULL,
    "userDenounced_id" TEXT,
    "nameUserDenounced" TEXT,
    "textDenounce" TEXT,
    "describingDenounce" TEXT,
    "post_id" TEXT,
    "id_comment" TEXT,
    "id_response_comment" TEXT,
    "id_forum" TEXT,
    "id_forum_comment" TEXT,
    "id_forum_comment_response" TEXT,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "denounces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "denouncesInForum" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "nameUser" TEXT NOT NULL,
    "userDenounced_id" TEXT,
    "nameUserDenounced" TEXT,
    "textDenounce" TEXT,
    "describingDenounce" TEXT,
    "forum_id" TEXT,
    "id_comment" TEXT,
    "id_response_comment" TEXT,
    "id_forum" TEXT,
    "id_forum_comment" TEXT,
    "id_forum_comment_response" TEXT,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "denouncesInForum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "forum_id" TEXT,
    "post_id" TEXT,
    "msg" TEXT NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nickName_key" ON "users"("nickName");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userAdm_email_key" ON "userAdm"("email");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userADMId_fkey" FOREIGN KEY ("userADMId") REFERENCES "userAdm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_comments" ADD CONSTRAINT "response_comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_comments" ADD CONSTRAINT "response_comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_comments" ADD CONSTRAINT "response_comments_id_comment_fkey" FOREIGN KEY ("id_comment") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInComments" ADD CONSTRAINT "likeInComments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInComments" ADD CONSTRAINT "likeInComments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInComments" ADD CONSTRAINT "likeInComments_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInResponseComments" ADD CONSTRAINT "likeInResponseComments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInResponseComments" ADD CONSTRAINT "likeInResponseComments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInResponseComments" ADD CONSTRAINT "likeInResponseComments_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "response_comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forums" ADD CONSTRAINT "forums_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentInForums" ADD CONSTRAINT "commentInForums_forum_id_fkey" FOREIGN KEY ("forum_id") REFERENCES "forums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentInForums" ADD CONSTRAINT "commentInForums_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_comments_forum" ADD CONSTRAINT "response_comments_forum_forum_id_fkey" FOREIGN KEY ("forum_id") REFERENCES "forums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_comments_forum" ADD CONSTRAINT "response_comments_forum_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "response_comments_forum" ADD CONSTRAINT "response_comments_forum_id_commentForum_fkey" FOREIGN KEY ("id_commentForum") REFERENCES "commentInForums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInForums" ADD CONSTRAINT "likeInForums_forum_id_fkey" FOREIGN KEY ("forum_id") REFERENCES "forums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInForums" ADD CONSTRAINT "likeInForums_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInForums" ADD CONSTRAINT "likeInForums_commentInForum_id_fkey" FOREIGN KEY ("commentInForum_id") REFERENCES "commentInForums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInResponseCommentsForum" ADD CONSTRAINT "likeInResponseCommentsForum_forum_id_fkey" FOREIGN KEY ("forum_id") REFERENCES "forums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInResponseCommentsForum" ADD CONSTRAINT "likeInResponseCommentsForum_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likeInResponseCommentsForum" ADD CONSTRAINT "likeInResponseCommentsForum_commentForum_id_fkey" FOREIGN KEY ("commentForum_id") REFERENCES "response_comments_forum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "denounces" ADD CONSTRAINT "denounces_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "denouncesInForum" ADD CONSTRAINT "denouncesInForum_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
