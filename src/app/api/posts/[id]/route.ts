// api/posts/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const postId = params.id;

    try {
        const post = await prisma.post.findUnique({
            where: {
                id: postId,
            },
        });

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch post:', error);
        return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const formData = await req.formData();

        const title = formData.get('title') as string;
        const authorPost = formData.get('authorPost') as string;
        const subTitle = formData.get('subTitle') as string;
        const contentPost = formData.get('contentPost') as string;
        const legendImg = formData.get('legendImg') as string;
        const contentPreComment = formData.get('contentPreComment') as string;
        const summaryParagraph = formData.get('summaryParagraph') as string;
        const mainNewsShow = formData.get('mainNewsShow') === 'true';
        const slideShow = formData.get('slideShow') === 'true';
        const newsShow = formData.get('newsShow') === 'true';
        const video = formData.get('video') as string | null;
        const instagram = formData.get('instagram') as string | null;

        let img: string | null = null;
        const imageFile = formData.get('img') as File | null;
        if (imageFile) {
            img = await saveFile(imageFile);
        }

        const updatedPost = await prisma.post.update({
            where: { id },
            data: {
                title,
                authorPost,
                subTitle,
                contentPost,
                contentPreComment,
                summaryParagraph,
                img,
                legendImg,
                video,
                instagram,
                mainNewsShow,
                slideShow,
                newsShow,
            },
        });

        return NextResponse.json(updatedPost, { status: 200 });
    } catch (error) {
        console.error('Failed to update post:', error);
        return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const deletedPost = await prisma.post.delete({
            where: { id },
        });

        return NextResponse.json(deletedPost, { status: 200 });
    } catch (error) {
        console.error('Failed to delete post:', error);
        return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

async function saveFile(file: File): Promise<string> {
    const data = Buffer.from(await file.arrayBuffer());
    const fileExtension = path.extname(file.name);
    const fileName = `${uuidv4()}${fileExtension}`;
    const filePath = path.join(process.cwd(), 'public/images', fileName);

    await fs.writeFile(filePath, data);

    return `${fileName}`;
}