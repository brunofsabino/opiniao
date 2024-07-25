"use client"
import { Article, Post, PrismaClient } from '@prisma/client';
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
import ArticleCompac from '../../../components/ArticleCompac';
import News from '../../../components/News';
import NewsCompac from '../../../components/NewsCompac';
import ShareButtons from '../../../components/ShareButtons';
import CommentInArticle from '../../../components/CommentInArticle';
//import { Card } from '../../../components/ui/card';



interface PostPageProps {
    params: {
        slug: string;
    };
}

const ArticlePage = ({ params }: PostPageProps) => {
    const { slug } = params;

    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    if (!slug) {
        return false
    }

    const { articlesAll } = context;
    let post: Article
    let paragraphs2
    let paragraphs3
    let paragraphs4
    let paragraphs5
    let paragraphs6
    let paragraphs7
    let paragraphs8
    let paragraphs9
    let paragraphs10

    if (articlesAll) {
        post = articlesAll.find(item => item.slug === slug);
        //console.log(postsAll);

    }
    console.log(articlesAll)
    if (!post) {
        notFound();
    }
    const postUrl = `https://opiniaogospel.com.br/artigos/${post.slug}`;
    const postTitle = post.title;
    const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const paragraphs = post.contentArticle.split('\n').map((line, index) => (
        <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
    ));

    if (post.contentTitle2) {
        paragraphs2 = post.contentTitle2.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }
    if (post.contentTitle3) {
        paragraphs3 = post.contentTitle3.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }
    if (post.contentTitle4) {
        paragraphs4 = post.contentTitle4.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }
    if (post.contentTitle5) {
        paragraphs5 = post.contentTitle5.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }
    if (post.contentTitle6) {
        paragraphs6 = post.contentTitle6.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }
    if (post.contentTitle7) {
        paragraphs7 = post.contentTitle7.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }
    if (post.contentTitle8) {
        paragraphs8 = post.contentTitle8.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }
    if (post.contentTitle9) {
        paragraphs9 = post.contentTitle9.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }
    if (post.contentTitle10) {
        paragraphs10 = post.contentTitle10.split('\n').map((line, index) => (
            <p key={index} className="mb-4">{line}</p> // mb-4 adiciona espaçamento inferior entre parágrafos
        ));
    }

    return (
        <div className='container'>
            <div className='mt-7 mb-7'>

                <BreadcrumbDemo title={post.title} postOrArticle={{ post: false, article: true }} />
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center justify-center flex-col m-7'>
                        <h1 className="scroll-m-20 ml-1 text-5xl font-extrabold tracking-tight lg:text-5xl text-center">{post.title}</h1>
                        <Separator className='w-[480px] mt-3' />
                        <div className='flex items-center justify-center text-xs text-[#838383]'>
                            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/redação/fernanda-senna`} legacyBehavior passHref>
                                <div className='flex justify-center items-center mr-3 cursor-pointer'>
                                    <Avatar>
                                        <AvatarImage src="/images/fernanda-senna.png" />
                                        <AvatarFallback>FS</AvatarFallback>
                                    </Avatar>
                                    <p className='ml-3'>Fernanda Senna</p>
                                </div>
                            </Link>
                            <Separator orientation='vertical' className='h-[30px] m-3' />
                            <p>{formattedDate}</p>
                            <Separator orientation='vertical' className='h-[30px] m-3' />
                            <p className='mr-3'>Compartilhe:</p>
                            <ShareButtons url={postUrl} title={postTitle} />
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
                        {/* <p className='text-1xl text-[#838383] text-center'>{post.legendImg} - @Reprodução</p> */}

                    </div>
                    <CardDescription className='flex flex-col  w-[90%] mt-10 text-1xl text-black '>
                        {paragraphs}
                        {paragraphs2 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title2}</h3>
                                {paragraphs2}
                            </>
                        )}
                        {paragraphs3 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title3}</h3>
                                {paragraphs3}
                            </>
                        )}
                        {paragraphs4 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title4}</h3>
                                {paragraphs4}
                            </>
                        )}
                        {paragraphs5 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title5}</h3>
                                {paragraphs5}
                            </>
                        )}
                        {paragraphs6 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title6}</h3>
                                {paragraphs6}
                            </>
                        )}
                        {paragraphs7 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title7}</h3>
                                {paragraphs7}
                            </>
                        )}
                        {paragraphs8 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title8}</h3>
                                {paragraphs8}
                            </>
                        )}
                        {paragraphs9 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title9}</h3>
                                {paragraphs9}
                            </>
                        )}
                        {paragraphs10 && (
                            <>
                                <h3 className='text-2xl mb-7 mt-2'>{post.title10}</h3>
                                {paragraphs10}
                            </>
                        )}

                        {post.video && (
                            <>
                                <h4>Veja o video abaixo:</h4>
                                <AspectRatio ratio={16 / 9}>
                                    <div className="relative w-full h-full">
                                        <iframe className="w-full h-full" src={post.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </AspectRatio>
                            </>
                        )}
                        {/* {post.instagram && (
                            <>
                                <h4>Veja a postagem abaixo:</h4>
                                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C9atpwvi_PL/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C9atpwvi_PL/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver essa foto no Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C9atpwvi_PL/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Uma publicação compartilhada por @valuenations</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>
                            </>
                        )} */}
                    </CardDescription>
                </CardContent>
                <CardFooter className='flex flex-col items-center mt-8 mb-5'>
                    {/* <div className='bg-[#FFEAB9] w-[90%] rounded-lg p-6 relative'>
                        <h2 className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-[#FFEAB9] font-extrabold'>
                            Opinião Gospel</h2>
                        {post.summaryParagraph}
                        O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                    </div> */}
                </CardFooter>
            </Card>
            {/* <ArticleCompac data={articlesAll} /> */}
            <CommentInArticle id={post.id} />
            <ArticleCompac data={articlesAll} compac={true} />
        </div>
    );
};

export default ArticlePage;
