import React from 'react';
import './products.css'
import HomeProduct from './product/product';
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';
import Services from './Services/Services';

const HomeProducts = () => {
    const { t, i18n } = useTranslation()
    const cupsUrls = [
        { title: t("products.4ozcup"), url: "images/cups/4oz.png" },
        { title: t("products.6.5ozcup"), url: "images/cups/6.5oz.png" },
        { title: t("products.7ozcup"), url: "images/cups/7oz.png" },
        { title: t("products.8ozcup"), url: "images/cups/8oz.png" },
        { title: t("products.9ozcup"), url: "images/cups/9oz.png" },
        { title: t("products.10ozcup"), url: "images/cups/10oz.png" },
        { title: t("products.12ozcup"), url: "images/cups/12oz.png" },
        { title: t("products.14ozcup"), url: "images/cups/14oz.png" }
    ]
    const containersUrl = [
        { title: t("products.20ozcontainer"), url: "images/containers/container-img.jpg" },
        { title: t("products.30ozcontainer"), url: "images/containers/container-img.jpg" }
    ]
    return (<section id='products'>
        <div className='products-product-container-cups'>
            <h3>{t("homeproducts.cups")}</h3>
            <div className='HomeProducts'>
                {/* <HomeProduct image="images/cup-img.jpg" title={t("homeproducts.cups")} link="/products/cups" />
        <HomeProduct  image={"images/container-img.jpg"} title={t("homeproducts.containers")} link="/products/containers"/>
    <HomeProduct   image={"images/cover-img.jpg"} title={t("homeproducts.covers")} link="/products/covers"/> */}
                {cupsUrls.map((item, index) => {
                    return (
                        <div key={index}>
                            <img style={{ width: "100%" }} src={item.url} />
                            <h5 style={{ textAlign: "center" }}>{item.title}</h5>
                        </div>
                    )
                })}
            </div>
            {/* <div className='HomeProducts-services'>
    <HomeProduct image="images/cups/custom-made.png" title={t("homeproducts.services.titles.customdesign")} link="/products/cups" />
    <HomeProduct image={"images/cups/8oz.png"} title={t("homeproducts.services.titles.readymade")} link="/products/cups" />
    <HomeProduct image={"images/cups/10oz.png"} title={t("homeproducts.services.titles.plain")} link="/products/cups" />
    </div> */}
            <NavLink className="lrnbtn-products" to="/products/cups">{t("homeproducts.more")}</NavLink>
        </div>

        <div className='products-product-container-containers'>
            <h3>{t("homeproducts.containers")}</h3>
            <div className='HomeProducts-containers'>
                {containersUrl.map((item, index) => {
                    return (
                        <div key={index}>
                            <img style={{ width: "100%" }} src={item.url} />
                            <h5 style={{ textAlign: "center" }}>{item.title}</h5>
                        </div>
                    )
                })}
            </div>
            <NavLink className="lrnbtn-products" to="/products/containers">{t("homeproducts.more")}</NavLink>
            <div className='HomeProducts-services'>
                <HomeProduct image="images/container-img.jpg" title={t("homeproducts.services.titles.customdesign")} link="/products/cups" />
                <HomeProduct image={"images/container-img.jpg"} title={t("homeproducts.services.titles.readymade")} link="/products/cups" />
                <HomeProduct image={"images/container-img.jpg"} title={t("homeproducts.services.titles.plain")} link="/products/cups" />
                <HomeProduct image={"images/container-img.jpg"} title={t("homeproducts.services.titles.occasions")} link="/products/cups" />
            </div>
            <div style={{display: "flex", gap: "80px"}} className='homeproducts-flex-buttons-container'>
                <NavLink className="lrnbtn-products" to="/products/containers">{t("homeproducts.containers")}</NavLink>
                <NavLink className="lrnbtn-products" to="/products/cups">{t("homeproducts.cups")}</NavLink>
            </div>
        </div>
    </section>
    );
}


export default HomeProducts;