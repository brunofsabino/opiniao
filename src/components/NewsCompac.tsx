"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Separator } from "./ui/separator"

import { BadgeDemo } from "./Badge"
import ItemComent from "./ItemComent"
import Link from "next/link"
import { Post } from "@prisma/client"
import { useContext } from "react"
import { ThemeContext } from "../context/MyContext"
import { Skeleton } from "./ui/skeleton"
//import { Card } from "./ui/card"


const NewsCompac = ({ data, compac, subTitle }: any) => {

    let limitedData
    if (compac === true) {
        limitedData = data.slice(0, 5);
    } else {
        limitedData = data
    }
    //const limitedData = data.slice(0, 5);
    return (
        <Card className="mt-10 flex flex-col mb-10">
            <CardHeader className="flex-1 flex justify-evenly items-center h-[50px]">
                <Link href="/noticias" legacyBehavior passHref>
                    <a >
                        <h1 className="scroll-m-20 ml-1 text-2xl text-center font-extrabold tracking-tight lg:text-3xl">
                            Notícias {subTitle ? `- ${subTitle}` : ''}
                        </h1>
                    </a>
                </Link>

            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center w-full pt-5">
                {/* {Array.from({ length: 7 }).map((_, index) => ( */}
                {limitedData.map((item: Post) => (
                    <div key={item.id} className="flex justify-evenly w-full">
                        {/* <div key={item.id} className="w-[90%]">
                            <Link href={`/noticias/${item?.slug}`} legacyBehavior passHref>
                                <div className="flex  w-full h-[250px] ml-6 mb-3 items-center cursor-pointer">
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
                                </div>
                            </Link>
                            <div className="mb-3">
                                <Separator />
                            </div>

                        </div> */}
                        <div key={item.id} className="w-[90%]">
                            <Link href={`/noticias/${item?.slug || ''}`} legacyBehavior passHref>
                                {/* <Link href={`/noticias`} legacyBehavior passHref> */}
                                <div className="flex flex-col w-full mt-3 mb-3  cursor-pointer md:flex-row md:ml-6 md:items-center md:h-[250px]">
                                    <div className="w-full h-[150px] bg-cover bg-center rounded md:w-[300px] md:h-[230px]" style={{ backgroundImage: `url('/images/${item.img}')` }}>
                                    </div>
                                    <div className="scroll-m-20 text-[12px] flex-1 flex mt-4 flex-col h-full justify-evenly md:p-5">
                                        <BadgeDemo name={item.subTitle} size="text-[10px]" />
                                        <h1 className="font-extrabold md:text-3xl">{item.title}</h1>
                                        <CardDescription className="text-[12px] md:text-sm">{item.summaryParagraph}</CardDescription>
                                        <div className="flex justify-end m-2">
                                            <ItemComent />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="mb-3">
                                <Separator />
                            </div>

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

export default NewsCompac