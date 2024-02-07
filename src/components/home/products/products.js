import React from 'react';
import './products.css'
import HomeProduct from './product/product';
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';
import Services from './Services/Services';

const HomeProducts = () => {
    const { t, i18n } = useTranslation()
    const cupsUrls = [
        { title: t("products.4ozcup"), url: "images/cups/4oz.webp" },
        { title: t("products.6.5ozcup"), url: "images/cups/6.5oz.webp" },
        { title: t("products.7ozcup"), url: "images/cups/7oz.webp" },
        { title: t("products.8ozcup"), url: "images/cups/8oz.webp" },
        { title: t("products.9ozcup"), url: "images/cups/9oz.webp" },
        { title: t("products.10ozcup"), url: "images/cups/10oz.webp" },
        { title: t("products.12ozcup"), url: "images/cups/12oz.webp" },
        { title: t("products.14ozcup"), url: "images/cups/14oz.webp" }
    ]
    const containersUrl = [
        { title: t("products.20ozcontainer"), url: "images/containers/container-20oz.webp" },
        { title: t("products.30ozcontainer"), url: "images/containers/container-30oz.webp" }
    ]
    return (<section id='products'>
        <div className='products-product-container-cups'>
            <h2>{t("homeproducts.cups")}</h2>
            <div className='HomeProducts'>
                {cupsUrls.map((item, index) => {
                    return (
                        <div key={index}>
                            <img key={index} alt="Paper-Product" style={{ width: "100%" }} src={item.url} />
                            <h5 key={index} style={{ textAlign: "center" }}>{item.title}</h5>
                        </div>
                    )
                })}
            </div>

            <NavLink className="lrnbtn-products" to="/products/cups">{t("homeproducts.more")}</NavLink>
        </div>

        <div className='products-product-container-containers'>
            <h1>{t("homeproducts.containers")}</h1>
            <div className='HomeProducts-containers'>
                {containersUrl.map((item, index) => {
                    return (
                        <div key={index} className='d-flex flex-column align-items-center'>
                            <img key={index} style={{ width: "100%" }} alt="Paper-Product" src={item.url} />
                            <h5 key={index} style={{ textAlign: "center", marginTop: "20px" }}>{item.title}</h5>
                        </div>
                    )
                })}
            </div>
            <NavLink className="lrnbtn-products" to="/products/containers">{t("homeproducts.more")}</NavLink>
        </div>
    </section>
    );
}


export default HomeProducts;