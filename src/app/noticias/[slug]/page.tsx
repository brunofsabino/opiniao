"use client"
import { Post, PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../../components/ui/card';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../context/MyContext';
import { BreadcrumbDemo } from '../../../components/Breadcrumb';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Separator } from '../../../components/ui/separator';
import Link from 'next/link';
import Image from "next/image"
import { AspectRatio } from '../../../../@/components/ui/aspect-ratio';
import CommentIn from '../../../components/CommentIn';
import ArticleCompac from '../../../components/ArticleCompac';
import News from '../../../components/News';
import NewsCompac from '../../../components/NewsCompac';
import ShareButtons from '../../../components/ShareButtons';
import mixpanel from 'mixpanel-browser';
import { InstagramEmbed } from 'react-social-media-embed';
//import { Card } from '../../../components/ui/card';



interface PostPageProps {
    params: {
        slug: string;
    };
}

const PostPage = ({ params }: PostPageProps) => {
    const { slug } = params;

    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    if (!slug) {
        notFound();
        return null; // Garante que a execução pare aqui
    }

    const { postsAll, articlesAll } = context;
    //let post: Post

    const post = postsAll.find(item => item.slug === slug);
    // if (articlesAll) {
    //     post = articlesAll.find(item => item.slug === slug);
    //     //console.log(postsAll);

    // }
    //console.log(articlesAll)
    if (!post) {
        notFound();
        return null; // Para garantir que a execução pare aqui
    }
    useEffect(() => {
        // Rastreia a visualização da página
        mixpanel.track(`Pagina Notícias - ${post.title}`, {
            "Pagina Notícias": post.title
        });

        // Adicionalmente, você pode rastrear outras ações ou eventos aqui
    }, []);
    const postUrl = `https://opiniaogospel.com.br/noticias/${post.slug}`;
    const postTitle = post.title;
    const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const paragraphs = post.contentPost.split('\n').map((line, index) => (
        <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
    ));
    return (
        <div className='container'>
            <div className='mt-7 mb-7'>
                <BreadcrumbDemo title={post.title} subTitle={post.subTitle} postOrArticle={{ post: true, article: false }} />
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center justify-center flex-col md:m-5'>
                        <h1 className="scroll-m-20 ml-1 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-center">{post.title}</h1>
                        <Separator className='w-[90%] mt-3 md:w-[480px]' />
                        {/* <div className='flex items-center justify-center text-[6px] mt-1 text-[#838383] md:text-xs'>
                            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/redação/fernanda-senna`} legacyBehavior passHref>
                                <div className='flex justify-center items-center cursor-pointer flex-1 md:mr-3'>
                                    <Avatar className='w-[20px] h-[20px] md:w-10 md:h-10' >
                                        <AvatarImage src="/images/fernanda-senna.png" />
                                        <AvatarFallback>FS</AvatarFallback>
                                    </Avatar>
                                    <p className='ml-1 text-center md:ml-3'>Fernanda Senna (postado em: {formattedDate})</p>
                                </div>
                            </Link>
                            <Separator orientation='vertical' className='h-[40px] m-1 md:mr-3 md:block' />
                            <div className='flex flex-col items-center flex-1'>
                                <p className='m-1 md:mr-3'>Compartilhe:</p>
                                <ShareButtons url={postUrl} title={postTitle} />

                            </div>
                        </div> */}
                        <div className='flex items-center justify-center text-[9px]  text-[#838383] md:text-xs'>
                            <Link href={`/sobre/equipe`} legacyBehavior passHref>
                                {/* <Link href={`https://jsonplaceholder.typicode.com/posts`} legacyBehavior passHref> */}
                                <div className='flex justify-center items-center cursor-pointer flex-1 '>
                                    <Avatar className='w-[20px] h-[20px] md:w-10 md:h-10' >
                                        <AvatarImage src="/images/fernanda-senna.png" />
                                        <AvatarFallback>FS</AvatarFallback>
                                    </Avatar>
                                    <p className='ml-1 text-center md:ml-3'>Fernanda Senna (postado em: {formattedDate})</p>
                                </div>
                            </Link>
                            <Separator orientation='vertical' className='h-[50px] m-3 md:block' />
                            <div className='flex flex-col items-center flex-1'>
                                <p className='m-1 '>Compartilhe:</p>
                                <ShareButtons url={postUrl} title={postTitle} />

                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center '>
                    <div className='w-[100%] md:w-[80%]'>
                        <AspectRatio ratio={16 / 9}>
                            <div className="relative w-full h-0 pb-[56.25%]">
                                <Image src={`/images/${post.img}`} alt="Image" layout="fill" objectFit="cover" className="rounded-md" />

                            </div>
                        </AspectRatio>
                        <p className=' text-[#838383] text-center text-[8px] md:text-[12px]'>{post.legendImg} - @Reprodução</p>

                    </div>
                    {/* <CardDescription className='flex flex-col md:text-justify  w-[100%] mt-4 md:mt-8 md:w-[90%]  text-black '> */}
                    <CardDescription className='flex flex-col w-[100%] md:w-[90%] mt-8 text-1xl text-black md:text-justify'>
                        {paragraphs}
                        {post.video && (
                            <>
                                <h4>Veja o video abaixo:</h4>
                                <AspectRatio ratio={16 / 9}>
                                    <div className="relative w-full h-full">
                                        {/* <iframe
                                            src="https://www.youtube.com/watch?v=djV11Xbc914"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            style={{ width: '100%', height: '100%' }}
                                        /> */}
                                        <iframe className="w-full h-full" src={post.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                                    </div>
                                </AspectRatio>
                            </>
                        )}
                        {/* {post.instagram && (
                            <>
                                <h4>Veja a postagem abaixo:</h4>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: `
                                                <blockquote class="instagram-media" data-instgrm-permalink="${post.instagram}" data-instgrm-version="14">
                                                <a href="${post.instagram}" target="_blank">Instagram Post</a>
                                                </blockquote>
                                                <script async src="https://www.instagram.com/embed.js"></script>
                                            `,
                                    }}
                                />

                            </>
                        )} */}
                        {post.instagram && (
                            <div className='mt-7'>
                                <h4>Veja a postagem abaixo:</h4>
                                <div className="flex mt-3 justify-center w-full max-w-xs">

                                    <div className="w-full">
                                        <InstagramEmbed url={post.instagram} width={"100%"} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardDescription>
                </CardContent>
                <CardFooter className='flex flex-col items-center mt-8 mb-5'>
                    <div className='bg-[#FFEAB9] w-[90%] rounded-lg p-6 relative text-justify text-sm md:text-1xl'>
                        <h2 className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-[#FFEAB9] text-[10px] text-center font-extrabold md:text-sm '>
                            Opinião Gospel</h2>
                        {post.contentPreComment}
                    </div>
                </CardFooter>
            </Card>
            {/* <ArticleCompac data={articlesAll} /> */}
            <CommentIn id={post.id} />
            <NewsCompac data={postsAll} compac={true} />
        </div >
    );
};

export default PostPage;
