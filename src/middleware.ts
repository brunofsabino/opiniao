// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import * as jose from 'jose';

// export async function middleware(request: NextRequest) {
//   const { cookies } = request;
//   const session = cookies.get('session')?.value;

//   if (!session) {
//     // Se o cookie de sessão não existir, redirecione para a página de login
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   try {
//     const secret = new TextEncoder().encode(process.env.SECRET_JWT);
//     const { payload } = await jose.jwtVerify(session, secret);

//     if (payload.type !== 'admin') {
//       // Se o usuário não for um administrador, redirecione para a página de acesso negado ou página inicial
//       return NextResponse.redirect(new URL('/not-authorized', request.url));
//     }
//   } catch (error) {
//     // Se houver um erro ao verificar o token, redirecione para a página de login
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // Se o usuário for um administrador, continue para a página solicitada
//   //return NextResponse.next();
// }

// // Lista de caminhos onde o middleware será aplicado
// export const config = {
//   matcher: ['/admin/:path*'], // Adicione os caminhos que devem ser protegidos pelo middleware
// };

import { NextRequest, NextResponse } from 'next/server';
import { isSessionADM } from './app/api/login/route';
//import AuthService from './modules/auth/services/auth-service';
//import { isSessionADM } from './modules/auth/services/login-service';

export const config = {
  //matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
  //matcher: '/((?!_next/static|_next/image|favicon.ico|images).*)',
  matcher: ['/admin/:path*'], 
};

const publicRoutes = ['/', '/portal/cadastro', '/portal/login'];

export async function middleware(req: NextRequest) {
  //console.log(req.nextUrl);

  const pathname = req.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const session = await isSessionADM();
  if (!session) {
    const isAPIRoute = pathname.startsWith('/api');

    if (isAPIRoute) {
      return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
    }

    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}