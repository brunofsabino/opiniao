

// import { User } from '@prisma/client'
// import * as jose from 'jose'
// //import { cookies } from 'next/headers'

// export async function openSessionToken(token: string) {
//   const secret = new TextEncoder().encode(process.env.SECRET_JWT)
//   const { payload } = await jose.jwtVerify(token, secret)

//   return payload
// }

// export const decodeToken = (token: string): User | null => {
//   try {
//       //const { payload } = jose.decodeJwt(token);
//       const decoded = jose.decodeJwt(token);
      
//       return {
//             user: decoded as User
//           };
//   } catch (error) {
//       console.error("Failed to decode token:", error);
//       return null;
//   }
// };

import { User } from '@prisma/client';
import * as jose from 'jose';

// Tipo que representa o payload do JWT
interface JwtPayload {
  sub?: string;
  name?: string;
  type?: string;
  nickName?: string | null;
  email?: string;
  password?: string;
  avatar?: string | null;
}

export async function openSessionToken(token: string) {
  const secret = new TextEncoder().encode(process.env.SECRET_JWT);
  const { payload } = await jose.jwtVerify(token, secret);

  return payload;
}

export const decodeToken = (token: string): User | null => {
  try {
    // Decodifica o token JWT
    const decoded = jose.decodeJwt(token) as JwtPayload;

    // Ajusta o tipo para User, garantindo valores padrão
    const user: User = {
      id: decoded.sub ?? '', // `sub` é o ID do usuário
      name: decoded.name ?? '', // Nome do usuário
      type: decoded.type ?? '', // Tipo do usuário
      nickName: decoded.nickName ?? null, // Apelido do usuário
      email: decoded.email ?? '', // Email do usuário
      password: decoded.password ?? '', // Senha do usuário
      avatar: decoded.avatar ?? null // Avatar do usuário
    };

    return user;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};
