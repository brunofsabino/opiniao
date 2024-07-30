// import { NextRequest, NextResponse } from 'next/server';
// import { isSessionADM } from './app/api/login/route';
// //import AuthService from './modules/auth/services/auth-service';
// //import { isSessionADM } from './modules/auth/services/login-service';

// export const config = {
//   //matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
//   //matcher: '/((?!_next/static|_next/image|favicon.ico|images).*)',
//   matcher: ['/admin/:path*'], 
// };

// const publicRoutes = ['/', '/portal/cadastro', '/portal/login'];

// export async function middleware(req: NextRequest) {
//   //console.log(req.nextUrl);

//   const pathname = req.nextUrl.pathname;

//   if (publicRoutes.includes(pathname)) {
//     return NextResponse.next();
//   }

//   const session = await isSessionADM();
//   if (!session) {
//     const isAPIRoute = pathname.startsWith('/api');

//     if (isAPIRoute) {
//       return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
//     }

//     return NextResponse.redirect(new URL('/', req.url));
//   }

//   return NextResponse.next();
// }
import { NextRequest, NextResponse } from 'next/server';
//import { isSessionUser } from './app/api/login/route';
import { isSessionADM } from './app/api/auth/session/session';
import { isSessionUser } from './app/api/login/login';

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/comments/:path*', // Monitorar a rota de comentários
  ],
};

const publicRoutes = ['/', '/portal/cadastro', '/portal/login'];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Verificar rotas de admin
  if (pathname.startsWith('/admin')) {
    const sessionADM = await isSessionADM();
    if (!sessionADM) {
      const isAPIRoute = pathname.startsWith('/api');

      if (isAPIRoute) {
        return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
      }

      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Verificar rotas de comentários
  if (pathname.startsWith('/api/comments')) {
    const sessionUser = await isSessionUser();
    if (!sessionUser) {
      return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
    }
  }

  return NextResponse.next();
}
