import { PrismaClient } from '@prisma/client';
import * as jose from 'jose';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const secret = new TextEncoder().encode(process.env.SECRET_JWT);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { action, token } = req.body;

    switch (action) {
        case 'createSession':
            const session = await createSessionToken(req.body.payload);
            res.status(200).json({ session });
            break;
        case 'isSessionADM':
            const isAdmin = await isSessionADM();
            res.status(200).json({ isAdmin });
            break;
        default:
            res.status(400).json({ error: 'Invalid action' });
    }
}

export async function createSessionToken(payload = {}) {
    const session = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1d')
        .sign(secret);

    const { exp } = await openSessionToken(session);

    if (!exp) {
        throw new Error('Token de sessão não tem data de expiração.');
    }

    cookies().set('session', session, {
        expires: new Date(exp * 1000),
        path: '/',
        //httpOnly: true,
    });

    return session;
}

export async function isSessionADM() {
    const sessionCookie = cookies().get('session');

    if (sessionCookie) {
        const decoded = jose.decodeJwt(sessionCookie.value);

        if (decoded && decoded.name === "Bruno Ferraz Sabino" && decoded.email === "brunoferrazsabino@gmail.com" && decoded.type === "Administrador B") {
            return true;
        }
    }

    return false;
}
export async function isSessionUser() {
    const sessionCookie = cookies().get('session');

    if (sessionCookie) {
        const decoded = jose.decodeJwt(sessionCookie.value);
        //const session = /* lógica para verificar a sessão do usuário */;
        return decoded;
       
    }
   
  }

export async function openSessionToken(token: string) {
    const { payload } = await jose.jwtVerify(token, secret);
    return payload;
}