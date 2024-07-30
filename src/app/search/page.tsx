// 'use client'
// import { useRouter, useSearchParams } from 'next/navigation';
// //import { useRouter } from 'next/router';
// import { Suspense, useContext, useEffect, useState } from 'react';
// import { ThemeContext } from '../../context/MyContext';
// import News from '../../components/News';
// import ArticleCompac from '../../components/ArticleCompac';
// import { Article, Post } from '@prisma/client';

// interface SearchResults {
//     news: Post[];
//     articles: Article[];
// }

// const Page = () => {
//     const searchParams = useSearchParams();
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState<SearchResults>({ news: [], articles: [] });
//     const context = useContext(ThemeContext);


//     if (!context) {
//         throw new Error('useContext must be used within a ThemeProvider');
//     }
//     const { postsAll, articlesAll } = context;
//     // Função para buscar notícias e artigos com base na query
//     const searchResults = async (query: any) => {
//         if (!query) {
//             setResults({ news: [], articles: [] });
//             return;
//         }
//         // Convertendo a consulta para minúsculas para comparação insensível a maiúsculas
//         const lowerCaseQuery = query.toLowerCase();

//         // Filtrando posts com base na consulta
//         const filteredNews = (postsAll || []).filter((post: any) => {
//             const title = post.title ? post.title.toLowerCase() : '';
//             const content = post.content ? post.content.toLowerCase() : '';
//             return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
//         });

//         // Filtrando artigos com base na consulta
//         const filteredArticles = (articlesAll || []).filter((article: any) => {
//             const title = article.title ? article.title.toLowerCase() : '';
//             const content = article.content ? article.content.toLowerCase() : '';
//             return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
//         });

//         // Atualizando o estado com os resultados filtrados
//         setResults({ news: filteredNews, articles: filteredArticles });
//     };

//     useEffect(() => {
//         const query = searchParams.get('q') || '';
//         setQuery(query);

//         if (query.length >= 3) {
//             searchResults(query);
//         } else {
//             setResults({ news: [], articles: [] });
//         }

//         //searchResults();
//         //}
//     }, [searchParams]);
//     // Componente de fallback
//     const FallbackComponent = () => <div>Loading...</div>;

//     return (
//         <Suspense fallback={<FallbackComponent />}>
//             <div className='container min-h-[90vh]'>
//                 <div className='border rounded-full bg-white mt-5'>
//                     <h1 className='text-sm text-center font-extrabold p-5 md:text-4xl'>Resultados da Busca: {query}</h1>
//                 </div>
//                 <div>
//                     {results.news.length > 0 ? (
//                         <News data={results.news} />
//                     ) : (
//                         <h2 className='text-sm md:text-2xl text-center font-extrabold p-5 '>Nenhuma notícia encontrada.</h2>
//                     )}
//                 </div>
//                 <div>
//                     {results.articles.length > 0 ? (
//                         <ArticleCompac data={results.articles} />
//                     ) : (
//                         <h2 className='text-sm md:text-2xl text-center font-extrabold p-5 '>Nenhum artigo encontrado.</h2>
//                     )}
//                 </div>
//                 <div>
//                     {(results.news.length === 0 && results.articles.length === 0) && (
//                         // <>
//                         //     <News data={postsAll} />
//                         //     <ArticleCompac data={articlesAll} />

//                         // </>
//                         <h2 className='text-sm md:text-1xl text-center  p-5 '>Tente buscar um novo texto</h2>
//                     )}
//                     {/* {(results.news.length > 0 || results.articles.length > 0) && (
//                     <>
//                         {results.news.length > 0 && <News data={postsAll} />}
//                         {results.articles.length > 0 && <ArticleCompac data={articlesAll} />}
//                     </>
//                 )} */}
//                 </div>
//             </div>
//         </Suspense>
//     );
// };

// export default Page;









// 'use client';

// import { useSearchParams } from 'next/navigation';
// import { useContext, useEffect, useState } from 'react';
// import { ThemeContext } from '../../context/MyContext';
// import News from '../../components/News';
// import ArticleCompac from '../../components/ArticleCompac';
// import { Article, Post } from '@prisma/client';

// interface SearchResults {
//     news: Post[];
//     articles: Article[];
// }

// const Search = () => {
//     const searchParams = useSearchParams();
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState<SearchResults>({ news: [], articles: [] });
//     const context = useContext(ThemeContext);

