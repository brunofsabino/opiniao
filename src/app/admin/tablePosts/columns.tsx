// "use client"

// import { ColumnDef } from "@tanstack/react-table"
// import ActionCell from "../action-cel"

// // This type is used to define the shape of our data.
// // You can use a Zod schema here if you want.
// export type Payment = {
//     id: string
//     amount: number
//     status: "pending" | "processing" | "success" | "failed"
//     email: string
// }

// export const columns: ColumnDef<Payment>[] = [
//     {
//         accessorKey: "title",
//         header: "Title",
//     },
//     {
//         accessorKey: "mainNewsShow",
//         header: "Main News",
//     },
//     {
//         accessorKey: "slideShow",
//         header: "Slide Show",
//     },
//     {
//         accessorKey: "newsShow",
//         header: "News Show",
//     },
//     {
//         accessorKey: "date",
//         header: "Data",
//     },
//     {
//         accessorKey: "actions",
//         header: "Ações",
//     },
//     {
//         accessorKey: "actions",
//         header: "Ações",
//         cell: ({ row }) => <ActionCell id={row.original.id} />,
//     },
// ]
"use client"

import { ColumnDef } from "@tanstack/react-table"
import ActionCell from "../action-cel"

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
        accessorKey: "mainNewsShow",
        header: "Main News",
    },
    {
        accessorKey: "slideShow",
        header: "Slide Show",
    },
    {
        accessorKey: "newsShow",
        header: "News Show",
    },
    {
        accessorKey: "date",
        header: "Data",
    },
    {
        accessorKey: "actions",
        header: "Ações",
        cell: ({ row }) => <ActionCell id={row.original.id} />,
    },
]
