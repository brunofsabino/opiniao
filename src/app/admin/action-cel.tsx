
"use client"
import { useRouter } from 'next/navigation';
import { FaEdit, FaTrash } from 'react-icons/fa';
import EditPost from './post/edit/[id]/page';
import { useState } from 'react';
import { ModalEdit } from './modalEdit';
import { DeletePost } from './tablePosts/deletePost';


interface ActionCellProps {
    id: string;
}

const ActionCell: React.FC<ActionCellProps> = ({ id }) => {
    const [showEdit, setShowEdit] = useState(false)
    const router = typeof window !== 'undefined' ? useRouter() : null;

    const handleEdit = () => {
        // Navegar para a página de edição com o ID do post
        if (router) {
            //router.push(`/admin/post/edit/${id}`);
            setShowEdit(true)
        }
    };

    const handleDelete = async () => {
        // Lógica para deletar o post
        //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'DELETE',
        });
        if (!res.ok) {
            alert('Falha ao deletar post');
        } else {
            alert('Post deletado com sucesso');
            if (router) {
                router.refresh();
            }
        }
    };
    {/* <EditPost id={id} /> */ }
    return (
        <div className="flex space-x-2">
            <ModalEdit id={id} />
            {/* <FaTrash onClick={handleDelete} className="cursor-pointer text-red-500" /> */}
            <DeletePost id={id} />
            {/* {showEdit && (
                
            )} */}
        </div>
    );
};

export default ActionCell;


