import React, { useEffect, useState } from 'react';
import './Article.css'
import ReactMarkdown from 'react-markdown'
import PageTitle from '../pageTitle/PageTitle';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import rehypeRaw from 'rehype-raw'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Article = (props) => {
    const {t, i18n} = useTranslation();
    const [article, setArticle] = useState({})
    const sidebarItems = props.sideBarData
    let Mark = require(`../Markdowns/${props.article}`)
    if(i18n.language === "ar"){
        Mark = require(`../Markdowns/ar/${props.article}`)
    }else{
        Mark = require(`../Markdowns/${props.article}`)
    }
    useEffect(() => {

        fetch(Mark).then((response) => response.text()).then((text) => {
            console.log(text)
            setArticle({ terms: text })
        })
        console.log(article.terms)
    }, [Mark])
    return (<><div className='Article-container'>
        <PageTitle title={props.title} />
        {/* <div className='Contactsidebar'>
            <h3 className='Contactsidebar-header'>
                Have any questions ?
            </h3>
            <button className='tchbtn'>Get in touch</button>
        </div> */}
        <SideBar className='Contactsidebar' sidebarItems={sidebarItems} />
        <ReactMarkdown rehypePlugins={[rehypeRaw]} className='Article'>{article.terms}</ReactMarkdown>
    </div>
        <Footer />
    </>
    );
}

export default Article;