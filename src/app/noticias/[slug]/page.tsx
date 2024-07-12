"use client"
import { Post, PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/MyContext';
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
    console.log(post)
    return (
        <Card>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{post.contentPost}</CardDescription>
            </CardContent>
        </Card>
    );
};

export default PostPage;
