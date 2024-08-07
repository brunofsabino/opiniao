"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import Link from "next/link"
import { Post } from "@prisma/client"
import { ThemeContext } from "../context/MyContext"
import { useContext } from "react"
import { Skeleton } from "./ui/skeleton"
import { BadgeDemo } from "./Badge"

export function CarouselPlugin({ data }: any) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    // const context = useContext(ThemeContext);
    // if (!context) {
    //     throw new Error('useContext must be used within a ThemeProvider');
    // }

    // const { postsAll } = context;
    // let slideShow: Post[] = [];

    // if (postsAll) {
    //     // Filtra apenas os itens que têm slideShow como true
    //     slideShow = postsAll.filter(item => item.slideShow === true);
    // }
    // if (slideShow.length === 0) {
    //     return (
    //         <Skeleton className="h-12 w-12" />


    //     )
    // }

    //console.log(slideShow);
    return (
        <Carousel
            plugins={[plugin.current]}
            //className="w-full max-w-xs"
            className="w-full max-w-4xl lg:max-w-5xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "start",
                loop: true,
            }}
        >


            {/* <CarouselContent className="flex">
                {data.map((item: Post) => (
                    <CarouselItem key={item.id} className="flex-none  h-[200px]  basis-full md:basis-1/2 lg:basis-1/3 p-2 md:h-[300px] "> 
                        <Link href={`/noticias/${item.slug}`} legacyBehavior passHref>
                            <Card className="h-full w-full cursor-pointer"> 
                                <CardContent className=" h-full w-full flex items-center justify-center p-0 rounded">
                                    <div className="relative w-full h-full bg-cover bg-center rounded" style={{ backgroundImage: `url('/images/${item.img}')` }}>
                                        <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-5">
                                            <BadgeDemo name={item.subTitle} size="text-[9px]" />
                                            <h1 className="font-extrabold text-[12px] md:text-3xl">{item.title}</h1>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent> */}
            <CarouselContent className="flex">
                {data.map((item: Post) => (
                    <CarouselItem key={item.id} className="flex-none h-[200px] basis-full md:basis-1/2 lg:basis-1/3 p-2 md:h-[300px]">
                        <Link href={`/noticias/${item.slug}`} legacyBehavior passHref>
                            {/* <Link href={`/noticias`} legacyBehavior passHref> */}
                            <Card className="h-full w-full cursor-pointer">
                                <CardContent className="h-full w-full flex items-center justify-center p-0 rounded">
                                    <div className="relative w-full h-full bg-cover bg-center rounded" style={{ backgroundImage: `url('/images/${item.img}')` }}>
                                        <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end p-5">
                                            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[hsl(24.6,95%,53.1%,0.55)] to-transparent"></div> {/* Gradiente */}
                                            {/* <BadgeDemo name={item.subTitle} size="text-[9px]" /> */}
                                            <h1 className="relative font-extrabold text-[14px] md:text-3xl  text-white">{item.title}</h1> {/* Adicione "relative" aqui */}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}