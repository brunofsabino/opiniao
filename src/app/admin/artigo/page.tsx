// "use client"

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';

// const CreatePost = () => {
//     const router = useRouter();
//     const [formData, setFormData] = useState({
//         title: '',
//         subTitle: '',
//         contentPost: '',
//         contentPreComment: '',
//         summaryParagraph: '',
//         img: '',
//         video: '',
//         instagram: '',
//         mainNewsShow: false,
//         slideShow: false,
//         newsShow: false,
//     });
//     const [imageFile, setImageFile] = useState<File | null>(null);
//     // const [videoFile, setVideoFile] = useState<File | null>(null);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value, type, checked }: any = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, files } = e.target;
//         if (name === 'img' && files && files[0]) {
//             setImageFile(files[0]);
//         }
//         // if (name === 'video' && files && files[0]) {
//         //     setVideoFile(files[0]);
//         // }
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();
//         formDataToSend.append('title', formData.title);
//         formDataToSend.append('subTitle', formData.subTitle);
//         formDataToSend.append('contentPost', formData.contentPost);
//         formDataToSend.append('video', formData.video);
//         formDataToSend.append('instagram', formData.instagram);
//         formDataToSend.append('contentPreComment', formData.contentPreComment);
//         formDataToSend.append('summaryParagraph', formData.summaryParagraph);
//         formDataToSend.append('mainNewsShow', formData.mainNewsShow.toString());
//         formDataToSend.append('slideShow', formData.slideShow.toString());
//         formDataToSend.append('newsShow', formData.newsShow.toString());

//         if (imageFile) {
//             formDataToSend.append('img', imageFile);
//         }
//         // if (videoFile) {
//         //     formDataToSend.append('video', videoFile);
//         // }
//         //onsole.log(formDataToSend.title)

//         const response = await fetch('/api/posts', {
//             method: 'POST',
//             body: formDataToSend,
//         });
//         console.log('response')
//         console.log(response)
//         if (response.ok) {
//             router.push('/admin');
//         } else {
//             console.error('Failed to create post');
//         }
//     };
//     const backAdmHome = () => {
//         router.push('/admin')
//     }
//     return (
//         <div className="container">
//             <Button onClick={backAdmHome}>Voltar</Button>
//             <div className='flex justify-center p-6'>
//                 <h1 className='text-3xl font-extrabold'>Criar novo Artigo</h1>

//             </div>
//             <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-col  w-[80%] h-[800px]'>
//                 <div className='m-4'>
//                     <label htmlFor="titlea">Titulo:</label>
//                     <input
//                         id="titlea"
//                         type="text"
//                         name="title"
//                         placeholder="Title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         required
//                         className='w-[80%]'
//                     />
//                 </div>

//                 <input
//                     type="text"
//                     name="subTitle"
//                     placeholder="Subtitle"
//                     value={formData.subTitle}
//                     onChange={handleChange}
//                     required
//                 />
//                 <textarea
//                     name="contentPost"
//                     placeholder="Content Post"
//                     value={formData.contentPost}
//                     onChange={handleChange}
//                     required
//                 />
//                 <textarea
//                     name="contentPreComment"
//                     placeholder="Content Pre-Comment"
//                     value={formData.contentPreComment}
//                     onChange={handleChange}
//                     required
//                 />
//                 <textarea
//                     name="summaryParagraph"
//                     placeholder="Summary Paragraph"
//                     value={formData.summaryParagraph}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="file"
//                     name="img"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                 />
//                 <input
//                     type="text"
//                     name="video"
//                     value={formData.video}
//                     placeholder="URL do video"
//                     //accept="video/*"
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="instagram"
//                     value={formData.instagram}
//                     placeholder="URL do instagram"
//                     //accept="video/*"
//                     onChange={handleChange}
//                 />
//                 <label>
//                     Main News Show:
//                     <input
//                         type="checkbox"
//                         name="mainNewsShow"
//                         checked={formData.mainNewsShow}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Slide Show:
//                     <input
//                         type="checkbox"
//                         name="slideShow"
//                         checked={formData.slideShow}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     News Show:
//                     <input
//                         type="checkbox"
//                         name="newsShow"
//                         checked={formData.newsShow}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <Button type="submit">Create Post</Button>
//             </form>
//         </div>
//     );
// };

