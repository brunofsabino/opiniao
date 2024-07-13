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
    postsAll: Post[];
    setPostsAll: React.Dispatch<React.SetStateAction<Post[]>>;
    articlesAll: Article[];
    setArticlesAll: React.Dispatch<React.SetStateAction<Article[]>>;
    user: User;
    setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [postsAll, setPostsAll] = useState<Post[]>([]);
    const [articlesAll, setArticlesAll] = useState<Article[]>([]);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const session = Cookies.get('session');

        console.log(session)
        // const getCookie = (name: string) => {
        //     const value = `; ${document.cookie}`;
        //     const parts = value.split(`; ${name}=`);
        //     if (parts.length === 2) return parts.pop()?.split(';').shift();
        // }

        // const session = getCookie('session');
        console.log(session)
        if (session) {
            const user = decodeToken(session);
            setUser(user);
        }
    }, []);
    return (
        <ThemeContext.Provider value={{ postsAll, setPostsAll, articlesAll, setArticlesAll, user, setUser }}>
            {children}
        </ThemeContext.Provider>
    );

};


