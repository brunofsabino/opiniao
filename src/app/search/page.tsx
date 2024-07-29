'use client'
import { useRouter, useSearchParams } from 'next/navigation';
//import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/MyContext';
import News from '../../components/News';
import ArticleCompac from '../../components/ArticleCompac';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ news: [], articles: [] });
    const context = useContext(ThemeContext);
    const { postsAll, articlesAll } = context;

    // Função para buscar notícias e artigos com base na query
    const searchResults = async (query) => {
        if (!query) {
            setResults({ news: [], articles: [] });
            return;
        }
        // Convertendo a consulta para minúsculas para comparação insensível a maiúsculas
        const lowerCaseQuery = query.toLowerCase();

        // Filtrando posts com base na consulta
        const filteredNews = (postsAll || []).filter((post: any) => {
            const title = post.title ? post.title.toLowerCase() : '';
            const content = post.content ? post.content.toLowerCase() : '';
            return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
        });

        // Filtrando artigos com base na consulta
        const filteredArticles = (articlesAll || []).filter((article: any) => {
            const title = article.title ? article.title.toLowerCase() : '';
            const content = article.content ? article.content.toLowerCase() : '';
            return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
        });

        // Atualizando o estado com os resultados filtrados
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

        //searchResults();
        //}
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
                    // <>
                    //     <News data={postsAll} />
                    //     <ArticleCompac data={articlesAll} />

                    // </>
                    <h2 className='text-sm md:text-1xl text-center  p-5 '>Tente buscar um novo texto</h2>
                )}
                {/* {(results.news.length > 0 || results.articles.length > 0) && (
                    <>
                        {results.news.length > 0 && <News data={postsAll} />}
                        {results.articles.length > 0 && <ArticleCompac data={articlesAll} />}
                    </>
                )} */}
            </div>
        </div>
    );
};

export default SearchPage;
