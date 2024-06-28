import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

interface NewUser {
    name: string;
    email: string;
    password: string;
    type: string;
    nickName?: string;
    avatar?: string;
    // Adicione outras propriedades que sua tabela de usuários possa ter
}

async function createUser(formData: FormData): Promise<{ success: boolean, user?: NewUser, message?: string }> {
  'use server'

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const hash = await bcrypt.hash(password, 10)

    try {
        // Lógica para criar um novo usuário usando o Prisma
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hash,
                type: 'member',
                nickName: 'member'
            },
        });
        console.log(newUser)
        return { success: true, user: newUser as NewUser};
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return { success: false, message: 'Erro ao criar usuário.' };
    }
}


const AuthActions = {
    createUser
  };
  
  export default AuthActions;