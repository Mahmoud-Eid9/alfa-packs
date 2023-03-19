import React, { useEffect, useState } from 'react';
import './Article.css'
import ReactMarkdown from 'react-markdown'
import PageTitle from '../pageTitle/PageTitle';
import SideBar from '../SideBar/SideBar';


const Article = (props) => {
    const [article, setArticle] = useState({})
    const sidebarItems = [{ title: "GMP", link: "gmp" }, { title: "GHP", link: "ghp" }, { title: "HACCP", link: "haccp" }]
    const Mark = require(`../Markdowns/${props.article}`)
    useEffect(() => {
        fetch(Mark).then((response) => response.text()).then((text) => {
            console.log(text)
            setArticle({ terms: text })
        })
        console.log(article.terms)
    }, [Mark])
    return (<div className='Gmp-container'>
        <PageTitle title={props.title} />
        {/* <div className='Contactsidebar'>
            <h3 className='Contactsidebar-header'>
                Have any questions ?
            </h3>
            <button className='tchbtn'>Get in touch</button>
        </div> */}
        <SideBar className='Contactsidebar' sidebarItems={sidebarItems} />
        <ReactMarkdown className='Article'>{article.terms}</ReactMarkdown>
    </div>
    );
}

export default Article;