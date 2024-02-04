import React, { useEffect, useState } from 'react';
import './Products.css'
import PageTitle from '../../pageTitle/PageTitle';
import Footer from '../../Footer/Footer';
import { useTranslation } from 'react-i18next'
import ContactCard from '../../ContactCard/ContactCard';
import { useHistory } from "react-router-dom";
import SideBar from '../../SideBar/SideBar';

const ProductsCups = (props) => {
    const { t, i18n } = useTranslation()
    const history = useHistory();
    const sidebarItems = [{ title: t("homeproducts.cups"), link: "/products/cups" }, { title: t("homeproducts.containers"), link: "/products/containers" }, { title: t("homeproducts.covers"), link: "/products/covers" }]
    const data = [
        {
            title: t("homeproducts.services.titles.customdesign"),
            description: t("homeproducts.services.description.customdesign"),
            images: ["images/cups/custom-made1.webp", "images/cups/custom-made2.webp"]
        }, {
            title: t("homeproducts.services.titles.readymade"),
            description: t("homeproducts.services.description.readymade"),
            images: ["images/cups/ready-made1.webp", "images/cups/ready-made2.webp"]
        }, {
            title: t("homeproducts.services.titles.occasions"),
            description: t("homeproducts.services.description.occasions"),
            images: ["images/cups/occasion1.webp", "images/cups/occasion2.webp"]
        }, {
            title: t("homeproducts.services.titles.plain"),
            description: t("homeproducts.services.description.plain"),
            images: ["images/cups/plain.webp"]
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
        <div className='Article-container'>
            <SideBar className='Contactsidebar' sidebarItems={sidebarItems} />
            {i18n.language === "ar" ? (
                <div className='products-page-flex-container' style={{ direction: "rtl" }}>
                    <div className='products-cups-data-container'>
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

                                                    return <img className='products-title-img' alt='paper-cup' src={img} />
                                                })
                                            }
                                        </div>
                                    </div>
                                )

                            })
                        }
                        <button className='backbtn' onClick={() => history.push("/")}>{t("back")}</button>
                    </div>
                </div>
            ) : (
                <div className='products-flex-container'>
                    <div style={{ margin: "0 20px", width: "70vw" }}>
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

                                                    return <img className='products-title-img' alt='paper-cup' src={img} />
                                                })
                                            }
                                        </div>

                                    </div>
                                )


                            })
                        }
                        <button className='backbtn' onClick={() => history.push("/")}>{t("back")}</button>
                    </div>
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
        </div>

        <Footer />
    </>
    );
}

export default ProductsCups;