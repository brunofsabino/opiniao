"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "./ui/navigation-menu"
import { IoIosInformationCircle } from "react-icons/io";
import Link from "next/link"
import { FaHome } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { RiArticleFill } from "react-icons/ri";
import React from "react"
import { cn } from "../lib/utils";
//import { Icons } from "@/components/icons"


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const MenuNavigation = () => {

    return (
        <div className="flex-1 flex justify-center items-center text-black">
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <div className="flex justify-center items-center">
                                    <FaHome className="text-2xl mr-1 " color="rgb(177,86,130)" /><span>Início</span>
                                </div>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        {/* <Link href="/forum" legacyBehavior passHref> */}
                        {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <div className="flex justify-center items-center">
                                    <ImNewspaper className="text-2xl mr-1 " color="#41B5D3" /><span>Notícias</span>
                                </div>
                            </NavigationMenuLink> */}
                        <NavigationMenuTrigger><ImNewspaper className="text-2xl mr-1 " color="#41B5D3" /><span>Notícias</span></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/noticias/polemicas"
                                        >
                                            <img src="/images/Polemicas.jpg" alt="Imagem de pessoas conversando, sobre polêmicas gospel" className="rounded" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Polêmicas
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Questões controversas e debates no mundo gospel atual.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/noticias/famosos" title="Famosos">
                                    Atualizações sobre celebridades e figuras influentes no meio gospel.
                                </ListItem>
                                <ListItem href="/noticias/musicasgospel" title="Músicas Gospel">
                                    Novidades e lançamentos da música gospel nacional e internacional.
                                </ListItem>
                                <ListItem href="/noticias/politica" title="Política">
                                    Acontecimentos políticos relevantes para a comunidade cristã.
                                </ListItem>
                                <ListItem href="/noticias/eventos" title="Eventos">
                                    Cobertura de eventos gospel importantes e inspiradores.
                                </ListItem>
                                <ListItem href="/noticias/atualidades" title="Atualidades">
                                    Notícias recentes que impactam o mundo cristão.
                                </ListItem>
                            </ul>

                        </NavigationMenuContent>
                        {/* </Link> */}
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger><RiArticleFill className="text-2xl mr-1" color="#48BC6A" /><span>Artigos</span></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/artigos/teologiaedoutrina"
                                        >
                                            {/* <Icons.logo className="h-6 w-6" /> */}
                                            <img src="/images/teologiaDoutrina.jpg" alt="Pessoa estudando a Bíblia" className="rounded" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Teologia e Doutrina
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Explorações profundas sobre a fé e doutrinas cristãs.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/artigos/vidacrista" title="Vida Cristã">
                                    Reflexões e práticas para viver a fé no cotidiano diário.
                                </ListItem>
                                <ListItem href="/artigos/familiaerelacionamentos" title="Família e Relacionamentos">
                                    Conselhos e orientações para fortalecer laços familiares.
                                </ListItem>
                                <ListItem href="/artigos/espiritualidadeecrescimentopessoal" title="Espiritualidade e Crescimento Pessoal">
                                    Dicas para desenvolver e fortalecer sua vida espiritual.
                                </ListItem>
                                <ListItem href="/artigos/historiadasigrejas" title="História das Igrejas">
                                    Relatos sobre a evolução e impacto das igrejas cristãs.
                                </ListItem>
                                <ListItem href="/artigos/culturaeentretenimento" title="Cultura e Entretenimento">
                                    Análises e recomendações sobre a cultura gospel contemporânea.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger><IoIosInformationCircle className="text-2xl mr-1" color="#f97316" /><span>Sobre</span></NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {/* {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))} */}
                                <ListItem href="/sobre/nossahistoria" title="Nossa História">
                                    Toda história e trajetória do site Opinião Gospel.
                                </ListItem>
                                <ListItem href="/sobre/equipe" title="Equipe">
                                    Conheça as pessoas que fazem nosso trabalho acontecer.
                                </ListItem>
                                <ListItem href="/sobre/missaoevisao" title="Missão e Visão">
                                    Nossos objetivos e aspirações para o futuro cristão.
                                </ListItem>
                                <ListItem href="/sobre/termosdeservico" title="Termos de Serviço">
                                    Regras e condições para uso do nosso site.
                                </ListItem>
                                <ListItem href="/sobre/politicadeprivacidade" title="Política de Privacidade">
                                    Como protegemos e utilizamos suas informações pessoais.
                                </ListItem>
                                <ListItem href="/sobre/contato" title="Contato">
                                    Fale conosco para dúvidas, sugestões ou parcerias.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
export default MenuNavigation