"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

const CreatePost = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        authorPost: '',
        subTitle: '',
        contentPost: '',
        contentPreComment: '',
        summaryParagraph: '',
        img: '',
        legendImg: '',
        video: '',
        instagram: '',
        mainNewsShow: false,
        slideShow: false,
        newsShow: false,
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    // const [videoFile, setVideoFile] = useState<File | null>(null);

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
        // if (name === 'video' && files && files[0]) {
        //     setVideoFile(files[0]);
        // }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('authorPost', formData.authorPost);
        formDataToSend.append('legendImg', formData.legendImg);
        formDataToSend.append('subTitle', formData.subTitle);
        formDataToSend.append('contentPost', formData.contentPost);
        formDataToSend.append('video', formData.video);
        formDataToSend.append('instagram', formData.instagram);
        formDataToSend.append('contentPreComment', formData.contentPreComment);
        formDataToSend.append('summaryParagraph', formData.summaryParagraph);
        formDataToSend.append('mainNewsShow', formData.mainNewsShow.toString());
        formDataToSend.append('slideShow', formData.slideShow.toString());
        formDataToSend.append('newsShow', formData.newsShow.toString());

        if (imageFile) {
            formDataToSend.append('img', imageFile);
        }
        // if (videoFile) {
        //     formDataToSend.append('video', videoFile);
        // }
        //onsole.log(formDataToSend.title)

        const response = await fetch('/api/posts', {
            method: 'POST',
            body: formDataToSend,
        });

        if (response.ok) {
            router.push('/admin');
            toast({
                variant: "default",
                title: "Sucesso",
                description: "Post criado com sucesso",
                action: <ToastAction altText="Try again">Fechar</ToastAction>,
                className: "border border-green-500"
            });
        } else {
            console.error('Failed to create post');
        }
    };
    const backAdmHome = () => {
        router.push('/admin')

    }
    return (
        <div className="container">
            <Button onClick={backAdmHome}>Voltar</Button>
            <div className='flex justify-center p-6'>
                <h1 className='text-3xl font-extrabold'>Criar novo post</h1>

            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-col  w-[100%] mb-8'>
                <div className='border p-5 rounded'>
                    <label htmlFor="title">Titulo:</label>
                    <input
                        id="titlea"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5'
                    />
                </div>
                {/* <input
                    type="text"
                    name="authorPost"
                    placeholder="Autor do Post"
                    value={formData.authorPost}
                    onChange={handleChange}

                />

                <input
                    type="text"
                    name="subTitle"
                    placeholder="Subtitle"
                    value={formData.subTitle}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="contentPost"
                    placeholder="Content Post"
                    value={formData.contentPost}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="contentPreComment"
                    placeholder="Content Pre-Comment"
                    value={formData.contentPreComment}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="summaryParagraph"
                    placeholder="Summary Paragraph"
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
                    name="video"
                    value={formData.video}
                    placeholder="URL do video"
                    //accept="video/*"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    placeholder="URL do instagram"
                    //accept="video/*"
                    onChange={handleChange}
                />
                <label>
                    Main News Show:
                    <input
                        type="checkbox"
                        name="mainNewsShow"
                        checked={formData.mainNewsShow}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Slide Show:
                    <input
                        type="checkbox"
                        name="slideShow"
                        checked={formData.slideShow}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    News Show:
                    <input
                        type="checkbox"
                        name="newsShow"
                        checked={formData.newsShow}
                        onChange={handleChange}
                    />
                </label> */}
                <div className='border p-5 rounded'>
                    <label htmlFor="subTitle">Sub-titulo:</label>
                    <input
                        type="text"
                        name="subTitle"
                        placeholder="Sub-titulo"
                        value={formData.subTitle}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded'>
                    <label htmlFor="authorPost">Autor do Post:</label>
                    <input
                        type="text"
                        name="authorPost"
                        placeholder="Autor do Post"
                        value={formData.authorPost}
                        className='w-[80%] ml-5'
                        onChange={handleChange}
                    />
                </div>
                <div className='border p-5 rounded flex '>
                    <label htmlFor="contentPost">Conteúdo do Post:</label>
                    <textarea
                        name="contentPost"
                        placeholder="Content Post"
                        value={formData.contentPost}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5 h-40'
                    />
                </div>
                <div className='border p-5 rounded flex '>
                    <label htmlFor="contentPreComment">Comentário Final:</label>
                    <textarea
                        name="contentPreComment"
                        placeholder="Content Pre-Comment"
                        value={formData.contentPreComment}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5 h-32'
                    />
                </div>
                <div className='border p-5 rounded flex '>
                    <label htmlFor="summaryParagraph">Parágrafo de resumo:</label>
                    <textarea
                        name="summaryParagraph"
                        placeholder="Summary Paragraph"
                        value={formData.summaryParagraph}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5 h-28'
                    />
                </div>
                <div className='border p-5 rounded flex '>
                    <input
                        type="file"
                        name="img"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <div className='border p-5 rounded flex '>
                    <label htmlFor="legendImg">Legenda da imagem:</label>
                    <input
                        type="text"
                        name="legendImg"
                        placeholder="Legenda da imagem"
                        value={formData.legendImg}
                        onChange={handleChange}
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded flex '>
                    <label htmlFor="video">URL do video:</label>
                    <input
                        type="text"
                        name="video"
                        value={formData.video}
                        placeholder="URL do video"
                        onChange={handleChange}
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded flex '>
                    <label htmlFor="instagram">URL do instagram:</label>
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        placeholder="URL do instagram"
                        onChange={handleChange}
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded flex justify-evenly mb-8'>
                    <label>
                        Main News Show:
                        <input
                            type="checkbox"
                            name="mainNewsShow"
                            checked={formData.mainNewsShow}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Slide Show:
                        <input
                            type="checkbox"
                            name="slideShow"
                            checked={formData.slideShow}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        News Show:
                        <input
                            type="checkbox"
                            name="newsShow"
                            checked={formData.newsShow}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <Button type="submit">Create Post</Button>
            </form>
        </div>
    );
};

export default CreatePost;
