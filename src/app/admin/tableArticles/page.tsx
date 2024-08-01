"use client"
import { Button } from "../../../components/ui/button";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { useRouter } from "next/navigation";



async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`, {
        //const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error('Falha ao buscar posts');
    }
    const posts = await response.json();
    //console.log(posts)

    return posts;
}

export default async function DemoPage() {
    const router = useRouter();
    const data = await getData()
    const backAdmHome = () => {
        router.push('/admin')
    }

    return (

        <div className="container mx-auto py-10">

            <Button onClick={backAdmHome}>Voltar</Button>
            <DataTable columns={columns} data={data} />
        </div>
    )
}