//     if (!context) {
//         throw new Error('useContext must be used within a ThemeProvider');
//     }

//     const { postsAll, articlesAll } = context;

//     // Função para buscar notícias e artigos com base na query
//     // const searchResults = (query: string) => {
//     //     if (!query) {
//     //         setResults({ news: [], articles: [] });
//     //         return;
//     //     }

//     //     // Convertendo a consulta para minúsculas para comparação insensível a maiúsculas
//     //     const lowerCaseQuery = query.toLowerCase();

//     //     // Filtrando posts com base na consulta
//     //     const filteredNews = (postsAll || []).filter((post: Post) => {
//     //         const title = post.title ? post.title.toLowerCase() : '';
//     //         const content = post.content ? post.content.toLowerCase() : '';
//     //         return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
//     //     });

//     //     // Filtrando artigos com base na consulta
//     //     const filteredArticles = (articlesAll || []).filter((article: Article) => {
//     //         const title = article.title ? article.title.toLowerCase() : '';
//     //         const content = article.content ? article.content.toLowerCase() : '';
//     //         return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
//     //     });

//     //     // Atualizando o estado com os resultados filtrados
//     //     setResults({ news: filteredNews, articles: filteredArticles });
//     // };
//     const searchResults = async (query: string) => {
//         if (!query) {
//             setResults({ news: [], articles: [] });
//             return;
//         }
//         // Convertendo a consulta para minúsculas para comparação insensível a maiúsculas
//         const lowerCaseQuery = query.toLowerCase();

//         // Filtrando posts com base na consulta
//         const filteredNews = (postsAll || []).filter((post: Post) => {
//             const title = post.title ? post.title.toLowerCase() : '';
//             const content = post.contentPost ? post.contentPost.toLowerCase() : ''; // Ajustado
//             return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
//         });

//         // Filtrando artigos com base na consulta
//         const filteredArticles = (articlesAll || []).filter((article: Article) => {
//             const title = article.title ? article.title.toLowerCase() : '';
//             const content = article.contentArticle ? article.contentArticle.toLowerCase() : ''; // Ajustado
//             return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
//         });

//         // Atualizando o estado com os resultados filtrados
//         setResults({ news: filteredNews, articles: filteredArticles });
//     };

//     useEffect(() => {
//         const query = searchParams.get('q') || '';
//         setQuery(query);

//         if (query.length >= 3) {
//             searchResults(query);
//         } else {
//             setResults({ news: [], articles: [] });
//         }
//     }, [searchParams]);

//     return (
//         <div className='container min-h-[90vh]'>
//             <div className='border rounded-full bg-white mt-5'>
//                 <h1 className='text-sm text-center font-extrabold p-5 md:text-4xl'>Resultados da Busca: {query}</h1>
//             </div>
//             <div>
//                 {results.news.length > 0 ? (
//                     <News data={results.news} />
//                 ) : (
//                     <h2 className='text-sm md:text-2xl text-center font-extrabold p-5 '>Nenhuma notícia encontrada.</h2>
//                 )}
//             </div>
//             <div>
//                 {results.articles.length > 0 ? (
//                     <ArticleCompac data={results.articles} />
//                 ) : (
//                     <h2 className='text-sm md:text-2xl text-center font-extrabold p-5 '>Nenhum artigo encontrado.</h2>
//                 )}
//             </div>
//             <div>
//                 {(results.news.length === 0 && results.articles.length === 0) && (
//                     <h2 className='text-sm md:text-1xl text-center  p-5 '>Tente buscar um novo texto</h2>
//                 )}
//             </div>
//         </div>
//     );
// };

//export default Search;



// src/app/search/page.tsx





// 'use client';

// import { useSearchParams } from 'next/navigation';
// import { useContext, useEffect, useState } from 'react';
// import { ThemeContext } from '../../context/MyContext';
// import News from '../../components/News';
// import ArticleCompac from '../../components/ArticleCompac';
// import { Article, Post } from '@prisma/client';

// interface SearchResults {
//     news: Post[];
//     articles: Article[];
// }

// function Search() {
//     const searchParams = useSearchParams();
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState<SearchResults>({ news: [], articles: [] });
//     const context = useContext(ThemeContext);

//     if (!context) {
//         throw new Error('useContext must be used within a ThemeProvider');
//     }

//     const { postsAll, articlesAll } = context;

