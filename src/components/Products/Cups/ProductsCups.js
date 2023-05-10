import React, { useEffect, useState } from 'react';
import './Products.css'
import PageTitle from '../../pageTitle/PageTitle';
import Footer from '../../Footer/Footer';
import { useTranslation } from 'react-i18next'
import Gallery from '../../Gallery/Gallery';
import ContactCard from '../../ContactCard/ContactCard';
import { useHistory } from "react-router-dom";

const ProductsCups = (props) => {
    const { t, i18n } = useTranslation()
    const history = useHistory();
    const sidebarItems = [{ title: t("homeproducts.cups"), link: "/products/cups" }, { title: t("homeproducts.containers"), link: "/products/containers" }, { title: t("homeproducts.covers"), link: "/products/covers" }]
    const data = [
        {
            title: t("homeproducts.services.titles.customdesign"),
            description: t("homeproducts.services.description.customdesign"),
            images: ["images/cups/custom-made1.png", "images/cups/custom-made2.png"]
        }, {
            title: t("homeproducts.services.titles.readymade"),
            description: t("homeproducts.services.description.readymade"),
            images: ["images/cups/ready-made1.png", "images/cups/ready-made2.png"]
        }, {
            title: t("homeproducts.services.titles.occasions"),
            description: t("homeproducts.services.description.occasions"),
            images: ["images/cups/occasion1.png", "images/cups/occasion2.png"]
        }, {
            title: t("homeproducts.services.titles.plain"),
            description: t("homeproducts.services.description.plain"),
            images: ["images/cups/plain.png"]
        }, {
            title: t(t("products.sizes.title")),
            description: t("products.sizes.cups"),
            images: []
        }, {
            title: t("homeproducts.services.titles.covers"),
            description: t("homeproducts.services.description.covers"),
            images: []
        }]
    return (<>
        <PageTitle title={props.title} />
        {i18n.language === "ar" ? (
            <div className='products-page-flex-container'  style={{direction: "rtl" }}>
                <div style={{ margin: "0 20px", direction: "rtl" }}>
                    {
                        data.map((element, index) => {
                            return (
                                <div className='products-title-img-flex-container'>

                                    <div className='title-description-container' >
                                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                                            {element.title}
                                        </h3>
                                        <p>
                                            {element.description}
                                        </p>
                                    </div>
                                    <div className='products-title-images-continer'>
                                        {
                                            
                                            element.images.map((img, ind) => {
                                                
                                                return <img className='products-title-img' src={img} />
                                            })
                                        }
                                    </div>
                                </div>
                            )
                            
                        })
                    }
                </div>
                <ContactCard />
            </div>
        ) : (
            <div className='products-flex-container'>
                <div style={{ margin: "0 20px" }}>
                    {
                        data.map((element, index) => {
                            return (
                                <div className='products-title-img-flex-container'>

                                    <div className='title-description-container' >
                                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                                            {element.title}
                                        </h3>
                                        <p>
                                            {element.description}
                                        </p>
                                    </div>
                                    <div className='products-title-images-continer'>
                                        {

                                            element.images.map((img, ind) => {

                                                return <img className='products-title-img' src={img} />
                                            })
                                        }
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
                <ContactCard />
            </div>
        )}




        {/* <div className='Article-container'>
        <PageTitle title={props.title} />

        <SideBar className='sidebar-products' sidebarItems={sidebarItems} />
        <div className='productspage-products-container'>
        {productsData.map((element, index) => {
            return <Product image={element.image} title={t(`products.${element.title}`)} key={index} />
        })}
        </div>
    </div> */}
    <button className='backbtn' onClick={() => history.push("/")}>{t("back")}</button>
        <Gallery path='../../../public/images/cups/gallery' />
        <Footer />
    </>
    );
}

export default ProductsCups;