"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
//import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { BadgeDemo } from "./Badge"
import ItemComent from "./ItemComent"
import { useContext } from "react"
import { ThemeContext } from "../context/MyContext"
//import { Article } from "@prisma/client"
import { Separator } from "./ui/separator"


const Article = ({ data, articlesAll }: any) => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }

    const { setArticlesAll } = context;
    if (articlesAll) {
        //mainNews = postsAll.find(item => item.mainNewsShow === true);
        setArticlesAll(articlesAll)
    }
    return (
        <Card className="mt-10 flex flex-col ">
            <CardHeader className="flex-1 flex justify-evenly items-center h-[50px]">
                {/* <BadgeDemo name="Artigos" size="text-xl" /> */}
                <Link href={`/artigos`} legacyBehavior passHref>
                    <a >
                        <h1 className="scroll-m-20 ml-1 text-3xl font-extrabold tracking-tight lg:text-3xl">
                            Artigos
                        </h1>
                    </a>
                </Link>

            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center w-full pt-5">
                <div className="flex justify-evenly w-[100%]">

                    <div className="w-[45%] mt-3 ">
                        <Link href={`/artigos/${data[0].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: `url('/images/${data[0].img}')` }}>

                                </div>
                                <BadgeDemo name={data[0].subTitle} size="text-xs" />
                                <h1 className="scroll-m-20 mt-3 text-4xl font-extrabold tracking-tight lg:text-4xl">{data[0].title}</h1>
                                <div className="flex justify-end mt-2">
                                    <ItemComent />
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div>
                        <Separator orientation="vertical" />
                    </div>
                    <div className="w-[45%] flex flex-col items-center justify-evenly">
                        <Link href={`/artigos/${data[1].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer">
                                <div className="flex h-[130px] ml-6 mb-3 justify-between items-center w-[375px]">
                                    <div className="w-[150px] h-[100px] bg-cover bg-center rounded" style={{ backgroundImage: `url('/images/${data[1].img}')` }}>

                                    </div>
                                    <div className="scroll-m-20  flex-1 pl-4 flex flex-col">
                                        <BadgeDemo name={data[1].subTitle} size="text-xs" />
                                        <h1 className="text-1xl font-extrabold ">{data[1].title}</h1>

                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Separator />
                        <Link href={`/artigos/${data[2].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer">
                                <div className="flex h-[130px] ml-6 mb-3 items-center justify-between w-[375px]">
                                    <div className="w-[150px] h-[100px] bg-cover bg-center rounded" style={{ backgroundImage: `url('/images/${data[2].img}')` }}>

                                    </div>
                                    <div className="scroll-m-20  flex-1 pl-4 flex flex-col">
                                        <BadgeDemo name={data[2].subTitle} size="text-xs" />
                                        <h1 className="text-1xl font-extrabold ">{data[2].title}</h1>

                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Separator />
                        <Link href={`/artigos/${data[3].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer">
                                <div className="flex h-[130px] ml-6 mb-3 items-center justify-between w-[375px]">
                                    <div className="w-[150px] h-[100px] bg-cover bg-center rounded" style={{ backgroundImage: `url('/images/${data[3].img}')` }}>

                                    </div>
                                    <div className="scroll-m-20  flex-1 pl-4 flex flex-col">
                                        <BadgeDemo name={data[3].subTitle} size="text-xs" />
                                        <h1 className="text-1xl font-extrabold ">{data[3].title}</h1>

                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <Separator className="w-[100%] m-10 " />
                <div className=" flex items-center justify-evenly">

                    <div className="w-[40%] mt-3 ">
                        <Link href="/sds" legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: "url('/images/teste.jpg')" }}>

                                </div>
                                <BadgeDemo name="Teste Teste" size="text-xs" />
                                <h1 className="scroll-m-20 mt-3 text-4xl font-extrabold tracking-tight lg:text-4xl">Noticia 1 Teste de Noticia Teste Fulano de Tal disse que nunca</h1>

                            </a>
                        </Link>
                    </div>
                    <Separator orientation="vertical" className=" h-[400px] m-5" />
                    <div className="w-[40%] mt-3 ">
                        <Link href="/sds" legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: "url('/images/teste.jpg')" }}>

                                </div>
                                <BadgeDemo name="Teste Teste" size="text-xs" />
                                <h1 className="scroll-m-20 mt-3 text-4xl font-extrabold tracking-tight lg:text-4xl">Noticia 1 Teste de Noticia Teste Fulano de Tal disse que nunca</h1>

                            </a>
                        </Link>
                    </div>
                </div>
                <Separator className="w-[100%] m-10 " />
                <div className="mt-5 flex justify-evenly">
                    <div className="w-[45%] flex flex-col items-center justify-evenly">
                        <Link href="/sads" legacyBehavior passHref>
                            <a className="cursor-pointer">
                                <div className="flex h-[130px] ml-6 mb-3 items-center">
                                    <div className="w-[150px] h-[100px] bg-cover bg-center rounded" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                                        {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                                    <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                                </div>  */}
                                    </div>
                                    <div className="scroll-m-20  flex-1 pl-4 flex flex-col">
                                        <BadgeDemo name="Teste 1" size="text-xs" />
                                        <h1 className="text-1xl font-extrabold ">Noticia Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                                        {/* <div className="flex justify-end m-2">
                                            <ItemComent />
                                        </div> */}
                                    </div>
                                    {/* <CardDescription>Descrição de noticia tal, de tal, de noticia tal, de tal ...</CardDescription>  */}
                                    {/* <div className="flex justify-end">
                                <ItemComent />
                            </div>  */}
                                </div>
                            </a>
                        </Link>
                        <Separator />
                        <Link href="/sads" legacyBehavior passHref>
                            <a className="cursor-pointer">
                                <div className="flex h-[130px] ml-6 mb-3 items-center">
                                    <div className="w-[150px] h-[100px] bg-cover bg-center rounded" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                                        {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                                    <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                                </div>  */}
                                    </div>
                                    <div className="scroll-m-20  flex-1 pl-4 flex flex-col">
                                        <BadgeDemo name="Teste 1" size="text-xs" />
                                        <h1 className="text-1xl font-extrabold ">Noticia Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                                        {/* <div className="flex justify-end m-2">
                                            <ItemComent />
                                        </div> */}
                                    </div>
                                    {/* <CardDescription>Descrição de noticia tal, de tal, de noticia tal, de tal ...</CardDescription>  */}
                                    {/* <div className="flex justify-end">
                                <ItemComent />
                            </div>  */}
                                </div>
                            </a>
                        </Link>
                        <Separator />
                        <Link href="/sads" legacyBehavior passHref>
                            <a className="cursor-pointer">
                                <div className="flex h-[130px] ml-6 mb-3 items-center">
                                    <div className="w-[150px] h-[100px] bg-cover bg-center rounded" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                                        {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                                    <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                                </div>  */}
                                    </div>
                                    <div className="scroll-m-20  flex-1 pl-4 flex flex-col">
                                        <BadgeDemo name="Teste 1" size="text-xs" />
                                        <h1 className="text-1xl font-extrabold ">Noticia Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                                        {/* <div className="flex justify-end m-2">
                                            <ItemComent />
                                        </div> */}
                                    </div>
                                    {/* <CardDescription>Descrição de noticia tal, de tal, de noticia tal, de tal ...</CardDescription>  */}
                                    {/* <div className="flex justify-end">
                                <ItemComent />
                            </div>  */}
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Separator orientation="vertical" />
                    </div>
                    <div className="w-[45%] mt-3 ">
                        <Link href="/sds" legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                                    {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                        <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                        </div> */}
                                </div>
                                <BadgeDemo name="Teste Teste" size="text-xs" />
                                <h1 className="scroll-m-20 mt-3 text-4xl font-extrabold tracking-tight lg:text-4xl">Noticia 1 Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                                {/* <CardDescription>Descrição de noticia tal, de tal, de noticia tal, de tal ...</CardDescription> */}
                                <div className="flex justify-end mt-2">
                                    <ItemComent />
                                </div>
                            </a>
                        </Link>
                    </div>

                </div>
            </CardContent>
            {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card >
    )
}

