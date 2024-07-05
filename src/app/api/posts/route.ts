import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        
        const title = formData.get('title') as string;
        const subTitle = formData.get('subTitle') as string;
        const contentPost = formData.get('contentPost') as string;
        const contentPreComment = formData.get('contentPreComment') as string;
        const summaryParagraph = formData.get('summaryParagraph') as string;
        const mainNewsShow = formData.get('mainNewsShow') === 'true';
        const slideShow = formData.get('slideShow') === 'true';
        const newsShow = formData.get('newsShow') === 'true';
        const video = formData.get('video') as string | null;
        const instagram = formData.get('instagram') as string | null;
        // Handle image file if exists
        let img: string | null = null;
        const imageFile = formData.get('img') as File | null;
        if (imageFile) {
            // Save image file to the desired location and get the URL/path
            // This example assumes you have a function to handle file uploads
            img = await saveFile(imageFile);
        }
        
        const newPost = await prisma.post.create({
            data: {
                title,
                subTitle,
                contentPost,
                contentPreComment,
                summaryParagraph,
                img,
                video,
                instagram,
                mainNewsShow,
                slideShow,
                newsShow,
            },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error('Failed to create post:', error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

// Example function to handle file uploads (you need to implement this)
async function saveFile(file: File): Promise<string> {
    const data = Buffer.from(await file.arrayBuffer());
    const fileExtension = path.extname(file.name);
    const fileName = `${uuidv4()}${fileExtension}`;
    const filePath = path.join(process.cwd(), 'public/images', fileName);

    await fs.writeFile(filePath, data);

    return `${fileName}`;
}
