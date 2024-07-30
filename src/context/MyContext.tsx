// 'use client';
// import { Article, Post, User } from '@prisma/client';
// import Cookies from 'js-cookie';
// import React, { createContext, useState, useEffect, ReactNode, FC, useContext } from 'react';
// import { decodeToken } from '../modules/auth/services/login-service';

// export interface ThemeContextProps {
//     isAuthenticated: boolean;
//     postsAll: Post[];
//     setPostsAll: React.Dispatch<React.SetStateAction<Post[]>>;
//     articlesAll: Article[];
//     setArticlesAll: React.Dispatch<React.SetStateAction<Article[]>>;
//     //user: User;
//     user: {
//         id: string;
//         name: string;
//         avatar: string;
//     };
//     setUser: React.Dispatch<React.SetStateAction<any>>;
//     login: (user: Partial<User>) => void;
//     logout: () => void;
// }

// export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// interface ThemeProviderProps {
//     children: ReactNode;
// }

// type UserState = Omit<User, 'id' | 'name' | 'type' | 'email' | 'password' | 'nickName' | 'avatar'> & Partial<User>;


// export const ThemeProvider = ({ children, initialPosts, initialArticles }: { children: ReactNode, initialPosts?: Post[], initialArticles?: Article[] }) => {

//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState<UserState>({});
//     const [postsAll, setPostsAll] = useState(initialPosts || []);
//     const [articlesAll, setArticlesAll] = useState(initialArticles || []);

//     useEffect(() => {
//         const session = Cookies.get('session');
//         if (session) {
//             const user = decodeToken(session);
//             if (user) {
//                 setUser(user);
//                 setIsAuthenticated(true);
//             }
//         }


//     }, []);
//     useEffect(() => {
//         if (initialPosts) setPostsAll(initialPosts);
//         if (initialArticles) setArticlesAll(initialArticles);
//     }, [initialPosts, initialArticles]);
//     const login = (user: Partial<User>) => {
//         setUser(user);
//         setIsAuthenticated(true);
//     };

//     const logout = () => {
//         setUser({});
//         setIsAuthenticated(false);
//     };
//     return (
//         <ThemeContext.Provider value={{ postsAll, setPostsAll, articlesAll, setArticlesAll, isAuthenticated, user, login, logout }}>
//             {children}
//         </ThemeContext.Provider>
//     );

// };
'use client';
import { Article, Post, User } from '@prisma/client';
import Cookies from 'js-cookie';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { decodeToken } from '../modules/auth/services/login-service';

// Ajuste a interface conforme necessário
export interface ThemeContextProps {
    isAuthenticated: boolean;
    postsAll: Post[];
    setPostsAll: React.Dispatch<React.SetStateAction<Post[]>>;
    articlesAll: Article[];
    setArticlesAll: React.Dispatch<React.SetStateAction<Article[]>>;
    user: {
        id: string;
        name: string;
        avatar: string;
    } | null; // Permitir que seja null se não houver um usuário autenticado
    setUser: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
        avatar: string;
    } | null>>;
    login: (user: Partial<User>) => void;
    logout: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
    initialPosts?: Post[];
    initialArticles?: Article[];
}

// export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialPosts, initialArticles }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState<{ id: string; name: string; avatar: string } | null>(null);
//     const [postsAll, setPostsAll] = useState<Post[]>(initialPosts || []);
//     const [articlesAll, setArticlesAll] = useState<Article[]>(initialArticles || []);

//     useEffect(() => {
//         const session = Cookies.get('session');
//         if (session) {
//             const decodedUser = decodeToken(session);
//             if (decodedUser) {
//                 setUser({
//                     id: decodedUser.id || '',   // Força um valor default se for null
//                     name: decodedUser.name || '', // Força um valor default se for null
//                     avatar: decodedUser.avatar || '' // Força um valor default se for null
//                 });
//                 setIsAuthenticated(true);
//             }
//         }
//     }, []);

//     useEffect(() => {
//         if (initialPosts) setPostsAll(initialPosts);
//         if (initialArticles) setArticlesAll(initialArticles);
//     }, [initialPosts, initialArticles]);

//     const login = (user: Partial<User>) => {
//         setUser({
//             id: user.id || '',
//             name: user.name || '',
//             avatar: user.avatar || '',
//         });
//         setIsAuthenticated(true);
//     };

//     const logout = () => {
//         setUser(null);
//         setIsAuthenticated(false);
//     };

//     return (
//         <ThemeContext.Provider value={{ postsAll, setPostsAll, articlesAll, setArticlesAll, isAuthenticated, user, login, logout }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialPosts, initialArticles }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ id: string; name: string; avatar: string } | null>(null);
    const [postsAll, setPostsAll] = useState<Post[]>(initialPosts || []);
    const [articlesAll, setArticlesAll] = useState<Article[]>(initialArticles || []);

    useEffect(() => {
        const session = Cookies.get('session');
        if (session) {
            const decodedUser = decodeToken(session);
            if (decodedUser) {
                setUser({
                    id: decodedUser.id || '',
                    name: decodedUser.name || '',
                    avatar: decodedUser.avatar || ''
                });
                setIsAuthenticated(true);
            }
        }
    }, []);

    useEffect(() => {
        if (initialPosts) setPostsAll(initialPosts);
        if (initialArticles) setArticlesAll(initialArticles);
    }, [initialPosts, initialArticles]);

    const login = (user: Partial<User>) => {
        setUser({
            id: user.id || '',
            name: user.name || '',
            avatar: user.avatar || ''
        });
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <ThemeContext.Provider value={{ postsAll, setPostsAll, articlesAll, setArticlesAll, isAuthenticated, user, setUser, login, logout }}>
            {children}
        </ThemeContext.Provider>
    );
};

