import * as jose from 'jose';
import { cookies } from 'next/headers';

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
