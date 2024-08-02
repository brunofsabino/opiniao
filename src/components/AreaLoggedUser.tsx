import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import React, { useContext, useEffect } from "react";
import { ToastAction } from "./ui/toast";
import { cn } from "../lib/utils";
import { useToast } from "./ui/use-toast";
import { ThemeContext } from "../context/MyContext";


const AreaLoggedUser = ({ user }: any) => {
    const { toast } = useToast();
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    const { logout } = context

    const logoutUser = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: 'GET',
            });

            if (response.ok) {
                //logout(); // Atualize o estado do contexto para deslogar o usuário no frontend
                logout()
                toast({
                    variant: "default",
                    title: "Sucesso",
                    description: "Conta deslogada com sucesso!",
                    action: <ToastAction altText="Try again">Fechar</ToastAction>,
                    className: "border border-green-500"
                });
            } else {
                console.error('Failed to log out');
            }
        } catch (error) {
            console.error('An error occurred while logging out:', error);
        }
    }
    return (
        <NavigationMenu >

            <NavigationMenuList>
                <NavigationMenuItem className="">
                    <NavigationMenuTrigger>
                        <Avatar className="flex items-center justify-center p-1">
                            <AvatarImage src={user.name ? `/images/${user.avatar}` : `/images/persona.png`} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute mt-2 w-[300px] bg-white shadow-lg ">

                        <ul className="flex flex-col  p-4 md:w-[150px] lg:w-[150px] lg:grid-cols-[.75fr_1fr] gap-3">


                            <ListItem href="/docs" title="Configurações">
                            </ListItem>
                            <ListItem onClick={logoutUser} title="Sair">

                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
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
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground pointer",
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
export default AreaLoggedUser