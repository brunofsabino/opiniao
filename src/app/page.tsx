
import Article from "../components/Article"
import { CarouselPlugin } from "../components/Carousel"
import MainNews from "../components/MainNews"
import News from "../components/News"
import _ from 'lodash';
import ArticleCompac from "../components/ArticleCompac";
import { ThemeProvider } from "../context/MyContext";
import RootLayout from "./layout";

const Page = async () => {

    // const fec = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { next: { revalidate: 36000 } })
    // const posts = await fec.json()
    const fetchPosts = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { next: { revalidate: 36000 } });
    const fetchArticles = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, { next: { revalidate: 36000 } });

    const [postsRes, articlesRes] = await Promise.all([fetchPosts, fetchArticles]);
    //console.log(postsRes)
    const posts = await postsRes.json();
    const articles = await articlesRes.json();

    //console.log(posts.length)
    let mainNews
    let slideShow: string[] = []
    let newsShow: string[] = []
    _.forEach(posts, (item) => {
        if (item.mainNewsShow === true) {
            mainNews = item
        }
        if (item.slideShow === true) {
            slideShow.push(item)
        }
        if (item.newsShow === true) {
            newsShow.push(item)
        }
    })
    // const fecA = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, { next: { revalidate: 36000 } })
    // const articles = await fecA.json()
    let newsArticles: string[] = []
    _.forEach(articles, (item) => {
        if (item.articleShow === true) {
            newsArticles.push(item)
        }
    })

    return (
        //<RootLayout initialPosts={posts} initialArticles={articles}>
        <main className="container">
            <MainNews data={mainNews} postsAll2={posts} />
            {/* <MainNews /> */}
            <section className="w-[100%] flex items-center justify-center bg-white border-2 border-gray-200 rounded-2xl mt-10 p-3" >
                <CarouselPlugin data={slideShow} />
            </section>

            <Article data={newsArticles} articlesAll={articles} />

            <News data={newsShow} />
            {/* <ArticleCompac data={newsArticles} visible={false} /> */}
        </main>
        //</RootLayout   >
    )
}

export default Page