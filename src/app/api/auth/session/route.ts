import * as jose from 'jose';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET_JWT);
    const { payload } = await request.json();

    const session = await new jose.SignJWT(payload)
      .setProtectedHeader({
        alg: 'HS256',
      })
      .setExpirationTime('1d')
      .sign(secret);

    // Verifique o token para obter o payload, que inclui exp
    const { payload: verifiedPayload } = await jose.jwtVerify(session, secret);
    const exp = verifiedPayload.exp;

    if (!exp) {
      return NextResponse.json({ success: false, message: 'Failed to retrieve expiration time from token' }, { status: 500 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set('session', session, {
      expires: new Date(exp * 1000),
      path: '/',
      //httpOnly: false,
    });

    return response;
  } catch (error) {
    console.error('Erro ao criar token de sessão:', error);
    return NextResponse.json({ success: false, message: 'Failed to create session' }, { status: 500 });
  }
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