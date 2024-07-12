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
import { Article, Post } from '@prisma/client';
import React, { createContext, useState, useEffect, ReactNode, FC, useContext } from 'react';

interface ThemeContextProps {
    postsAll: Post[];
    setPostsAll: React.Dispatch<React.SetStateAction<Post[]>>;
    articlesAll: Article[];
    setArticlesAll: React.Dispatch<React.SetStateAction<Article[]>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [postsAll, setPostsAll] = useState<Post[]>([]);
    const [articlesAll, setArticlesAll] = useState<Article[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`); //, { next: { revalidate: 36000 } }
            const posts = await response.json();
            setPostsAll(posts);
        };
        const getArticles = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`); //, { next: { revalidate: 36000 } }
            const article = await response.json();
            setArticlesAll(article);
        };
        getPosts();
        getArticles();
    }, []);

    return (
        <ThemeContext.Provider value={{ postsAll, setPostsAll, articlesAll, setArticlesAll }}>
            {children}
        </ThemeContext.Provider>
    );

};
//export const useStateContext = () => useContext(ThemeContext);

