import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { decodeToken } from "@/modules/services/login-service";
import { cookies } from "next/headers";
//import { AuthProvider } from "@/context/AuthContext";
//import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Opinião Gospel",
    description: "Site Opinião Gospel",
};
let user: any
async function getServerSideProps() {
    const cookieStore = cookies();
    const session = cookieStore.get('session');
    //console.log(session)
    // Decodificar o token e obter informações do usuário
    if (session) {
        const user2 = decodeToken(session.value); // Certifique-se de ter uma função decodeToken
        user = user2
        return {
            user2
        };
    }

    return {
        props: {},
    };
}
getServerSideProps()
//console.log(user)
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="bg-customColor">
                    <Header user={user} />
                    {children}
                    <Footer />
                </div>
                <Toaster />

                {/* <AuthProvider>
                    <div className="bg-customColor">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                    <Toaster />

                </AuthProvider> */}
            </body>
        </html>
    );
}
