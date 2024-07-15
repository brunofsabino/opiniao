import { useContext, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button";
import { Input } from "./ui/input"
import { ThemeContext } from '../context/MyContext';

const CommentIn = ({ id }: any) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    //const userId = 'some-user-id'; // substitua pelo ID do usuário atual
    const postId = id; // ID do post ou artigo
    const { user } = useContext(ThemeContext);

    const handleSubmit = async () => {
        if (!comment) return;
        const formData = new FormData();
        formData.append('post_id', postId);
        formData.append('user_id', user.user.sub);
        formData.append('nameUserInComment', user.user.name); // substitua pelo nome do usuário atual
        formData.append('imgUserInComment', user.user.img); // substitua pela URL do avatar do usuário atual
        formData.append('comment', comment);
        formData.append('articleId', ''); // ou id do artigo se for um comentário de artigo

        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                body: formData,
            });

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
    //     const formDataToSend = new FormData();
    //     console.log(comment)
    //     const commentData = {
    //         post_id: postId,
    //         user_id: user.user.sub,
    //         nameUserInComment: user.user.name, // substitua pelo nome do usuário atual
    //         imgUserInComment: user.user.img, // substitua pela URL do avatar do usuário atual
    //         comment: comment,
    //         articleId: null, // ou id do artigo se for um comentário de artigo
    //     };

    //     try {
    //         const response = await fetch('/api/comments', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(commentData),
    //         });

    //         if (response.ok) {
    //             const newComment = await response.json();
    //             setComments([...comments, newComment]);
    //             setComment('');
    //         } else {
    //             console.error('Failed to submit comment');
    //         }
    //     } catch (error) {
    //         console.error('An error occurred while submitting the comment:', error);
    //     }
    // };

    return (
        <div className="border border-b-1.5-borderCustom rounded-lg mt-5 mb-8 bg-white w-[60%]">
            <p className="p-6 border-b border-b-1.5-borderCustom ">Comente!</p>
            <div className='p-6 flex border-b border-b-1.5-borderCustom mb-10 justify-center items-center'>
                <Avatar className="mr-2">
                    <Avatar className="flex items-center justify-center p-1">
                        <AvatarImage src={`/images/${user.user.img}`} className=" " />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Avatar>
                <Input
                    type="text"
                    className="mr-2"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button onClick={handleSubmit}>Enviar</Button>
            </div>
            <div className="p-6">
                {comments.map((c) => (
                    <div key={c.id} className="mb-4">
                        <Avatar className="mr-2">
                            <AvatarImage src={c.imgUserInComment} />
                            <AvatarFallback>{c.nameUserInComment[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p>{c.nameUserInComment}</p>
                            <p>{c.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CommentIn