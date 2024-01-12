import React, { useState } from 'react';
import ServiceSection from './ServiceSection/ServiceSection';
import './Services.css'
import { useTranslation } from 'react-i18next';



const ServicesPage = () => {
    const { t, i18n } = useTranslation()
    const data = [{
        name: t("homeproducts.services.titles.customdesign"),
        image: 'images/cups/custom-made.webp',
        description: t("homeproducts.services.description.customdesign")
    },

    {
        name: t("homeproducts.services.titles.readymade"),
        image: "images/cups/ready-made.webp",
        description: t("homeproducts.services.description.readymade")
    },

    {
        name: t("homeproducts.services.titles.plain"),
        image: "images/cups/plain.webp",
        description: t("homeproducts.services.description.plain")
    }]


    return (<div className='ServicesPage'>
        {
            data.map((section, index) => {
                if (index % 2 === 0) {

                    return <ServiceSection key={index} servicesection={{ left: section.description, right: section.image, title: section.name }} />

                } else {
                    return <ServiceSection key={index} servicesection={{ right: section.description, left: section.image, title: section.name }} />
                }
            })
        }
        {/* <ServiceSection servicesection={{left: "images/web-dev.svg", right: "hello world"}}/> */}
    </div>);
}

export default ServicesPage;