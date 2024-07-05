import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' });
  
  // Remove o cookie de sessão
  response.cookies.set('session', '', {
    path: '/',
    expires: new Date(0), // Define a data de expiração no passado para remover o cookie
    httpOnly: true,
  });

  return response;
}