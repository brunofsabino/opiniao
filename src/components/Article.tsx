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
                        <h1 className="scroll-m-20 ml-1 text-2xl font-extrabold tracking-tight md:text-3xl">
                            Artigos
                        </h1>
                    </a>
                </Link>

            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center w-full pt-5">
                <div className="flex justify-evenly w-[100%] flex-col md:flex-row">

                    <div className="w-full mt-3 md:w-[45%] ">
                        <Link href={`/artigos/${data[0].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[175px] md:h-[300px]" style={{ backgroundImage: `url('/images/${data[0].img}')` }}>

                                </div>
                                <BadgeDemo name={data[0].subTitle} size="text-[10px]" />
                                <h1 className="scroll-m-20 mt-3 text-2xl font-extrabold tracking-tight md:text-4xl">{data[0].title}</h1>
                                <div className="flex justify-end mt-2">
                                    <ItemComent />
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div>
                        <Separator orientation="vertical" />
                    </div>
                    <div className="w-full flex flex-col mt-10 mb-5 items-center justify-evenly md:w-[45%] md:mt-0 md:mb-0">
                        <Link href={`/artigos/${data[1].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer w-full mt-3">
                                <div className="w-full flex flex-col h-[300px] mb-3 justify-between md:w-[375px] md:h-[130px] md:flex-row md:ml-6 md:items-center">
                                    <div className="w-[100%] h-[175px] mb-5 bg-cover bg-center rounded md:w-[150px] md:h-[100px]" style={{ backgroundImage: `url('/images/${data[1].img}')` }}>

                                    </div>
                                    <div className="scroll-m-20  flex-1  flex flex-col md:pl-4">
                                        <BadgeDemo name={data[1].subTitle} size="text-[10px]" />
                                        <h1 className="text-1xl font-extrabold ">{data[1].title}</h1>

                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Separator />
                        <Link href={`/artigos/${data[2].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer w-full mt-3">
                                <div className="w-full flex flex-col h-[300px] mb-3 justify-between md:w-[375px] md:h-[130px] md:flex-row md:ml-6 md:items-center">
                                    <div className="w-[100%] h-[175px] mb-5 bg-cover bg-center rounded md:w-[150px] md:h-[100px]" style={{ backgroundImage: `url('/images/${data[2].img}')` }}>

                                    </div>
                                    <div className="scroll-m-20  flex-1  flex flex-col md:pl-4">
                                        <BadgeDemo name={data[2].subTitle} size="text-[10px]" />
                                        <h1 className="text-1xl font-extrabold ">{data[2].title}</h1>

                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Separator />
                        <Link href={`/artigos/${data[3].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer w-full mt-3">
                                <div className="w-full flex flex-col h-[300px] mb-3 justify-between md:w-[375px] md:h-[130px] md:flex-row md:ml-6 md:items-center">
                                    <div className="w-[100%] h-[175px] mb-5 bg-cover bg-center rounded md:w-[150px] md:h-[100px]" style={{ backgroundImage: `url('/images/${data[3].img}')` }}>

                                    </div>
                                    <div className="scroll-m-20  flex-1  flex flex-col md:pl-4">
                                        <BadgeDemo name={data[3].subTitle} size="text-[10px]" />
                                        <h1 className="text-1xl font-extrabold ">{data[3].title}</h1>

                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <Separator className="w-[100%] m-10 " />
                <div className=" flex flex-col items-center justify-evenly md:flex-row">

                    <div className="w-[100%] mb-3 mt-3 md:w-[40%] md:min-h-[450px]">
                        <Link href={`/artigos/${data[4].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[175px] md:h-[300px]" style={{ backgroundImage: `url('/images/${data[4].img}')` }}>

                                </div>
                                <BadgeDemo name={data[4].subTitle} size="text-[10px]" />
                                <h1 className="scroll-m-20 mt-3 text-2xl font-extrabold tracking-tight md:text-4xl">{data[4].title}</h1>

                            </a>
                        </Link>
                    </div>
                    <Separator orientation="vertical" className="hidden h-[400px] m-5 md:block" />
                    <div className="w-[100%] mb-3 mt-3 md:w-[40%] md:min-h-[450px]">
                        <Link href={`/artigos/${data[5].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[175px] md:h-[300px]" style={{ backgroundImage: `url('/images/${data[5].img}')` }}>

                                </div>
                                <BadgeDemo name={data[5].subTitle} size="text-[10px]" />
                                <h1 className="scroll-m-20 mt-3 text-2xl font-extrabold tracking-tight md:text-4xl">{data[5].title}</h1>

                            </a>
                        </Link>
                    </div>
                </div>
                <Separator className="w-[100%] m-10 " />
                <div className="mt-5 flex flex-col justify-evenly md:flex-row">
                    <div className="w-[100%] flex flex-col items-center justify-evenly md:w-[45%]">
                        <Link href={`/artigos/${data[6].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer mt-3">
                                <div className="w-full flex flex-col h-[300px] mb-3 justify-between md:w-[375px] md:h-[130px] md:flex-row md:ml-6 md:items-center">
                                    <div className="w-[100%] h-[250px] mb-5 bg-cover bg-center rounded md:w-[150px] md:h-[100px]" style={{ backgroundImage: `url('/images/${data[6].img}')` }}>
                                    </div>
                                    <div className="scroll-m-20  flex-1  flex flex-col md:pl-4">
                                        <BadgeDemo name={data[6].subTitle} size="text-[10px]" />
                                        <h1 className="text-1xl font-extrabold ">{data[6].title}</h1>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Separator />
                        <Link href={`/artigos/${data[7].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer mt-3">
                                <div className="w-full flex flex-col h-[300px] mb-3 justify-between md:w-[375px] md:h-[130px] md:flex-row md:ml-6 md:items-center">
                                    <div className="w-[100%] h-[250px] mb-5 bg-cover bg-center rounded md:w-[150px] md:h-[100px]" style={{ backgroundImage: `url('/images/${data[7].img}')` }}>
                                    </div>
                                    <div className="scroll-m-20  flex-1  flex flex-col md:pl-4">
                                        <BadgeDemo name={data[7].subTitle} size="text-[10px]" />
                                        <h1 className="text-1xl font-extrabold ">{data[7].title}</h1>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Separator />
                        <Link href={`/artigos/${data[8].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer mt-3">
                                <div className="w-full flex flex-col h-[300px] mb-3 justify-between md:w-[375px] md:h-[130px] md:flex-row md:ml-6 md:items-center">
                                    <div className="w-[100%] h-[250px] mb-5 bg-cover bg-center rounded md:w-[150px] md:h-[100px]" style={{ backgroundImage: `url('/images/${data[8].img}')` }}>
                                    </div>
                                    <div className="scroll-m-20  flex-1  flex flex-col md:pl-4">
                                        <BadgeDemo name={data[8].subTitle} size="text-[10px]" />
                                        <h1 className="text-1xl font-extrabold ">{data[8].title}</h1>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Separator orientation="vertical" />
                    </div>
                    <div className="w-[100%] mb-3 mt-5 md:w-[40%]">
                        <Link href={`/artigos/${data[9].slug}`} legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[175px] md:h-[300px]" style={{ backgroundImage: `url('/images/${data[9].img}')` }}>
                                    {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                        <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                        </div> */}
                                </div>
                                <BadgeDemo name={data[9].subTitle} size="text-xs" />
                                <h1 className="scroll-m-20 mt-3 text-2xl font-extrabold tracking-tight md:text-4xl">{data[9].title}</h1>
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
