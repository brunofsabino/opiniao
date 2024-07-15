import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    console.log('aui')
    if (req.method === 'POST') {
        //const { post_id, user_id, nameUserInComment, imgUserInComment, comment, articleId } = req.body;
        const formData = await req.formData();

        const post_id = formData.get('post_id') as string;
        const user_id = formData.get('user_id') as string;
        const nameUserInComment = formData.get('nameUserInComment') as string;
        const imgUserInComment = formData.get('imgUserInComment') as string;
        const comment = formData.get('comment') as string;
        const articleId = formData.get('articleId') as string;
        console.log(post_id)
        console.log(user_id)
        console.log(nameUserInComment)
        console.log(imgUserInComment)
        console.log(comment)
        console.log(articleId)

        try {
            const newComment = await prisma.commentInPost.create({
                data: {
                    post_id,
                    user_id,
                    nameUserInComment,
                    imgUserInComment,
                    comment,
                    //articleId,
                },
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



// import { PrismaClient } from '@prisma/client';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { NextRequest, NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export const config = {
//     api: {
//         bodyParser: false, // Desabilita o bodyParser padrão para usar FormData
//     },
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const formidable = require('formidable');
//         const form = new formidable.IncomingForm();

//         form.parse(req, async (err, fields, files) => {
//             if (err) {
//                 res.status(500).json({ error: 'Failed to parse form data' });
//                 return;
//             }

//             const {
//                 post_id,
//                 user_id,
//                 nameUserInComment,
//                 imgUserInComment,
//                 comment,
//                 articleId,
//             } = fields;

//             try {
//                 const newComment = await prisma.commentInPost.create({
//                     data: {
//                         post_id,
//                         user_id,
//                         nameUserInComment,
//                         imgUserInComment,
//                         comment,
//                         articleId: articleId || null,
//                     },
//                 });
//                 res.status(200).json(newComment);
//             } catch (error) {
//                 res.status(500).json({ error: 'Failed to create comment' });
//             }
//         });
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }