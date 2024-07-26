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
//   import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"

export function BreadcrumbDemo({ title, subTitle, postOrArticle }: any) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator /> */}
                <BreadcrumbItem>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    {postOrArticle.post === true && (
                        <BreadcrumbLink href="/noticias">Notícias</BreadcrumbLink>
                    )}
                    {postOrArticle.article === true && (
                        <BreadcrumbLink href="/artigos">Artigos</BreadcrumbLink>
                    )}
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    {postOrArticle.post === true && (
                        <BreadcrumbLink href={`/noticias/${subTitle.toLowerCase()}`}>{subTitle}</BreadcrumbLink>
                    )}
                    {postOrArticle.article === true && (
                        <BreadcrumbLink href={`/artigos/${subTitle.toLowerCase()}`}>{subTitle}</BreadcrumbLink>
                    )}
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
