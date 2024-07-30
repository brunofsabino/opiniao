'use client'
import { useContext } from "react";
import { ThemeContext } from "../../../context/MyContext";
import _ from "lodash";
import { Skeleton } from "../../../components/ui/skeleton";
import NewsCompac from "../../../components/NewsCompac";
import { Post } from "@prisma/client";

const Page = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    const { postsAll } = context;
    let newsArticles: Post[] = []
    _.forEach(postsAll, (item) => {
        if (item.subTitle === 'Polêmicas') {
            newsArticles.push(item)
        }
    })

    if (newsArticles.length === 0) {
        return (
            <div className="container rounded-xl h-[700px] border bg-card text-card-foreground shadow mt-10 flex flex-col mb-10">
                <div className="flex items-center space-x-4 flex-col">
                    <Skeleton className="h-10 w-[40%] mt-8 bg-[#ccc]" />
                    <div className="space-y-2 flex w-full">
                        <Skeleton className="h-[250px] w-[350px] mt-4 bg-[#ccc]" />
                        <div className="ml-4 flex-1 ">
                            <Skeleton className="h-4 w-[150px] bg-[#ccc] mb-4 mt-6 " />
                            <Skeleton className="h-8 w-full mb-4 bg-[#ccc]" />
                            <Skeleton className="h-6 w-[300px]  mb-4 bg-[#ccc]" />
                        </div>

                    </div>
                    <div className="space-y-2 flex w-full">
                        <Skeleton className="h-[250px] w-[350px] mt-4 bg-[#ccc]" />
                        <div className="ml-4 flex-1 ">
                            <Skeleton className="h-4 w-[150px] bg-[#ccc] mb-4 mt-6 " />
                            <Skeleton className="h-8 w-full mb-4 bg-[#ccc]" />
                            <Skeleton className="h-6 w-[300px]  mb-4 bg-[#ccc]" />
                        </div>

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <NewsCompac data={newsArticles} compac={false} subTitle={"Polêmicas"} />
            </div>
        )
    }
}
export default Page