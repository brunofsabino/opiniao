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
import CookieConsent from "../components/CookieConsent";



const inter = Inter({ subsets: ["latin"] });
//export const ThemeContext = createContext({})
export const metadata: Metadata = {
    title: "Opinião Gospel",
    description: "Site Opinião Gospel",
};
const getAll = async () => {

    const fetchPosts = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { next: { revalidate: 36000 } });
    const fetchArticles = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, { next: { revalidate: 36000 } });
    const [postsRes, articlesRes] = await Promise.all([fetchPosts, fetchArticles]);
    const posts1 = await postsRes.json();
    const articles1 = await articlesRes.json();
    return {
        posts: posts1,
        articles: articles1,
    }
}


export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
    // posts: any[];
    // articles: any[];
}>) {
    const { posts, articles } = await getAll();
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider initialPosts={posts} initialArticles={articles}>
                    <div className="bg-customColor">
                        <Header />
                        <CookieConsent />
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
