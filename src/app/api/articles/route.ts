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
        const contentArticle = formData.get('contentArticle') as string;
        const contentPreComment = formData.get('contentPreComment') as string;
        const summaryParagraph = formData.get('summaryParagraph') as string;
        const articleShow = formData.get('articleShow') === 'true';
        const video = formData.get('video') as string | null;
        const instagram = formData.get('instagram') as string | null;
        const legendImg = formData.get('legendImg') as string | null;
        const authorArticle = formData.get('authorArticle') as string | null;
        
        // Titles and contents for up to 10 sections
        const sections = Array.from({ length: 10 }).map((_, i) => ({
            title: formData.get(`title${i + 2}`) as string | null,
            content: formData.get(`contentTitle${i + 2}`) as string | null,
        }));

        // Handle image file if exists
        let img: string | null = null;
        const imageFile = formData.get('img') as File | null;
        if (imageFile) {
            img = await saveFile(imageFile);
        }

        const newArticle = await prisma.article.create({
            data: {
                title,
                subTitle,
                contentArticle,
                contentPreComment,
                summaryParagraph,
                img,
                legendImg,
                authorArticle,
                video,
                instagram,
                articleShow,
                title2: sections[0].title,
                contentTitle2: sections[0].content,
                title3: sections[1].title,
                contentTitle3: sections[1].content,
                title4: sections[2].title,
                contentTitle4: sections[2].content,
                title5: sections[3].title,
                contentTitle5: sections[3].content,
                title6: sections[4].title,
                contentTitle6: sections[4].content,
                title7: sections[5].title,
                contentTitle7: sections[5].content,
                title8: sections[6].title,
                contentTitle8: sections[6].content,
                title9: sections[7].title,
                contentTitle9: sections[7].content,
                title10: sections[8].title,
                contentTitle10: sections[8].content,
            },
        });

        return NextResponse.json(newArticle, { status: 201 });
    } catch (error) {
        console.error('Failed to create article:', error);
        return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
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
