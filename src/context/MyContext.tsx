// 'use client'

// import { createContext, useEffect, useState } from 'react'

// interface ThemeContextProps {
//   postsAll: any[];
//   setPostsAll: React.Dispatch<React.SetStateAction<any[]>>;
// }

// export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
// const [postsAll, setPostsAll] = useState<any[]>([]);

// useEffect(() => {

//   const getPosts = async () => {
//     const fec = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { next: { revalidate: 36000 } })
//     const posts = await fec.json()
//     setPostsAll(posts)
//   }
//   getPosts()
// }, [])
// console.log(postsAll)
// export default function ThemeProvider({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
// }

// src/context/MyContext.tsx


// 'use client'
// import { Post } from '@prisma/client';
// import React, { createContext, useState, useEffect, ReactNode, FC } from 'react';

// interface ThemeContextProps {
//   postsAll: Post[];
//   setPostsAll: React.Dispatch<React.SetStateAction<any[]>>;
// }

// export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
//   const [postsAll, setPostsAll] = useState<Post[]>([]);

//   useEffect(() => {
//     const getPosts = async () => {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { next: { revalidate: 36000 } });
//       const posts = await response.json();
//       setPostsAll(posts);
//     };

//     getPosts();
//   }, []);

//   return (
//     <ThemeContext.Provider value={{ postsAll, setPostsAll }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// src/context/MyContext.tsx
'use client';
import { Article, Post, User } from '@prisma/client';
import Cookies from 'js-cookie';
import React, { createContext, useState, useEffect, ReactNode, FC, useContext } from 'react';
import { decodeToken } from '../modules/auth/services/login-service';

interface ThemeContextProps {
    isAuthenticated: boolean;
    postsAll: Post[];
    setPostsAll: React.Dispatch<React.SetStateAction<Post[]>>;
    articlesAll: Article[];
    setArticlesAll: React.Dispatch<React.SetStateAction<Article[]>>;
    user: User;
    setUser: React.Dispatch<React.SetStateAction<any>>;
    login: (user: Partial<User>) => void;
    logout: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

type UserState = Omit<User, 'id' | 'name' | 'type' | 'email' | 'password' | 'nickName' | 'avatar'> & Partial<User>;

//export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
export const ThemeProvider = ({ children, initialPosts, initialArticles }: { children: ReactNode, initialPosts?: any[], initialArticles?: any[] }) => {
    //const [postsAll, setPostsAll] = useState<Post[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const [articlesAll, setArticlesAll] = useState<Article[]>([]);
    const [user, setUser] = useState<UserState>({});
    const [postsAll, setPostsAll] = useState(initialPosts || []);
    const [articlesAll, setArticlesAll] = useState(initialArticles || []);
    // console.log(initialPosts)
    // console.log(initialArticles?.length)
    // const getAllPosts = async () => {
    //     const fec = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { next: { revalidate: 36000 } });
    //     const posts = await fec.json();
    //     setPostsAll(posts);
    // };
    // const getAllArticles = async () => {
    //     const fecA = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, { next: { revalidate: 36000 } });
    //     const articles = await fecA.json();
    //     setArticlesAll(articles);
    // };
    useEffect(() => {
        const session = Cookies.get('session');

        // const getCookie = (name: string) => {
        //     const value = `; ${document.cookie}`;
        //     const parts = value.split(`; ${name}=`);
        //     if (parts.length === 2) return parts.pop()?.split(';').shift();
        // }

        // const session = getCookie('session');
        if (session) {
            const user = decodeToken(session);
            if (user) {
                setUser(user);
                setIsAuthenticated(true);
            }
        }


    }, []);
    // useEffect(() => {
    //     console.log(postsAll)
    //     if (postsAll.length === 0) {
    //         getAllPosts();
    //     }
    //     console.log(articlesAll)
    //     if (articlesAll.length === 0) {
    //         getAllArticles();
    //     }
    // }, [postsAll, articlesAll])
    //console.log(postsAll)
    useEffect(() => {
        if (initialPosts) setPostsAll(initialPosts);
        if (initialArticles) setArticlesAll(initialArticles);
    }, [initialPosts, initialArticles]);
    const login = (user: Partial<User>) => {
        setUser(user);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser({});
        setIsAuthenticated(false);
    };
    return (
        <ThemeContext.Provider value={{ postsAll, setPostsAll, articlesAll, setArticlesAll, isAuthenticated, user, login, logout }}>
            {children}
        </ThemeContext.Provider>
    );

};


