"use client"
import { useContext } from "react";
import News from "../../components/News"
import NewsCompac from "../../components/NewsCompac"
import { Card, CardContent, CardHeader } from "../../components/ui/card"
import { ThemeContext } from "../../context/MyContext";
import ArticleCompac from "../../components/ArticleCompac";

const Page = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }
    const { articlesAll } = context;
    return (
        <div className="container ">

            <ArticleCompac data={articlesAll} compac={false} />
        </div>

    )
}
export default Page