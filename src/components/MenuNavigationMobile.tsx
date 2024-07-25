// "use client"
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
//     navigationMenuTriggerStyle
// } from "./ui/navigation-menu"
// import { IoIosInformationCircle } from "react-icons/io";
// import Link from "next/link"
// import { FaHome } from "react-icons/fa";
// import { MdForum } from "react-icons/md";
// import { RiArticleFill } from "react-icons/ri";
// import React from "react"
// import { cn } from "../lib/utils";
// import { Separator } from "@radix-ui/react-separator";



// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: "Alert Dialog",
//         href: "/docs/primitives/alert-dialog",
//         description:
//             "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//         title: "Hover Card",
//         href: "/docs/primitives/hover-card",
//         description:
//             "For sighted users to preview content available behind a link.",
//     },
//     {
//         title: "Progress",
//         href: "/docs/primitives/progress",
//         description:
//             "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//         title: "Scroll-area",
//         href: "/docs/primitives/scroll-area",
//         description: "Visually or semantically separates content.",
//     },
//     {
//         title: "Tabs",
//         href: "/docs/primitives/tabs",
//         description:
//             "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//         title: "Tooltip",
//         href: "/docs/primitives/tooltip",
//         description:
//             "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
// ]

// const MenuNavigationMobile = () => {
//     //flex-1 flex justify-center items-center
//     return (
//         //<div className="w-full">
//         <NavigationMenu orientation="vertical" className="">
//             <NavigationMenuList className="flex items-center justify-center flex-col space-y-2 w-full">
//                 <NavigationMenuItem className=" " >
//                     <Link href="/" legacyBehavior passHref>
//                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                             <div className="flex justify-center items-center">
//                                 <FaHome className="text-2xl mr-1 " color="rgb(177,86,130)" /><span>Início</span>
//                             </div>
//                         </NavigationMenuLink>
//                     </Link>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem className="">
//                     <Link href="/forum" legacyBehavior passHref>
//                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                             <div className="flex justify-center items-center">
//                                 <MdForum className="text-2xl mr-1 " color="#41B5D3" /><span>Fórum</span>
//                             </div>
//                         </NavigationMenuLink>
//                     </Link>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem className="">
//                     <NavigationMenuTrigger><RiArticleFill className="text-2xl mr-1" color="#48BC6A" /><span>Artigos</span></NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                             <li className="row-span-3">
//                                 <NavigationMenuLink asChild>
//                                     <a
//                                         className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                                         href="/"
//                                     >
//                                         {/* <Icons.logo className="h-6 w-6" /> */}
//                                         <div className="mb-2 mt-4 text-lg font-medium">
//                                             shadcn/ui
//                                         </div>
//                                         <p className="text-sm leading-tight text-muted-foreground">
//                                             Beautifully designed components built with Radix UI and
//                                             Tailwind CSS.
//                                         </p>
//                                     </a>
//                                 </NavigationMenuLink>
//                             </li>
//                             <ListItem href="/docs" title="Introduction">
//                                 Re-usable components built using Radix UI and Tailwind CSS.
//                             </ListItem>
//                             <ListItem href="/docs/installation" title="Installation">
//                                 How to install dependencies and structure your app.
//                             </ListItem>
//                             <ListItem href="/docs/primitives/typography" title="Typography">
//                                 Styles for headings, paragraphs, lists...etc
//                             </ListItem>
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem className="">
//                     <NavigationMenuTrigger><IoIosInformationCircle className="text-2xl mr-1" color="#999999" /><span>Sobre</span></NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                             {components.map((component) => (
//                                 <ListItem
//                                     key={component.title}
//                                     title={component.title}
//                                     href={component.href}
//                                 >
//                                     {component.description}
//                                 </ListItem>
//                             ))}
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>

//             </NavigationMenuList>
//         </NavigationMenu>
//         //</div>
//     )
// }
// const ListItem = React.forwardRef<
//     React.ElementRef<"a">,
//     React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//     return (
//         <li>
//             <NavigationMenuLink asChild>
//                 <a
//                     ref={ref}
//                     className={cn(
//                         "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//                         className
//                     )}
//                     {...props}
//                 >
//                     <div className="text-sm font-medium leading-none">{title}</div>
//                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         {children}
//                     </p>
//                 </a>
//             </NavigationMenuLink>
//         </li>
//     )
// })
// ListItem.displayName = "ListItem"
// export default MenuNavigationMobile
"use client"
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuItem,
    navigationMenuTriggerStyle
} from "./ui/navigation-menu2"
import { IoIosInformationCircle } from "react-icons/io";
import Link from "next/link"
import { FaHome } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import React from "react"
import { cn } from "../lib/utils";
import { Separator } from "@radix-ui/react-separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

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

const MenuNavigationMobile = () => {
    return (
        <NavigationMenu orientation="vertical" className="md:w-[300px] sm:w-[100px]">
            <NavigationMenuList className="flex items-center justify-center flex-col space-y-2 md:w-[300px] ">
                <NavigationMenuItem className=" " >
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex justify-center items-center">
                                <FaHome className="text-2xl mr-1 " color="rgb(177,86,130)" /><span>Início</span>
                            </div>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <Separator className="separator w-full my-2" />
                <NavigationMenuItem className="">
                    <Link href="/forum" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <div className="flex justify-center items-center">
                                <MdForum className="text-2xl mr-1 " color="#41B5D3" /><span>Fórum</span>
                            </div>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <Separator className="separator w-full my-2" />
                <NavigationMenuItem className="">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className={navigationMenuTriggerStyle()}>
                                <div className="flex justify-center items-center">
                                    <RiArticleFill className="text-2xl mr-1" color="#48BC6A" /><span>Artigos</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid gap-3 p-4  w-[200px] md:w-[300px] md:grid-cols-2 lg:w-[600px] ">
                                    {/* md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] */}
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Beautifully designed components built with Radix UI and
                                                    Tailwind CSS.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </NavigationMenuItem>
                <Separator className="separator w-full my-2" />
                <NavigationMenuItem className="">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className={navigationMenuTriggerStyle()}>
                                <div className="flex justify-center items-center">
                                    <IoIosInformationCircle className="text-2xl mr-1" color="#999999" /><span>Sobre</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </NavigationMenuItem>
                <Separator className="separator w-full my-2" />
            </NavigationMenuList>
        </NavigationMenu>
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

export default MenuNavigationMobile
