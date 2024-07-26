import MenuNavigationMobile from "./MenuNavigationMobile"
import SearchInput from "./SearchInput"
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
                <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent >
                <SheetHeader>
                    {/* <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription> */}
                </SheetHeader>
                {/* < div className="grid gap-4 py-4">
                   <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div> */}
                <div className="mt-5">

                    <SearchInput />
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