import { useContext, useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button";
import { Input } from "./ui/input"
import { ThemeContext } from '../context/MyContext';
import { ModalLogin } from '../modules/auth/components/ModalLogin';
import { CommentInPost, User } from '@prisma/client';

const CommentIn = ({ id }: any) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<CommentInPost[]>([]);
    const [showModal, setShowModal] = useState(false);
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const userId = 'some-user-id'; // substitua pelo ID do usuário atual
    const postId = id; // ID do post ou artigo
    const { isAuthenticated, user } = useContext(ThemeContext);

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch(`/api/commentAllArticle/${postId}`)
            const comments = await response.json()
            if (response.ok) {
                console.log(comments)
                setComments([...comments]);
            }
        }
        getComments()
    }, [])

    const handleSubmit = async () => {
        if (!comment) return;
        if (!isAuthenticated) {
            setShowModal(true); // Atualize o estado para mostrar o modal
            return;
        }
        const formData = new FormData();
        formData.append('post_id', postId);
        formData.append('user_id', user.user.id);
        formData.append('nameUserInComment', user.user.name); // substitua pelo nome do usuário atual
        formData.append('imgUserInComment', user.user.avatar); // substitua pela URL do avatar do usuário atual
        formData.append('comment', comment);
        formData.append('articleId', ''); // ou id do artigo se for um comentário de artigo

        try {
            const response = await fetch('/api/commentsInArticle', {
                method: 'POST',
                body: formData,
            });


            if (response.status === 401) { // Verifique o código de status diretamente
                setShowModal(true); // Atualize o estado para mostrar o modal
                return;
            }
            if (response.ok) {
                const newComment = await response.json();
                setComments([...comments, newComment]);
                setComment('');
            } else {
                console.error('Failed to submit comment');
            }

        } catch (error) {
            console.error('An error occurred while submitting the comment:', error);
        }
    };
    console.log(user)
    return (
        <div className=' w-[100%] flex items-center justify-center'>
            <div className="border border-b-1.5-borderCustom rounded-lg mt-5 mb-6 bg-white w-[100%]">
                <p className="p-6 border-b border-b-1.5-borderCustom ">Queremos saber sua opinião. Deixe seu comentário!</p>
                <div className='p-6 flex border-b border-b-1.5-borderCustom mb-6 justify-center items-center'>
                    <Avatar className="mr-2">
                        <Avatar className="flex items-center justify-center p-1">
                            <AvatarImage src={user.user ? `/images/${user.user.avatar}` : `/images/persona.png`} className=" " />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Avatar>
                    <Input
                        type="text"
                        className="mr-2"
                        value={comment}
                        placeholder='Digite seu comentário'
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button onClick={handleSubmit}>Enviar</Button>
                </div>
                <div className="p-6">
                    {comments.map((c) => (
                        <div key={c.id} className="mb-5 bg-[#e9eaee] rounded-md p-2">
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <Avatar className="mr-2">
                                        <AvatarImage src={`/images/${c.imgUserInComment}`} />
                                        <AvatarFallback>{c.nameUserInComment}</AvatarFallback>
                                    </Avatar>
                                    <p className='mr-2'>{c.nameUserInComment}</p>
                                    <p>{new Date(c.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', })}</p>
                                </div>
                                <span className='mr-2 cursor-pointer'>...</span>
                            </div>
                            <div className='mt-1'>
                                <p>{c.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && <ModalLogin open={showModal} setOpen={setShowModal} />}
        </div>
    )
}
export default CommentIn