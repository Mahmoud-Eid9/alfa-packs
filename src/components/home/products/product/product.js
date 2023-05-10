import './product.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import {useTranslation} from 'react-i18next'

const HomeProduct = (props) => {
    const {t} = useTranslation()
    return ( <div className='HomeProduct'>
        <img className='HomeProductimg' src={`/${props.image}`}/>
        <h5>{props.title}</h5>
    </div> );
}
 
export default HomeProduct;