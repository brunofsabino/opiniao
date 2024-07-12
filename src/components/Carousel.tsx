"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import { Post } from "@prisma/client"
import { ThemeContext } from "../context/MyContext"
import { useContext } from "react"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }

    const { postsAll } = context;
    let slideShow: Post[] = [];

    if (postsAll) {
        // Filtra apenas os itens que têm slideShow como true
        slideShow = postsAll.filter(item => item.slideShow === true);
    }

    console.log(slideShow);
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
            {/* <CarouselContent>
                {Array.from({ length: 7 }).map((_, index) => (
                    // <CarouselItem key={index} className="basis-1/3">
                    <CarouselItem key={index} className="flex-none w-1/3 h-84 p-2"> {/* Ajuste a largura e altura dos itens 
                        <div className="p-1">
                            {/* <Card> 
                            <Card className="h-full">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent> */}
            <CarouselContent className="flex">
                {/* {Array.from({ length: 7 }).map((_, index) => ( */}
                {slideShow.map((item: Post) => (
                    <CarouselItem key={item.id} className="flex-none  h-[300px]  basis-full md:basis-1/2 lg:basis-1/3 p-2"> {/* Ajuste a largura e altura dos itens  md:basis-1/2 lg:basis-1/3*/}
                        <Link href="">
                            <Card className="h-full w-full"> {/* Garante que o cartão ocupa toda a altura e largura do item */}
                                <CardContent className=" h-full w-full flex items-center justify-center p-0 rounded">
                                    <div className="relative w-full h-full bg-cover bg-center rounded" style={{ backgroundImage: `url('/images/${item.img}')` }}>
                                        <span className="text-4xl font-semibold">{item.title}</span>
                                        <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                                            <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
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