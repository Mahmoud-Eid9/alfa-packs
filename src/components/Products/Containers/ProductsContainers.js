import React, { useEffect, useState } from 'react';
import './Products.css'
import PageTitle from '../../pageTitle/PageTitle';
import SideBar from '../../SideBar/SideBar';
import Footer from '../../Footer/Footer';
import Product from '../Product/Product';
import {useTranslation} from 'react-i18next'
import Gallery from '../../Gallery/Gallery';
import { NavLink } from 'react-router-dom';
import ContactCard from '../../ContactCard/ContactCard';

const ProductsContainers = (props) => {
    const {t, i18n} = useTranslation()
    const sidebarItems = [{ title: t("homeproducts.cups"), link: "/products/cups" }, { title: t("homeproducts.containers"), link: "/products/containers" }, { title: t("homeproducts.covers"), link: "/products/covers" }]
    
    
    return (<>
<PageTitle title={props.title} />

        {i18n.language === "ar" ? (
        <div className='Article-container'>
            <SideBar className='Contactsidebar' sidebarItems={sidebarItems} />
        <div className='products-text-container'>
        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
        {t("homeproducts.services.titles.customdesign") }
        </h3>
        <p>
        {t("homeproducts.services.description.customdesigncontainer") }
        </p>
        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
        {t("homeproducts.services.titles.readymade") }
        </h3>
        <p>
        {t("homeproducts.services.description.readymade") }
        </p>
        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
        {t("homeproducts.services.titles.plain") }
        </h3>
        <p>
        {t("homeproducts.services.description.plain") }
        </p>
        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
        { t("products.sizes.title")}
            </h3>
            <h5>
                {t("products.sizes.containers")}
            </h5>
        </div>
        </div>
        ) : (
            <div className='Article-container'>
                <SideBar className='Contactsidebar' sidebarItems={sidebarItems} />
        <div className='products-text-container'>
        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
        {t("homeproducts.services.titles.customdesign") }
        </h3>
        <p>
        {t("homeproducts.services.description.customdesigncontainer") }
        </p>
        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
        {t("homeproducts.services.titles.readymade") }
        </h3>
        <p>
        {t("homeproducts.services.description.readymade") }
        </p>
        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
        {t("homeproducts.services.titles.plain") }
        </h3>
        <p>
        {t("homeproducts.services.description.plain") }
        </p>
        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
        { t("products.sizes.title")}
            </h3>
            <h5>
            {t("products.sizes.containers")}
            </h5>
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
        <Gallery path='../../../public/images/cups/gallery'/>
        <Footer/>
        </>
    );
}

export default ProductsContainers;