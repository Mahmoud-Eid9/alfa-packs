import React from 'react';
import './products.css'
import HomeProduct from './product/product';
const HomeProducts = () => {
    return ( <section id='products'>
            <h4 className="miniTitle">PRODUCTS</h4>
            <h5 className="sectionTitle">EXPLORE OUR PRODUCTS</h5>
        <div className='HomeProducts'>
        <HomeProduct image="images/cup-img.jpg" title="Cups" />
        <HomeProduct  image={"images/container-img.jpg"} title="Containers"/>
        <HomeProduct   image={"images/cover-img.jpg"} title="Covers"/>
    </div> 
    </section>
    );
}


export default HomeProducts;