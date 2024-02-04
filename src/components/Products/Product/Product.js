import './Product.css'
import React from 'react';
import {useTranslation} from 'react-i18next'

const Product = (props) => {
    const {t, i18n} = useTranslation()
    return ( <div className='product-card-container'>
        <img className='Product-card-img' alt='paper-product' src={props.image}/>
        <div className='product-card-description'>{t(props.title)}</div>
    </div> );
}
 
export default Product;