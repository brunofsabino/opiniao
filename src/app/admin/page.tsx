"use client"

import { useRouter } from 'next/navigation';
import DemoPage from "./tablePosts/page";
import { Button } from '../../components/ui/button';

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
        <div className="container h-[100vh] flex flex-col mt-8">
            <div className="flex border rounded w-full p-5 justify-evenly m-5 bg-white">
                <Button onClick={createPost}>Criar Post</Button>
                <Button onClick={viewAllPosts}>Ver todos os Posts</Button>
            </div>
            <div className="flex border rounded w-full p-5 justify-evenly m-5  bg-white">
                <Button onClick={createArticle}>Criar Artigo</Button>
                <Button onClick={viewAllArticles}>Ver todos os Artigos</Button>
            </div>

            {/* <DemoPage /> */}
        </div>
    )
}

export default Page