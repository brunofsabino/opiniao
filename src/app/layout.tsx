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
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'
import Analytics from "../components/Analytics";



const inter = Inter({ subsets: ["latin"] });
//export const ThemeContext = createContext({})
export const metadata: Metadata = {
    title: "Opinião Gospel",
    description: "Site Opinião Gospel - Notícias e Artigos sobre a Vida Cristã",
    metadataBase: new URL("https://www.opiniaogospel.com.br"),
    openGraph: {
        title: "Opinião Gospel",
        description: "Site Opinião Gospel - Notícias e Artigos sobre a Vida Cristã",
        url: "https://www.opiniaogospel.com.br",
        siteName: "Opinião Gospel",
        images: [
            {
                url: "images/logo.png",
                width: 1200,
                height: 630,
                alt: "Descrição da Imagem"
            }
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@seutwitter",
        title: "Opinião Gospel",
        description: "Site Opinião Gospel - Notícias e Artigos sobre a Vida Cristã",
        images: [
            "images/logo.png"
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    }
};
const getAll = async () => {

    const fetchPosts = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { next: { revalidate: 600 } });
    //const fetchPosts = fetch(`https://jsonplaceholder.typicode.com/posts`, { next: { revalidate: 36000 } });
    const fetchArticles = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, { next: { revalidate: 600 } });
    //const fetchArticles = fetch(`https://jsonplaceholder.typicode.com/posts`, { next: { revalidate: 36000 } });
    const [postsRes, articlesRes] = await Promise.all([fetchPosts, fetchArticles]);
    const posts1 = await postsRes.json();
    const articles1 = await articlesRes.json();
    return {
        posts: posts1,
        articles: articles1,
    }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

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
                        {/* Google Analytics Script */}
                        {/* <GoogleAnalytics gaId="G-DCLWY24N50" /> */}
                        <Header />
                        <CookieConsent />
                        {children}
                        {/* </ThemeContext.Provider> */}
                        <Analytics />
                        <Footer />
                        <Toaster />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
