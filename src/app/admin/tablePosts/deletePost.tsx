import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../../components/ui/alert-dialog"
import { Button } from "../../../components/ui/button"
import { ToastAction } from "../../../components/ui/toast";
import { toast } from "../../../components/ui/use-toast";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa"

export function DeletePost({ id }: any) {
    const router = typeof window !== 'undefined' ? useRouter() : null;

    const handleDelete = async () => {
        // Lógica para deletar o post
        //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
        const res = await fetch(`https://jsonplaceholder.typicode.com`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            alert('Falha ao deletar post');
        } else {
            //alert('Post deletado com sucesso');
            if (router) {
                //router.refresh();
                router.push('/admin');
                toast({
                    variant: "default",
                    title: "Sucesso",
                    description: "Post deletado com sucesso",
                    action: <ToastAction altText="Try again">Fechar</ToastAction>,
                    className: "border border-green-500"
                });
            }
        }
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <FaTrash className="cursor-pointer text-red-500" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Tem certeza que deseja excluir?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Essa ação é irreversível, o post vai ser excluido permanentemente.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Excluir</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
