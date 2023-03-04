import './product.css'
import React from 'react';

const HomeProduct = (props) => {
    return ( <div className='HomeProduct'>
        <img className='HomeProductimg' src={props.image}/>
        <h3>{props.title}</h3>
        <button className='lrnbtn'>More</button>
    </div> );
}
 
export default HomeProduct;