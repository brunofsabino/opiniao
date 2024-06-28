import Logo from "./Logo"
import LogoWhite from "./LogoWhite"
import MenuFooter from "./MenuFooter"
import MenuNavigation from "./MenuNavigation"
import { Button } from "./ui/button"

const Footer = () => {
    return (
        <header className=" mx-auto p-3 flex bg-[#1d1a1a] border-t border-t-1.5-borderCustom">
            <div className="container flex items-center" >
                <LogoWhite />
                <MenuFooter />
                {/* <Button variant="default">Entrar</Button> */}
            </div>
        </header>
    )
}
export default Footer