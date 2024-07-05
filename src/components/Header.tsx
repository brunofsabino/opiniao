
"use client"
import Logo from "./Logo"
import MenuNavigation from "./MenuNavigation"
import { ModalLogin } from "../modules/auth/components/ModalLogin"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { cookies } from "next/headers"
import AreaLoggedUser from "./AreaLoggedUser"

const Header = ({ user }: any) => {
    //console.log("user:" + user.user.name)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //console.log(user)

    useEffect(() => {

        if (user) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [])
    return (
        <header className=" mx-auto p-3 flex bg-white border-b border-b-1.5-borderCustom">
            <div className="container flex items-center" >
                <Logo />
                <MenuNavigation />
                {isAuthenticated ? <AreaLoggedUser setIsAuthenticated={setIsAuthenticated} /> : <ModalLogin setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />}

            </div>
        </header>
    )
}
export default Header