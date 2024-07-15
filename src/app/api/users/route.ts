import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    
    const hash = await bcrypt.hash(password, 10)
    const random =  Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
    // Lógica para criar um novo usuário usando o Prisma
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
        avatar: 'persona.png',
        type: 'member',
        nickName: `${name}_${random}`
    },
    });

    return new NextResponse(JSON.stringify({ success: true, user: newUser }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return new NextResponse(JSON.stringify({ success: false, message: 'Erro ao criar usuário' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

