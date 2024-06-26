import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { BadgeDemo } from "./Badge"
import ItemComent from "./ItemComent"


const Article = () => {
    return (
        <Card className="mt-10 flex flex-col ">
            <CardHeader className="flex-1 flex justify-evenly items-center h-[50px]">
                {/* <BadgeDemo name="Artigos" size="text-xl" /> */}
                <Link href="/artigos" legacyBehavior passHref>
                    <a >
                        <h1 className="scroll-m-20 ml-1 text-3xl font-extrabold tracking-tight lg:text-3xl">
                            Artigos
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
                <div className="flex justify-evenly">

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

                    <div>
                        <Separator orientation="vertical" />
                    </div>
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
                </div>
                <Separator className="w-[100%] m-10 " />
                <div className=" flex items-center justify-evenly">
                    {/* <div className="w-[30%] mt-3 ">
                        <Link href="/sds" legacyBehavior passHref>
                            <a className="cursor-pointer" >
                                <div className="relative w-full mb-3 bg-cover bg-center rounded h-[300px]" style={{ backgroundImage: "url('/images/teste.jpg')" }}>
                                   
                                </div>
                                <BadgeDemo name="Teste Teste" size="text-xs" />
                                <h1 className="scroll-m-20 mt-3 text-4xl font-extrabold tracking-tight lg:text-4xl">Noticia 1 Teste de Noticia Teste Fulano de Tal disse que nunca</h1>
                               
                               
                            </a>
                        </Link>
                    </div> */}
                    {/* <div>
                        <Separator orientation="vertical" />
                    </div> */}
                    {/* <Separator orientation="vertical" className=" h-[400px] m-5" /> */}
                    <div className="w-[40%] mt-3 ">
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
                                {/* <div className="flex justify-end mt-2">
                                    <ItemComent />
                                </div> */}
                            </a>
                        </Link>
                    </div>
                    <Separator orientation="vertical" className=" h-[400px] m-5" />
                    <div className="w-[40%] mt-3 ">
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
                                {/* <div className="flex justify-end mt-2">
                                    <ItemComent />
                                </div> */}
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