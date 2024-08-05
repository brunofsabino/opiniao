// api/articles/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const articleId = params.id;

    try {
        const article = await prisma.article.findUnique({
            where: {
                id: articleId,
            },
        });

        if (!article) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json(article, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch article:', error);
        return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

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
        const authorArticle = formData.get('authorArticle') as string;
        const legendImg = formData.get('legendImg') as string;

        const normalizeTitle = (title: string) => {
            return title
            .normalize("NFD") // Normaliza para separar os caracteres especiais
            .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres especiais
            .replace(/[.,;:]/g, '') // Remove vírgulas, dois pontos e ponto e vírgula
            .replace(/ /g, '-') // Substitui espaços por hífens
            .toLowerCase(); // Converte para minúsculas
        };


        let img: string | null = null;
        const imageFile = formData.get('img') as File | null;
        if (imageFile) {
            img = await saveFile(imageFile, normalizeTitle(title));
        }

        

        const updateData: { [key: string]: any } = {
            title,
            slug: normalizeTitle(title),
            subTitle,
            contentArticle,
            contentPreComment,
            summaryParagraph,
            articleShow,
            video,
            instagram,
            authorArticle,
            legendImg,
            img
        };

        for (let i = 2; i <= 10; i++) {
            updateData[`title${i}`] = formData.get(`title${i}`) as string | null;
            updateData[`contentTitle${i}`] = formData.get(`contentTitle${i}`) as string | null;
        }

        const updatedArticle = await prisma.article.update({
            where: { id },
            data: updateData,
        });

        return NextResponse.json(updatedArticle, { status: 200 });
    } catch (error) {
        console.error('Failed to update article:', error);
        return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

async function saveFile(file: File, name: string): Promise<string> {
    const data = Buffer.from(await file.arrayBuffer());
    const fileExtension = path.extname(file.name);
    const fileName = `${name}${fileExtension}`;
    const filePath = path.join(process.cwd(), 'public/images', fileName);

    await fs.writeFile(filePath, data);

    return `${fileName}`;
}
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const deletedPost = await prisma.article.delete({
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