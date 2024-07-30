//import { createSessionToken } from '@/modules/auth/services/login-service';
import { PrismaClient } from '@prisma/client';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { createSessionToken } from './login';

const prisma = new PrismaClient();

const secret = new TextEncoder().encode(process.env.SECRET_JWT);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { action, token } = req.body;

//     switch (action) {
//         case 'createSession':
//             const session = await createSessionToken(req.body.payload);
//             res.status(200).json({ session });
//             break;
//         case 'isSessionADM':
//             const isAdmin = await isSessionADM();
//             res.status(200).json({ isAdmin });
//             break;
//         default:
//             res.status(400).json({ error: 'Invalid action' });
//     }
// }

// export async function createSessionToken(payload = {}) {
//     const session = await new jose.SignJWT(payload)
//         .setProtectedHeader({ alg: 'HS256' })
//         .setExpirationTime('1d')
//         .sign(secret);

//     const { exp } = await openSessionToken(session);

//     if (!exp) {
//         throw new Error('Token de sessão não tem data de expiração.');
//     }

//     cookies().set('session', session, {
//         expires: new Date(exp * 1000),
//         path: '/',
//         //httpOnly: true,
//     });

//     return session;
// }

// export async function isSessionADM() {
//     const sessionCookie = cookies().get('session');

//     if (sessionCookie) {
//         const decoded = jose.decodeJwt(sessionCookie.value);

//         if (decoded && decoded.name === "Bruno Ferraz Sabino" && decoded.email === "brunoferrazsabino@gmail.com" && decoded.type === "Administrador B") {
//             return true;
//         }
//     }

//     return false;
// }
// export async function isSessionUser() {
//     const sessionCookie = cookies().get('session');

//     if (sessionCookie) {
//         const decoded = jose.decodeJwt(sessionCookie.value);
//         //const session = /* lógica para verificar a sessão do usuário */;
//         return decoded;
       
//     }
   
//   }

// export async function openSessionToken(token: string) {
//     const { payload } = await jose.jwtVerify(token, secret);
//     return payload;
// }
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
        const token = await createSessionToken({ id: user.id, name: user.name, email: user.email, type: user.type, avatar: user.avatar })
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