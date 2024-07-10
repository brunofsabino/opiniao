// "use client"

// import { useRouter } from 'next/navigation';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// interface ActionCellProps {
//     id: string;
// }

// const ActionCell: React.FC<ActionCellProps> = ({ id }) => {
//     const router = typeof window !== 'undefined' ? useRouter() : null;

//     const handleEdit = () => {
//         // Navegar para a página de edição com o ID do post
//         console.log(id)
//         router?.push(`/admin/post/edit/${id}`);
//     };

//     const handleDelete = async () => {
//         // Lógica para deletar o post
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
//             //const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//             method: 'DELETE',
//         });
//         if (!res.ok) {
//             alert('Falha ao deletar post');
//         } else {
//             alert('Post deletado com sucesso');
//             router?.refresh();
//         }
//     };

//     return (
//         <div className="flex space-x-2">
//             <FaEdit onClick={handleEdit} className="cursor-pointer text-blue-500" />
//             <FaTrash onClick={handleDelete} className="cursor-pointer text-red-500" />
//         </div>
//     );
// };

// export default ActionCell;
"use client"
import { useRouter } from 'next/navigation';
import { FaEdit, FaTrash } from 'react-icons/fa';
import EditPost from './post/edit/[id]/page';
import { useState } from 'react';
import { ModalEdit } from './modalEdit';


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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
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
            <FaTrash onClick={handleDelete} className="cursor-pointer text-red-500" />
            {/* {showEdit && (
                
            )} */}
        </div>
    );
};

export default ActionCell;


