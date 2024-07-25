
"use client"
import Logo from "./Logo"
import MenuNavigation from "./MenuNavigation"
import { ModalLogin } from "../modules/auth/components/ModalLogin"
import { Button } from "./ui/button"
import { useContext, useEffect, useState } from "react"
import { cookies } from "next/headers"
import AreaLoggedUser from "./AreaLoggedUser"
import { ThemeContext } from "../context/MyContext"
import { SheetMenuMobile } from "./SheetMenuMobile"
import { CiSearch } from "react-icons/ci";
import { Input } from "./ui/input"
import SearchInput from "./SearchInput"


const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const { isAuthenticated, user } = useContext(ThemeContext);

    return (
        <header className="mx-auto p-3 flex bg-white border-b border-b-1.5-borderCustom">
            <div className="container flex items-center justify-between">
                <div className="hidden lg:flex">
                    <Logo />
                </div>
                <div className="hidden lg:flex">
                    <MenuNavigation />
                    {/* <div>
                        <Input
                            placeholder="Digite sua busca"

                        >

                        </Input>
                        <CiSearch />

                    </div> */}
                    <SearchInput />
                </div>
                <div className="lg:hidden w-[60%] flex justify-between items-center cursor-pointer">
                    <SheetMenuMobile />
                    <Logo />
                </div>
                {isAuthenticated ? <AreaLoggedUser user={user} /> : <ModalLogin open={showModal} setOpen={setShowModal} />}
            </div>
        </header>
    )
}

export default Header