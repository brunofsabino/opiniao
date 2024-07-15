

import { User } from '@prisma/client'
import * as jose from 'jose'
//import { cookies } from 'next/headers'

export async function openSessionToken(token: string) {
  const secret = new TextEncoder().encode(process.env.SECRET_JWT)
  const { payload } = await jose.jwtVerify(token, secret)

  return payload
}

// export async function createSessionToken(payload = {}) {
//   //'use server'
//   const secret = new TextEncoder().encode(process.env.SECRET_JWT)
//   const session = await new jose.SignJWT(payload)
//     .setProtectedHeader({ alg: 'HS256' })
//     .setExpirationTime('1d')
//     .sign(secret)

//   const { exp, role } = await openSessionToken(session)

//   // Adiciona verificação para exp
//   if (!exp) {
//     throw new Error('Token de sessão não tem data de expiração.')
//   }

//   cookies().set('session', session, {
//     expires: new Date(exp * 1000),
//     path: '/',
//     httpOnly: true,
//   })

//   return session
// }

// export const decodeToken = (token: string) => {
//   const decoded = jose.decodeJwt(token);
//   //console.log(decoded)
//   return {
//     user: decoded
//   };
// };
export const decodeToken = (token: string): User | null => {
  try {
      //const { payload } = jose.decodeJwt(token);
      const decoded = jose.decodeJwt(token);
      console.log(decoded)
      return {
            user: decoded as User
          };
  } catch (error) {
      console.error("Failed to decode token:", error);
      return null;
  }
};

// export async function isSessionADM() {
//   const sessionCookie = cookies().get('session');

//   if(sessionCookie) {

//     const decoded = jose.decodeJwt(sessionCookie.value);

//     if(decoded) {
//       if(decoded.name === "Bruno" && decoded.email === "brunoferrazsabino@gmail.com" ) {
//         return true
//       }
//     }
//   }
  //if (sessionCookie) {
    //console.log(sessionCookie)
    // const { value } = sessionCookie;
    // const { exp } = await openSessionToken(value);
    // const currentDate = new Date().getTime();

    // return (exp as number) * 1000 > currentDate;
  //}

//   return false;
// }