export default Article
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     Separator,
// } from "@/components/ui/card"
// import Link from "next/link"
// import { BadgeDemo } from "./Badge"
// import ItemComent from "./ItemComent"

// //const Article = ({ articles }: { articles: any[] }) => {
// const Article = ({ data }: any) => {
//     return (
//         <Card className="mt-10 flex flex-col ">
//             <CardHeader className="flex-1 flex justify-evenly items-center h-[50px]">
//                 <Link href="/artigos" legacyBehavior passHref>
//                     <a >
//                         <h1 className="scroll-m-20 ml-1 text-3xl font-extrabold tracking-tight lg:text-3xl">
//                             Artigos
//                         </h1>
//                     </a>
//                 </Link>
//             </CardHeader>
//             <CardContent className="flex-1 flex flex-col items-center w-full pt-5">
//                 {data.map((article, index) => (
//                     <div key={index}>
//                         <div className="flex justify-evenly mb-10">
//                             <div className="w-[45%] mt-3 ">
//                                 <Link href={`/articles/${article.id}`} legacyBehavior passHref>
//                                     <a className="cursor-pointer" >
//                                         <div className="relative w-full mb-3 bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: `url(${article.image})` }}></div>
//                                         <BadgeDemo name={article.badgeName} size="text-xs" />
//                                         <h1 className="scroll-m-20 mt-3 text-4xl font-extrabold tracking-tight lg:text-4xl">{article.title}</h1>
//                                         <div className="flex justify-end mt-2">
//                                             <ItemComent />
//                                         </div>
//                                     </a>
//                                 </Link>
//                             </div>
//                             <Separator orientation="vertical" />
//                             <div className="w-[45%] flex flex-col items-center justify-evenly">
//                                 {data.map((subArticle, subIndex) => (
//                                     <Link key={subIndex} href={`/articles/${subArticle.id}`} legacyBehavior passHref>
//                                         <a className="cursor-pointer">
//                                             <div className="flex h-[130px] ml-6 mb-3 items-center">
//                                                 <div className="w-[150px] h-[100px] bg-cover bg-center rounded" style={{ backgroundImage: `url(${subArticle.image})` }}></div>
//                                                 <div className="scroll-m-20 flex-1 pl-4 flex flex-col">
//                                                     <BadgeDemo name={subArticle.badgeName} size="text-xs" />
//                                                     <h1 className="text-1xl font-extrabold ">{subArticle.title}</h1>
//                                                 </div>
//                                             </div>
//                                         </a>
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                         {/* {index < articles.length - 1 && <Separator className="w-[100%] m-10" />} */}
//                     </div>
//                 ))}
//             </CardContent>
//         </Card>
//     )
// }

// export default Article
