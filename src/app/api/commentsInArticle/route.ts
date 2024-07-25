import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    
    if (req.method === 'POST') {
        //const { post_id, user_id, nameUserInComment, imgUserInComment, comment, articleId } = req.body;
        const formData = await req.formData();

        //const post_id = formData.get('post_id') as string;
        const user_id = formData.get('user_id') as string;
        const nameUserInComment = formData.get('nameUserInComment') as string;
        const imgUserInComment = formData.get('imgUserInComment') as string;
        const comment = formData.get('comment') as string;
        const forum_id = formData.get('post_id') as string;
        // console.log(post_id)
        // console.log(user_id)
        // console.log(nameUserInComment)
        // console.log(imgUserInComment)
        // console.log(comment)
        // console.log(articleId)

        try {
            const newComment = await prisma.commentInArticle.create({
                data: {
                    forum_id,
                    user_id,
                    nameUserInComment,
                    imgUserInComment,
                    comment,
                    //articleId,
                },
//                 id_comment_forum       String?
//   forum_id               String
//   user_id                String
//   date                   DateTime                 @default(now())
//   comment                String
//   nameUserInComment      String?
//   nickName               String?
//   imgUserInComment       String?
//   id_commentReply        String?
//   nameUserReplyComment   String?
//   imgUserReplyComment    String?
//   userNameCommentReply   String?
//   userAvatarCommentReply String?
//   qtLikes                Int?
//   likeShow               Boolean?                 @default(false)
//   commentShow            Boolean?                 @default(true)
//   commentModerationShow  Boolean?                 @default(true)
//   dateCommentReply       DateTime?
//   commentReply           String?
            });
            //res.status(200).json(newComment);
            return NextResponse.json(newComment, { status: 201 });
        } catch (error) {
            //res.status(500).json({ error: 'Failed to create comment' });
            return NextResponse.json({ error: 'Failed to create comment' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: 'Method not allowed' });
    }
}

// export async function GET(req: NextRequest) {
    
//     if (req.method === 'GET') {
//         //const { post_id, user_id, nameUserInComment, imgUserInComment, comment, articleId } = req.body;
//         // const formData = await req.formData();

//         // const post_id = formData.get('post_id') as string;
//         // const user_id = formData.get('user_id') as string;
//         // const nameUserInComment = formData.get('nameUserInComment') as string;
//         // const imgUserInComment = formData.get('imgUserInComment') as string;
//         // const comment = formData.get('comment') as string;
//         // const articleId = formData.get('articleId') as string;
//         // console.log(post_id)
//         // console.log(user_id)
//         // console.log(nameUserInComment)
//         // console.log(imgUserInComment)
//         // console.log(comment)
//         // console.log(articleId)

//         try {
//             const commentsAll = await prisma.commentInPost.findMany({});
//             //res.status(200).json(newComment);
//             return NextResponse.json(commentsAll, { status: 200 });
//         } catch (error) {
//             //res.status(500).json({ error: 'Failed to create comment' });
//             return NextResponse.json({ error: 'Failed to all comment' }, { status: 500 });
//         }
//     } else {
//         return NextResponse.json({ error: 'Method not allowed' });
//     }
// }