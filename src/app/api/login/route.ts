import { createSessionToken } from '@/modules/auth/services/login-service';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {

    try {
        const { email, password } = await req.json();

        const user = await prisma.user.findFirst({
        where: {
            email,
        },
        });

        if (!user) {
        // Aqui você pode usar optimistic update para atualizar a tela
            return new NextResponse(JSON.stringify({ success: false, message: 'E-mail não cadastrado. Crie uma conta' }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return new NextResponse(JSON.stringify({ success: false, message: 'E-mail ou senha invalidos!' }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        }

        const token = await createSessionToken({ sub: user.id, name: user.name, email: user.email, type: user.type })
        return new NextResponse(JSON.stringify({ success: true, user: user }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        //console.error('Erro ao criar usuário:', error);
        return new NextResponse(JSON.stringify({ success: false, message: 'Erro ao logar' }), {
        status: 500,
        headers: {
            'Content-Type': 'application/json',
        },
    });
  }
}