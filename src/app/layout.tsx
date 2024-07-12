import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";
import { decodeToken } from "../modules/auth/services/login-service";
import { cookies } from "next/headers";
import { ThemeProvider } from "../context/MyContext";

//import { MyProvider } from "@/context/MyContext";
//import { createContext } from 'react'


const inter = Inter({ subsets: ["latin"] });
//export const ThemeContext = createContext({})
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
                <ThemeProvider>
                    <div className="bg-customColor">
                        <Header user={user} />
                        {/* <ThemeContext.Provider value={"legal"}> */}
                        {children}
                        {/* </ThemeContext.Provider> */}
                        <Footer />
                        <Toaster />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
