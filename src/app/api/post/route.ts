// api/posts/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
console.log("fora")
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const idPost = req.params
    console.log("aqq"+idPost)
    console.log(req)
    // try {
    //     if(idPost) {
    //         const post = await prisma.post.findUnique({
    //             where: {
    //                 id: idPost.id,
    //             },
    //         });
    
    //         if (!post) {
    //             return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    //         }
    
    //         return NextResponse.json(post, { status: 200 });
    //     }
        
    // } catch (error) {
    //     console.error('Failed to fetch post:', error);
    //     return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    // } finally {
    //     await prisma.$disconnect();
    // }
}
