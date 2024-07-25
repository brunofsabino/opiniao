import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";
import { decodeToken } from "../modules/auth/services/login-service";
import { cookies } from "next/headers";
import { ThemeContext, ThemeProvider } from "../context/MyContext";
import { useContext } from "react";



const inter = Inter({ subsets: ["latin"] });
//export const ThemeContext = createContext({})
export const metadata: Metadata = {
    title: "Opinião Gospel",
    description: "Site Opinião Gospel",
};
// const getAll = async () => {
//     const context = useContext(ThemeContext);
//     const { setPostsAll, setArticlesAll } = context;
//     const fec = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { next: { revalidate: 36000 } })
//     const posts = await fec.json()
//     const fecA = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, { next: { revalidate: 36000 } })
//     const articles = await fecA.json()
//     setPostsAll(posts)
//     setArticlesAll(articles)
// }
// getAll()
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
                        <Header />
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
