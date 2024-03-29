import React from 'react';
import './Products.css'
import PageTitle from '../../pageTitle/PageTitle';
import SideBar from '../../SideBar/SideBar';
import Footer from '../../Footer/Footer';
import { useTranslation } from 'react-i18next'
import { useHistory } from "react-router-dom";

const ProductsContainers = (props) => {
    const history = useHistory();
    const { t, i18n } = useTranslation()
    const sidebarItems = [{ title: t("homeproducts.cups"), link: "/products/cups" }, { title: t("homeproducts.containers"), link: "/products/containers" }, { title: t("homeproducts.covers"), link: "/products/covers" }]



    return (<>
        <PageTitle title={props.title} />

        {i18n.language === "ar" ? (
            <div className='Article-container'>
                <SideBar className='Contactsidebar' sidebarItems={sidebarItems} />
                <div className='products-title-img-flex-container-containers ar-containers-container'>
                    <div className='products-text-container' >
                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                            {t("homeproducts.services.titles.customdesign")}
                        </h3>
                        <p>
                            {t("homeproducts.services.description.customdesigncontainer")}
                        </p>
                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                            {t("homeproducts.services.titles.readymade")}
                        </h3>
                        <p>
                            {t("homeproducts.services.description.readymade")}
                        </p>
                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                            {t("homeproducts.services.titles.plain")}
                        </h3>
                        <p>
                            {t("homeproducts.services.description.plain")}
                        </p>
                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                            {t("products.sizes.title")}
                        </h3>
                        <h5>
                            {t("products.sizes.containers")}
                        </h5>
                        <button className='backbtn desktop-back-btn' onClick={() => history.push("/")}>{t("back")}</button>
                    </div>
                    <div className='images-container '>
                        <div className='d-flex flex-column align-items-center flex-gap'>
                        <img src='images/containers/container-20oz.webp' alt='paper-container' className='container-img' />
                        <h4>{t("products.20ozcontainer")}</h4>
                        </div>
                        <div className='d-flex flex-column align-items-center flex-gap'>
                        <img src='images/containers/container-30oz.webp' alt='paper-container' className='container-img' />
                        <h4>{t("products.30ozcontainer")}</h4>
                        </div>
                    </div>
                    
                </div>
                <button className='backbtn mobile-back-btn' onClick={() => history.push("/")}>{t("back")}</button>
                
            </div>


        ) : (
            <div className='Article-container'>
                <SideBar className='Contactsidebar' sidebarItems={sidebarItems} />
                <div className='products-title-img-flex-container-containers'>

                    <div className='products-text-container'>
                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                            {t("homeproducts.services.titles.customdesign")}
                        </h3>
                        <p>
                            {t("homeproducts.services.description.customdesigncontainer")}
                        </p>
                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                            {t("homeproducts.services.titles.readymade")}
                        </h3>
                        <p>
                            {t("homeproducts.services.description.readymade")}
                        </p>
                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                            {t("homeproducts.services.titles.plain")}
                        </h3>
                        <p>
                            {t("homeproducts.services.description.plain")}
                        </p>
                        <h3 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>
                            {t("products.sizes.title")}
                        </h3>
                        <h5>
                            {t("products.sizes.containers")}
                        </h5>
                        <button className='backbtn desktop-back-btn' onClick={() => history.push("/")}>{t("back")}</button>
                    </div>
                    <div className='images-container'>
                    <div className='d-flex flex-column align-items-center flex-gap'>
                        <img src='images/containers/container-20oz.webp' alt='paper-container' className='container-img' />
                        <h4>{t("products.20ozcontainer")}</h4>
                        </div>
                        <div className='d-flex flex-column align-items-center flex-gap'>
                        <img src='images/containers/container-30oz.webp' alt='paper-container' className='container-img' />
                        <h4>{t("products.30ozcontainer")}</h4>
                        </div>

                    </div>
                        
                </div>
                <button className='backbtn mobile-back-btn' onClick={() => history.push("/")}>{t("back")}</button>
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
        <Footer />
    </>
    );
}

export default ProductsContainers;