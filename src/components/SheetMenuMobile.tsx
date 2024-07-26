import MenuNavigationMobile from "./MenuNavigationMobile"
import SearchInput from "./SearchInput"
import SearchInputMobile from "./SearchInputMobile"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";

export function SheetMenuMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <GiHamburgerMenu size={24} />
            </SheetTrigger>
            <SheetContent className="overflow-auto">
                <SheetHeader>
                </SheetHeader>

                <div className="mt-5 mb-5">

                    <SearchInputMobile />
                </div>
                <div className="w-full flex justify-center">
                    <MenuNavigationMobile />
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        {/* <Button type="submit">Save changes</Button> */}
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}