// export default CreatePost;

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const CreateArticle = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        subTitle: '',
        contentArticle: '',
        title2: '',
        contentTitle2: '',
        title3: '',
        contentTitle3: '',
        title4: '',
        contentTitle4: '',
        title5: '',
        contentTitle5: '',
        title6: '',
        contentTitle6: '',
        title7: '',
        contentTitle7: '',
        title8: '',
        contentTitle8: '',
        title9: '',
        contentTitle9: '',
        title10: '',
        contentTitle10: '',
        contentPreComment: '',
        summaryParagraph: '',
        img: '',
        legendImg: '',
        authorArticle: '',
        video: '',
        instagram: '',
        articleShow: false,
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked }: any = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (name === 'img' && files && files[0]) {
            setImageFile(files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('subTitle', formData.subTitle);
        formDataToSend.append('contentArticle', formData.contentArticle);
        formDataToSend.append('title2', formData.title2);
        formDataToSend.append('contentTitle2', formData.contentTitle2);
        formDataToSend.append('title3', formData.title3);
        formDataToSend.append('contentTitle3', formData.contentTitle3);
        formDataToSend.append('title4', formData.title4);
        formDataToSend.append('contentTitle4', formData.contentTitle4);
        formDataToSend.append('title5', formData.title5);
        formDataToSend.append('contentTitle5', formData.contentTitle5);
        formDataToSend.append('title6', formData.title6);
        formDataToSend.append('contentTitle6', formData.contentTitle6);
        formDataToSend.append('title7', formData.title7);
        formDataToSend.append('contentTitle7', formData.contentTitle7);
        formDataToSend.append('title8', formData.title8);
        formDataToSend.append('contentTitle8', formData.contentTitle8);
        formDataToSend.append('title9', formData.title9);
        formDataToSend.append('contentTitle9', formData.contentTitle9);
        formDataToSend.append('title10', formData.title10);
        formDataToSend.append('contentTitle10', formData.contentTitle10);
        formDataToSend.append('contentPreComment', formData.contentPreComment);
        formDataToSend.append('summaryParagraph', formData.summaryParagraph);
        formDataToSend.append('legendImg', formData.legendImg);
        formDataToSend.append('authorArticle', formData.authorArticle);
        formDataToSend.append('video', formData.video);
        formDataToSend.append('instagram', formData.instagram);
        formDataToSend.append('articleShow', formData.articleShow.toString());

        if (imageFile) {
            formDataToSend.append('img', imageFile);
        }

        const response = await fetch('/api/articles', {
            method: 'POST',
            body: formDataToSend,
        });

        if (response.ok) {
            router.push('/admin');
        } else {
            console.error('Failed to create article');
        }
    };

    const backAdmHome = () => {
        router.push('/admin');
    };

    return (
        <div className="container">
            <Button onClick={backAdmHome}>Voltar</Button>
            <div className='flex justify-center p-6'>
                <h1 className='text-3xl font-extrabold'>Criar novo artigo</h1>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-col w-[80%] '>
                <div className='m-4'>
                    <label htmlFor="title">Título:</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Título"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='w-[80%]'
                    />
                </div>
                <input
                    type="text"
                    name="subTitle"
                    placeholder="Subtítulo"
                    value={formData.subTitle}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="contentArticle"
                    placeholder="Conteúdo do Artigo"
                    value={formData.contentArticle}
                    onChange={handleChange}
                    required
                />
                {[...Array(10)].map((_, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name={`title${index + 2}`}
                            placeholder={`Título ${index + 2}`}
                            value={formData[`title${index + 2}` as keyof typeof formData]}
                            onChange={handleChange}
                        />
                        <textarea
                            name={`contentTitle${index + 2}`}
                            placeholder={`Conteúdo Título ${index + 2}`}
                            value={formData[`contentTitle${index + 2}` as keyof typeof formData]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <textarea
                    name="contentPreComment"
                    placeholder="Comentário Prévio"
                    value={formData.contentPreComment}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="summaryParagraph"
                    placeholder="Parágrafo Resumo"
                    value={formData.summaryParagraph}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="img"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    name="legendImg"
                    placeholder="Legenda da Imagem"
                    value={formData.legendImg}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="authorArticle"
                    placeholder="Autor do Artigo"
                    value={formData.authorArticle}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="video"
                    placeholder="URL do Vídeo"
                    value={formData.video}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="instagram"
                    placeholder="URL do Instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                />
                <label>
                    Mostrar Artigo:
                    <input
                        type="checkbox"
                        name="articleShow"
                        checked={formData.articleShow}
                        onChange={handleChange}
                    />
                </label>
                <Button type="submit">Criar Artigo</Button>
            </form>
        </div>
    );
};

export default CreateArticle;

