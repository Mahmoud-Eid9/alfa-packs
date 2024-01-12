import './FoodSafePackaging.css'
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import PageTitle from '../pageTitle/PageTitle';
import Footer from '../Footer/Footer';
import rehypeRaw from 'rehype-raw'
import { useTranslation } from 'react-i18next';

const FoodSafePackaging = () => {
    const { t, i18n } = useTranslation()
    const [article, setArticle] = useState({})
    let Mark = require(`../Markdowns/foodsafepackaging.md`)
    if (i18n.language === "ar") {
        Mark = require(`../Markdowns/ar/foodsafepackaging.md`)
    } else {
        Mark = require(`../Markdowns/foodsafepackaging.md`)
    }
    useEffect(() => {
        fetch(Mark).then((response) => response.text()).then((text) => {
            console.log(text)
            setArticle({ terms: text })
        })
        console.log(article.terms)
    }, [Mark])
    return (<>
        <div className='Foodsafepackaging-page-container'>
            <PageTitle title={t("foodsafepackaging.title")} />
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className='Foodsafe-Article'>{article.terms}</ReactMarkdown>
            <img alt='ISO22000' className='iso22000-image' src='images/iso22000.webp' />
        </div>
        <Footer />
    </>
    );
}

export default FoodSafePackaging;