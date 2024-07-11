import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { BadgeDemo } from "./Badge"
import ItemComent from "./ItemComent"
import Link from "next/link"
import { Post } from "@prisma/client"


const News = ({ data }: any) => {
    return (
        <Card className="mt-10 flex flex-col mb-10">
            <CardHeader className="flex-1 flex justify-evenly items-center h-[50px]">
                <Link href="/noticias" legacyBehavior passHref>
                    <a >
                        <h1 className="scroll-m-20 ml-1 text-3xl font-extrabold tracking-tight lg:text-3xl">
                            Notícias
                        </h1>
                    </a>
                </Link>

            </CardHeader>
            {/* <CardContent className="flex-1 flex justify-center items-center w-full pt-5">
                <div className="flex justify-center items-center border-b-[1.5px] border-borderCustom w-full h-[330px]">
                    <img src="/images/teste.jpg" alt="logo Opinião Gospel" className="min-w-full rounded" />
                </div>
            </CardContent> */}
            <CardContent className="flex-1 flex flex-col items-center w-full pt-5">
                {/* {Array.from({ length: 7 }).map((_, index) => ( */}
                {data.map((item: Post) => (
                    <div key={item.id} className="flex justify-evenly w-full">

                        {/* <div className="w-[45%] mt-3">
                        <div className="relative w-full  bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                            {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                        <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                        </div> 
                        </div>
                        <h1 className="scroll-m-20 mt-3 text-4xl font-extrabold tracking-tight lg:text-4xl">Noticia Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                        {/* <CardDescription>Descrição de noticia tal, de tal, de noticia tal, de tal ...</CardDescription> 
                        <div className="flex justify-end mt-2">
                            <ItemComent />
                        </div>
                    </div>
                    <div>
                        <Separator orientation="vertical" />
                    </div> */}
                        <div key={item.id} className="w-[90%]">
                            <Link href="">
                                <div className="flex  w-full h-[250px] ml-6 mb-3 items-center">
                                    <div className="w-[300px] h-[230px] bg-cover bg-center rounded" style={{ backgroundImage: `url('/images/${item.img}')` }}>
                                    </div>
                                    <div className="scroll-m-20  flex-1 flex flex-col h-full justify-evenly p-5">
                                        <BadgeDemo name={item.subTitle} size="text-xs" />
                                        <h1 className="text-3xl font-extrabold ">{item.title}</h1>
                                        <CardDescription>{item.summaryParagraph}</CardDescription>
                                        <div className="flex  m-2">
                                            <ItemComent />
                                        </div>
                                    </div>
                                    {/* <div className="flex justify-end">
                                <ItemComent />
                            </div>  */}
                                </div>
                                <div className="mb-3">
                                    <Separator />
                                </div>

                            </Link>
                        </div>
                    </div>
                ))}
            </CardContent>
            {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>
    )
}

export default News