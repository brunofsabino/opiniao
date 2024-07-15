"use client"
import { Post, PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../../components/ui/card';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/MyContext';
import { BreadcrumbDemo } from '../../../components/Breadcrumb';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Separator } from '../../../components/ui/separator';
import Link from 'next/link';
import Image from "next/image"
import { AspectRatio } from '../../../../@/components/ui/aspect-ratio';
import CommentIn from '../../../components/CommentIn';
//import { Card } from '../../../components/ui/card';



interface PostPageProps {
    params: {
        slug: string;
    };
}
const normalizeTitle = (title: string) => {
    return title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, '-')
        .toLowerCase();
};
const PostPage = ({ params }: PostPageProps) => {
    const { slug } = params;
    // const normalizedSlug = normalizeTitle(slug.replace(/-/g, ' '));
    // const post = await prisma.post.findUnique({
    //     where: {
    //         slug: normalizedSlug,
    //     },
    // });
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    if (!slug) {
        return false
    }

    const { postsAll } = context;
    let post: Post
    // if (postsAll) {
    //     _.forEach(postsAll, (item) => {
    //         if (item.mainNewsShow === true) {
    //             mainNews = item
    //         }
    //     })
    //     console.log(postsAll)
    // }
    if (postsAll) {
        post = postsAll.find(item => item.slug === slug);
        //console.log(postsAll);

    }

    if (!post) {
        notFound();
    }
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

                <BreadcrumbDemo title={post.title} />
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center justify-center flex-col m-7'>
                        <h1 className="scroll-m-20 ml-1 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">{post.title} Teste de Titulo maior e grande</h1>
                        <div className='flex items-center justify-center mt-2 text-1xl'>
                            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/redação/fernanda-senna`} legacyBehavior passHref>
                                <div className='flex justify-center items-center mr-3 cursor-pointer'>
                                    <Avatar>
                                        <AvatarImage src="/images/fernanda-senna.png" />
                                        <AvatarFallback>FS</AvatarFallback>
                                    </Avatar>
                                    <p className='ml-3'>Fernanda Senna</p>
                                </div>
                            </Link>
                            <Separator orientation='vertical' className='h-[30px] mr-3' />
                            <p>{formattedDate}</p>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col items-center'>
                    <div className='w-[80%]'>
                        <AspectRatio ratio={16 / 9}>
                            <div className="relative w-full h-0 pb-[56.25%]">
                                <Image src={`/images/${post.img}`} alt="Image" layout="fill" objectFit="cover" className="rounded-md" />

                            </div>
                        </AspectRatio>
                        <p className='text-1xl text-[#838383]'>{post.legendImg} - @Reprodução</p>

                    </div>
                    <CardDescription className='flex flex-col  w-[90%] mt-8 text-1xl '>
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
                                        <iframe className="w-full h-full" src={post.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                    </div>
                                </AspectRatio>
                            </>
                        )}
                    </CardDescription>
                </CardContent>
                <CardFooter className='flex flex-col items-center mt-8 mb-5'>
                    <div className='bg-[#FFEAB9] w-[90%] rounded-lg p-6 relative'>
                        <h2 className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-[#FFEAB9] font-extrabold'>
                            Opinião Gospel</h2>
                        {post.summaryParagraph}
                        O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                    </div>
                </CardFooter>
            </Card>
            <CommentIn id={post.id} />
        </div>
    );
};

export default PostPage;
