import './HomeContactus.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import {useTranslation} from 'react-i18next'

const HomeContactus = () => {
    const {t} = useTranslation()

    return ( <div className='contactus-section-container'>
        <div className="contactus-home-header-container">
            <h2 className='contactus-home-title'>{t("homecontactus.title")}</h2>
            <h2 className='contactus-home-title'>{t("homecontactus.description")}</h2>
        </div>
            <div style={{margin: "auto"}}>
           <NavLink className="contactus-button-link-home" to="/contact">{t("homecontactus.button")}</NavLink>
            </div>
    </div> );
}
 
export default HomeContactus;