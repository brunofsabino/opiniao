import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { BadgeDemo } from "./Badge"
import ItemComent from "./ItemComent"


const MainNews = () => {
    return (
        <Card className="mt-10 flex min-h-[350px]">
            <CardHeader className="flex-1 flex justify-evenly ">
                <BadgeDemo name="Teste Teste" size="text-xs" />
                {/* <CardTitle><h1>Noticia Teste Legal Noticia Teste Legal Noticia Teste Legal</h1></CardTitle> */}
                <h1 className="scroll-m-20 ml-1 text-4xl font-extrabold tracking-tight lg:text-4xl">Noticia Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                <CardDescription>Descrição de noticia tal, de tal, de noticia tal, de tal ...</CardDescription>
                <div className="flex justify-end">
                    <ItemComent />
                </div>
            </CardHeader>
            {/* <CardContent className="flex-1 flex justify-center items-center w-full pt-5">
                <div className="flex justify-center items-center border-b-[1.5px] border-borderCustom w-full h-[330px]">
                    <img src="/images/teste.jpg" alt="logo Opinião Gospel" className="min-w-full rounded" />
                </div>
            </CardContent> */}
            <CardContent className="flex-1 flex justify-center items-center w-full pt-5">
                <div className="relative w-full  bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                    {/* <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center">
                        <h1 className="text-white text-2xl font-bold">Opinião Gospel</h1>
                    </div> */}
                </div>
            </CardContent>
            {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>
    )
}

export default MainNews