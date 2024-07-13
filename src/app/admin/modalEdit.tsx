
//"use client"

import { useState, useEffect } from 'react';
import { Button } from "../../components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../components/ui/dialog';
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { FaEdit } from "react-icons/fa"
import EditPost from "./post/edit/[id]/page"
import { UUID } from 'crypto';

export function ModalEdit({ id }: any) {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <FaEdit className="cursor-pointer text-blue-500" onClick={() => { setOpen(true) }} />
            </DialogTrigger>
            <DialogContent className='w-[80%]'>
                <DialogHeader >
                    <DialogTitle >Editar post</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <EditPost id={id} setOpen={setOpen} />
                <DialogFooter>
                    {/* <Button type="submit">Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
