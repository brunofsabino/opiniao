import MenuNavigation from "./MenuNavigation"
import { Button } from "./button"

const Header = () => {
    return (
        <header className="flex justify-center items-center p-4">
            <MenuNavigation/>
            <Button variant="default">Entrar</Button>
        </header>
    )
}
export default Header