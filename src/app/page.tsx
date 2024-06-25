import Article from "@/components/Article"
import { CarouselPlugin } from "@/components/Carousel"
import MainNews from "@/components/MainNews"
import News from "@/components/News"

const Page = async () => {
    const fec = await fetch('http://localhost:4000/post', { next: { revalidate: 36000 } })
    const res = await fec.json()
    const postsq = res.posts
    return (
        <main className="container">
            <MainNews />
            <section className="w-[100%] flex items-center justify-center bg-white border-2 border-gray-200 rounded-2xl mt-10 p-3" >
                <CarouselPlugin />
            </section>
            <Article />
            <News />
            <h1>{res.posts[0].title}</h1>
            <ul>
                {postsq.map((item: any) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </main>
    )
}

export default Page