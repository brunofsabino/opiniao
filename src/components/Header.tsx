import Logo from "./Logo"
import MenuNavigation from "./MenuNavigation"
import { ModalLogin } from "../modules/auth/components/ModalLogin"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className=" mx-auto p-3 flex bg-white border-b border-b-1.5-borderCustom">
            <div className="container flex items-center" >
                <Logo />
                <MenuNavigation />
                <ModalLogin />
            </div>
        </header>
    )
}
export default Header