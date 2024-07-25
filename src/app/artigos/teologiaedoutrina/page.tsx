'use client'
import { useContext } from "react";
import ArticleCompac from "../../../components/ArticleCompac"
import { ThemeContext } from "../../../context/MyContext";
import _ from "lodash";

const Page = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    const { articlesAll } = context;
    let newsArticles: string[] = []
    _.forEach(articlesAll, (item) => {
        if (item.subTitle === 'Teologia e Doutrina') {
            newsArticles.push(item)
        }
    })
    console.log(newsArticles)
    if (newsArticles.length === 0) {
        return (
            'Aguarde...'
        )
    } else {
        return (
            <div className="container">
                <ArticleCompac data={newsArticles} compac={false} subTitle={"Teologia e Doutrina"} />
            </div>
        )
    }
}
export default Page