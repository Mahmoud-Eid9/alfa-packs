import React, { useState, useEffect } from 'react';
import './SideBar.css'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser'

const SideBar = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const {t, i18n} = useTranslation();
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <>
            {
                windowWidth <= 981 ? (
                    <ul className='Sidebar-container-list' style={i18n.language === "ar" ? {direction: "rtl"} : {direction: "ltr"}}>

                        {
                            props.sidebarItems.map((item, index) => {
                                return <li><NavLink key={index} to={item.link} activeClassName="Sidebar-link-active" className="Sidebar-link">{item.title} {i18n.language === "ar" ? parse("&xlarr;") : parse("&xrarr;")}</NavLink></li>
                            }) 
                        }

                    </ul >) : (
                    <div className='Sidebar-container'>
                        {props.sidebarItems.map((item, index) => {
                            return <NavLink key={index} to={item.link} activeClassName="Sidebar-link-active" className="Sidebar-link">{item.title}</NavLink>
                        })}

                    </div>)}
        </>
    );
}

export default SideBar;