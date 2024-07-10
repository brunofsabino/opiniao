"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import DemoPage from "./tablePosts/page";

const Page = () => {
    const router = useRouter();
    const createPost = () => {
        router.push('/admin/post')
    }

    const createArticle = () => {
        router.push('/admin/artigo')
    }
    const viewAllPosts = () => {
        router.push('/admin/tablePosts')
    }
    const viewAllArticles = () => {
        router.push('/admin/tableArticles')
    }
    return (
        <div className="container h-[100vh]">
            <Button onClick={createPost}>Criar Post</Button>
            <Button onClick={createArticle}>Criar Artigo</Button>
            <Button onClick={viewAllPosts}>Ver todos os Posts</Button>
            <Button onClick={viewAllArticles}>Ver todos os Artigos</Button>
            {/* <DemoPage /> */}
        </div>
    )
}

export default Page