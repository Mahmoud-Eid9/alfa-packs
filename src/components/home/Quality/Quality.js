import './Quality.css'
import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import parse from 'html-react-parser'


const QualityHome = () => {
    const {t, i18n} = useTranslation()
    const [isArabic, setIsArabic] = useState(true)
    useEffect(() => {
        setIsArabic(() => {
            if(i18n.language === "ar"){
                return true
            }
            return false
        })
    },[i18n.language])
    const history = useHistory();
    return ( 
    <div className='quality-home-container'>
        <div className='images-container'>
        <div className='left-quality'>
        <div className='Backdrop-quality' onClick={() => history.push("/quality")}>
        <h2 className={isArabic ? "arabic-title": "english-title"}>{parse(t("homequality.quality"))}</h2>
        </div>
        </div>
        <div className='right-foodsafe'>
        <div className='Backdrop-quality'onClick={() => history.push("/food-safe-packaging")}>
            <h2 className={isArabic ? "arabic-title": "english-title"}>{parse(t("homequality.foodsafety"))}</h2>
            
        </div>
        </div>
        </div>
    </div> 
    );
}
 
export default QualityHome;