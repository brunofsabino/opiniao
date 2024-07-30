import { useContext, useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button";
import { Input } from "./ui/input"
import { ThemeContext, ThemeContextProps } from '../context/MyContext';
import { ModalLogin } from '../modules/auth/components/ModalLogin';
import { CommentInPost, User } from '@prisma/client';

interface CommentInProps {
    id: string; // Defina o tipo correto para a prop id
}

const CommentIn: React.FC<CommentInProps> = ({ id }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<CommentInPost[]>([]);
    const [showModal, setShowModal] = useState(false);
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const userId = 'some-user-id'; // substitua pelo ID do usuário atual
    const postId = id; // ID do post ou artigo

    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    const { isAuthenticated, user } = context as ThemeContextProps

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch(`/api/commentAllArticle/${postId}`)
            const comments = await response.json()
            if (response.ok) {
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

        if (user === null) {
            // Trata o caso onde user é null
            console.error('User is not authenticated');
            return;
        }
        const formData = new FormData();
        formData.append('post_id', postId);
        formData.append('user_id', user.id);
        formData.append('nameUserInComment', user.name); // substitua pelo nome do usuário atual
        formData.append('imgUserInComment', user.avatar); // substitua pela URL do avatar do usuário atual
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
    return (
        // <div className=' w-[100%] flex items-center justify-center'>
        //     <div className="border border-b-1.5-borderCustom rounded-lg mt-5 mb-6 bg-white w-[100%]">
        //         <p className="p-6 border-b border-b-1.5-borderCustom ">Queremos saber sua opinião. Deixe seu comentário!</p>
        //         <div className='p-6 flex border-b border-b-1.5-borderCustom mb-6 justify-center items-center'>
        //             <Avatar className="mr-2">
        //                 <Avatar className="flex items-center justify-center p-1">
        //                     <AvatarImage src={user.user ? `/images/${user.user.avatar}` : `/images/persona.png`} className=" " />
        //                     <AvatarFallback>CN</AvatarFallback>
        //                 </Avatar>
        //             </Avatar>
        //             <Input
        //                 type="text"
        //                 className="mr-2"
        //                 value={comment}
        //                 placeholder='Digite seu comentário'
        //                 onChange={(e) => setComment(e.target.value)}
        //             />
        //             <Button onClick={handleSubmit}>Enviar</Button>
        //         </div>
        //         <div className="p-6">
        //             {comments.map((c) => (
        //                 <div key={c.id} className="mb-5 bg-[#e9eaee] rounded-md p-2">
        //                     <div className='flex justify-between'>
        //                         <div className='flex items-center'>
        //                             <Avatar className="mr-2">
        //                                 <AvatarImage src={`/images/${c.imgUserInComment}`} />
        //                                 <AvatarFallback>{c.nameUserInComment}</AvatarFallback>
        //                             </Avatar>
        //                             <p className='mr-2'>{c.nameUserInComment}</p>
        //                             <p>{new Date(c.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', })}</p>
        //                         </div>
        //                         <span className='mr-2 cursor-pointer'>...</span>
        //                     </div>
        //                     <div className='mt-1'>
        //                         <p>{c.comment}</p>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        //     {showModal && <ModalLogin open={showModal} setOpen={setShowModal} />}
        // </div>
        <div className=' w-[100%] flex items-center justify-center'>
            <div className="border border-b-1.5-borderCustom rounded-lg mt-5 mb-6 bg-white w-[100%]">
                <p className="p-6 border-b border-b-1.5-borderCustom ">Queremos saber sua opinião. Deixe seu comentário!</p>
                <div className='p-6 grid grid-cols-1  gap-4 border-b border-b-1.5 borderCustom mb-6 justify-center items-center'>
                    <div className="flex justify-center  items-center ">
                        <Avatar className="mr-2">
                            <Avatar className="flex items-center justify-center p-1">
                                <AvatarImage src={user ? `/images/${user.avatar}` : `/images/persona.png`} className=" " />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Avatar>
                    </div>
                    {/* <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-b-1.5 borderCustom mb-6 justify-center items-center'>
                    <div className="flex justify-center md:justify-start items-center md:col-span-1">
                        <Avatar className="mr-2">
                            <Avatar className="flex items-center justify-center p-1">
                                <AvatarImage src={user.user ? `/images/${user.user.avatar}` : `/images/persona.png`} className=" " />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Avatar>
                    </div> */}

                    {/* <div className="flex flex-col flex-1 md:flex-row items-center md:col-span-2">
                        <Input
                            type="text"
                            className="mr-2 w-full md:w-auto"
                            value={comment}
                            placeholder='Digite seu comentário'
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button className="mt-4 md:mt-0" onClick={handleSubmit}>Enviar</Button>
                    </div> */}
                    <div className="flex flex-col  items-center md:flex-row">
                        {/* md:flex-row  md:col-span-2 md:justify-start md:col-span-1*/}
                        <Input
                            type="text"
                            className="mr-2 w-full "
                            value={comment}
                            placeholder='Digite seu comentário'
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Button className="mt-4 md:mt-0" onClick={handleSubmit}>Enviar</Button>
                    </div>
                </div>
                <div className="p-6">
                    {comments.map((c) => (
                        <div key={c.id} className="mb-5 bg-[#e9eaee] rounded-md p-2">
                            <div className='flex justify-between'>
                                <div className='flex items-center text-[10px] md:text-sm'>
                                    <Avatar className="mr-2">
                                        <AvatarImage src={`/images/${c.imgUserInComment}`} />
                                        <AvatarFallback>{c.nameUserInComment}</AvatarFallback>
                                    </Avatar>
                                    <p className='mr-2'>{c.nameUserInComment}</p>
                                    <p>{new Date(c.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', })}</p>
                                </div>
                                <span className='mr-2 cursor-pointer'>...</span>
                            </div>
                            <div className='mt-1 text-[12px] md:text-sm'>
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