//     const searchResults = async (query: string) => {
//         if (!query) {
//             setResults({ news: [], articles: [] });
//             return;
//         }
//         const lowerCaseQuery = query.toLowerCase();

//         const filteredNews = (postsAll || []).filter((post: Post) => {
//             const title = post.title ? post.title.toLowerCase() : '';
//             const content = post.contentPost ? post.contentPost.toLowerCase() : '';
//             return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
//         });

//         const filteredArticles = (articlesAll || []).filter((article: Article) => {
//             const title = article.title ? article.title.toLowerCase() : '';
//             const content = article.contentArticle ? article.contentArticle.toLowerCase() : '';
//             return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
//         });

//         setResults({ news: filteredNews, articles: filteredArticles });
//     };

//     useEffect(() => {
//         const query = searchParams.get('q') || '';
//         setQuery(query);

//         if (query.length >= 3) {
//             searchResults(query);
//         } else {
//             setResults({ news: [], articles: [] });
//         }
//     }, [searchParams]);

//     return (
//         <div className='container min-h-[90vh]'>
//             <div className='border rounded-full bg-white mt-5'>
//                 <h1 className='text-sm text-center font-extrabold p-5 md:text-4xl'>Resultados da Busca: {query}</h1>
//             </div>
//             <div>
//                 {results.news.length > 0 ? (
//                     <News data={results.news} />
//                 ) : (
//                     <h2 className='text-sm md:text-2xl text-center font-extrabold p-5 '>Nenhuma notícia encontrada.</h2>
//                 )}
//             </div>
//             <div>
//                 {results.articles.length > 0 ? (
//                     <ArticleCompac data={results.articles} />
//                 ) : (
//                     <h2 className='text-sm md:text-2xl text-center font-extrabold p-5 '>Nenhum artigo encontrado.</h2>
//                 )}
//             </div>
//             <div>
//                 {(results.news.length === 0 && results.articles.length === 0) && (
//                     <h2 className='text-sm md:text-1xl text-center  p-5 '>Tente buscar um novo texto</h2>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Search;


'use client';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState, Suspense } from 'react';
import { ThemeContext } from '../../context/MyContext';
import News from '../../components/News';
import ArticleCompac from '../../components/ArticleCompac';
import { Article, Post } from '@prisma/client';

interface SearchResults {
    news: Post[];
    articles: Article[];
}

const SearchContent = () => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResults>({ news: [], articles: [] });
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }

    const { postsAll, articlesAll } = context;

    const searchResults = async (query: string) => {
        if (!query) {
            setResults({ news: [], articles: [] });
            return;
        }
        const lowerCaseQuery = query.toLowerCase();
        const filteredNews = (postsAll || []).filter((post: Post) => {
            const title = post.title ? post.title.toLowerCase() : '';
            const content = post.contentPost ? post.contentPost.toLowerCase() : ''; // Ajustado
            return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
        });

        const filteredArticles = (articlesAll || []).filter((article: Article) => {
            const title = article.title ? article.title.toLowerCase() : '';
            const content = article.contentArticle ? article.contentArticle.toLowerCase() : ''; // Ajustado
            return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
        });

        setResults({ news: filteredNews, articles: filteredArticles });
    };

    useEffect(() => {
        const query = searchParams.get('q') || '';
        setQuery(query);

        if (query.length >= 3) {
            searchResults(query);
        } else {
            setResults({ news: [], articles: [] });
        }
    }, [searchParams]);

    return (
        <div className='container min-h-[90vh]'>
            <div className='border rounded-full bg-white mt-5'>
                <h1 className='text-sm text-center font-extrabold p-5 md:text-4xl'>Resultados da Busca: {query}</h1>
            </div>
            <div>
                {results.news.length > 0 ? (
                    <News data={results.news} />
                ) : (
                    <h2 className='text-sm md:text-2xl text-center font-extrabold p-5 '>Nenhuma notícia encontrada.</h2>
                )}
            </div>
            <div>
                {results.articles.length > 0 ? (
                    <ArticleCompac data={results.articles} />
                ) : (
                    <h2 className='text-sm md:text-2xl text-center font-extrabold p-5 '>Nenhum artigo encontrado.</h2>
                )}
            </div>
            <div>
                {(results.news.length === 0 && results.articles.length === 0) && (
                    <h2 className='text-sm md:text-1xl text-center  p-5 '>Tente buscar um novo texto</h2>
                )}
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchContent />
        </Suspense>
    );
}


