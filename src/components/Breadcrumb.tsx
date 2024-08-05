import { subtle } from "crypto"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu"
//import { DropdownMenu } from "../../@/components/ui/dropdown-menu"

export function BreadcrumbDemo({ title, subTitle, postOrArticle }: any) {
    const normalizeTitle = (title: string) => {
        return title
            .normalize("NFD") // Normaliza para separar os caracteres especiais
            .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres especiais
            .replace(/[.,;:]/g, '') // Remove vírgulas, dois pontos e ponto e vírgula
            .replace(/ /g, '') // Substitui espaços por hífens
            .toLowerCase(); // Converte para minúsculas
    };
    return (
        <Breadcrumb>
            <BreadcrumbList >
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator /> */}
                <BreadcrumbItem>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1">
                            <BreadcrumbEllipsis className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>
                                {postOrArticle.post === true && (
                                    <BreadcrumbLink href="/noticias">Notícias</BreadcrumbLink>
                                )}
                                {postOrArticle.article === true && (
                                    <BreadcrumbLink href="/artigos">Artigos</BreadcrumbLink>
                                )}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                {postOrArticle.post === true && (
                                    <BreadcrumbLink href={`/noticias/${normalizeTitle(subTitle)}`}>{subTitle}</BreadcrumbLink>
                                )}
                                {postOrArticle.article === true && (
                                    <BreadcrumbLink href={`/artigos/${normalizeTitle(subTitle)}`}>{subTitle}</BreadcrumbLink>
                                )}
                            </DropdownMenuItem>
                            {/*<DropdownMenuItem>GitHub</DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>

                </BreadcrumbItem>
                {/* <BreadcrumbSeparator />
                <BreadcrumbItem>

                </BreadcrumbItem> */}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-[10px] md:text-sm" >{title}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
