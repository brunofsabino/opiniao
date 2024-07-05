"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import DemoPage from "./table/page";

const Page = () => {
    const router = useRouter();
    const createPost = () => {
        router.push('/admin/post')
    }

    const createArticle = () => {
        router.push('/admin/artigo')
    }
    return (
        <div className="container h-[100vh]">
            <Button onClick={createPost}>Criar Post</Button>
            <Button onClick={createArticle}>Criar Artigo</Button>
            {/* <DemoPage /> */}
        </div>
    )
}

export default Page