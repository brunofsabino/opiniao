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


const Article = () => {
    return (
        <Card className="mt-10 flex flex-col ">
            <CardHeader className="flex-1 flex justify-evenly items-center h-[50px]">
                <BadgeDemo name="Artigos" size="text-xl" />

            </CardHeader>
            {/* <CardContent className="flex-1 flex justify-center items-center w-full pt-5">
                <div className="flex justify-center items-center border-b-[1.5px] border-borderCustom w-full h-[330px]">
                    <img src="/images/teste.jpg" alt="logo Opinião Gospel" className="min-w-full rounded" />
                </div>
            </CardContent> */}
            <CardContent className="flex-1 flex  items-center w-full pt-5">
                <div className="flex justify-evenly">

                    <div className="w-[45%] ">
                        <div className="relative w-full  bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                            {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                        <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                        </div> */}
                        </div>
                        <h1 className="scroll-m-20 ml-1 text-4xl font-extrabold tracking-tight lg:text-4xl">Noticia Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                        {/* <CardDescription>Descrição de noticia tal, de tal, de noticia tal, de tal ...</CardDescription> */}
                        <div className="flex justify-end">
                            <ItemComent />
                        </div>
                    </div>
                    <div>
                        <Separator orientation="vertical" />
                    </div>
                    <div className="w-[40%]">
                        <div className="flex h-[130px] items-center">
                            <div className="w-[150px] h-[100px] bg-cover bg-center rounded" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                                {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                                    <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                                </div>  */}
                            </div>
                            <div className="scroll-m-20  flex-1 p-5">
                                <h1 className="text-1xl font-extrabold ">Noticia Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                                <div className="flex justify-end m-2">
                                    <ItemComent />
                                </div>
                            </div>
                            {/* <CardDescription>Descrição de noticia tal, de tal, de noticia tal, de tal ...</CardDescription>  */}
                            {/* <div className="flex justify-end">
                                <ItemComent />
                            </div>  */}
                        </div>
                    </div>

                </div>
            </CardContent>
            {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>
    )
}

export default Article