"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '../../../components/ui/use-toast';
import { ToastAction } from '../../../components/ui/toast';
import { Button } from '../../../components/ui/button';

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
            toast({
                variant: "default",
                title: "Sucesso",
                description: "Artigo criado com sucesso",
                action: <ToastAction altText="Try again">Fechar</ToastAction>,
                className: "border border-green-500"
            });
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
            <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-col w-[100%] mb-5'>

                <div className='border p-5 rounded'>
                    <label htmlFor="title">Título:</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded'>
                    <label htmlFor="subTitle">Subtítulo:</label>
                    <input
                        type="text"
                        name="subTitle"
                        placeholder="Subtítulo"
                        value={formData.subTitle}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded'>
                    <label htmlFor="authorArticle">Autor do Artigo:</label>
                    <input
                        type="text"
                        name="authorArticle"
                        placeholder="Autor do Artigo"
                        value={formData.authorArticle}
                        className='w-[80%] ml-5'
                        onChange={handleChange}
                    />
                </div>
                <div className='border p-5 rounded flex'>
                    <label htmlFor="contentArticle">Conteúdo do Artigo:</label>
                    <textarea
                        name="contentArticle"
                        placeholder="Content Article"
                        value={formData.contentArticle}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5 h-40'
                    />
                </div>
                <div className='border p-5 rounded flex'>
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
                <div className='border p-5 rounded flex'>
                    <label htmlFor="summaryParagraph">Parágrafo de Resumo:</label>
                    <textarea
                        name="summaryParagraph"
                        placeholder="Summary Paragraph"
                        value={formData.summaryParagraph}
                        onChange={handleChange}
                        required
                        className='w-[80%] ml-5 h-28'
                    />
                </div>
                <div className='border p-5 rounded flex'>
                    <input
                        type="file"
                        name="img"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <div className='border p-5 rounded flex'>
                    <label htmlFor="legendImg">Legenda da Imagem:</label>
                    <input
                        type="text"
                        name="legendImg"
                        placeholder="Legenda da Imagem"
                        value={formData.legendImg}
                        onChange={handleChange}
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded flex'>
                    <label htmlFor="video">URL do Vídeo:</label>
                    <input
                        type="text"
                        name="video"
                        value={formData.video}
                        placeholder="URL do Vídeo"
                        onChange={handleChange}
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded flex'>
                    <label htmlFor="instagram">URL do Instagram:</label>
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        placeholder="URL do Instagram"
                        onChange={handleChange}
                        className='w-[80%] ml-5'
                    />
                </div>
                <div className='border p-5 rounded flex justify-evenly mb-8'>
                    <label>
                        Mostrar Artigo:
                        <input
                            type="checkbox"
                            name="articleShow"
                            checked={formData.articleShow}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {/* Campos adicionais */}
                {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className='border p-5 rounded flex'>
                        <label htmlFor={`title${i + 2}`}>{`Título ${i + 2}`}</label>
                        <input
                            type="text"
                            name={`title${i + 2}`}
                            placeholder={`Título ${i + 2}`}
                            //value={formData[`title${i + 2}` as keyof typeof formData]}
                            value={String(formData[`title${i + 2}` as keyof typeof formData])}
                            onChange={handleChange}
                            className='w-[80%] ml-5'
                        />
                        <label htmlFor={`contentTitle${i + 2}`}>{`Conteúdo Título ${i + 2}`}</label>
                        <textarea
                            name={`contentTitle${i + 2}`}
                            placeholder={`Conteúdo Título ${i + 2}`}
                            //value={formData[`contentTitle${i + 2}` as keyof typeof formData]}
                            value={String(formData[`contentTitle${i + 2}` as keyof typeof formData])}
                            onChange={handleChange}
                            className='w-[80%] ml-5 h-20'
                        />
                    </div>
                ))}
                <Button type="submit">Criar Artigo</Button>
            </form>
        </div>
    );
};

export default CreateArticle;

