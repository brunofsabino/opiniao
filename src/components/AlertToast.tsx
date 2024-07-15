"use client"

import { useEffect } from "react";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";

type Props = {
    variant: "destructive" | "default",
    title: string,
    description: string
}

export function AlertToast({ variant, title, description }: Props) {
    const { toast } = useToast();

    toast({
        variant: variant, //"destructive",
        title: title,// "Uh oh! Something went wrong.",
        description: description, //"There was a problem with your request.",
        action: <ToastAction altText="Try again">Fechar</ToastAction>,
    });

    return null;
}