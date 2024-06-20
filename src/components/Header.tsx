import Logo from "./Logo"
import MenuNavigation from "./MenuNavigation"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className=" mx-auto p-3 flex bg-white border-b border-b-1.5-borderCustom">
            <div className="container flex items-center" >
                <Logo />
                <MenuNavigation />
                <Button variant="default">Entrar</Button>
            </div>
        </header>
    )
}
export default Header