
"use client"

import { ColumnDef } from "@tanstack/react-table"
import ActionCellArticle from "./aciton-article"

// Este tipo é usado para definir o formato dos nossos dados.
// Você pode usar um schema Zod aqui se quiser.
export type Payment = {
    id: string
    title: string
    mainNewsShow: boolean
    slideShow: boolean
    newsShow: boolean
    date: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "articleShow",
        header: "show Article",
    },
    // {
    //     accessorKey: "slideShow",
    //     header: "Slide Show",
    // },
    // {
    //     accessorKey: "newsShow",
    //     header: "News Show",
    // },
    {
        accessorKey: "date",
        header: "Data",
    },
    {
        accessorKey: "actions",
        header: "Ações",
        cell: ({ row }) => <ActionCellArticle id={row.original.id} />,
    },
]
