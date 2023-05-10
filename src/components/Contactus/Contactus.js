import React, { useState } from 'react';
import './Contactus.css'
import PageTitle from '../pageTitle/PageTitle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import RoomIcon from '@mui/icons-material/Room';
import Footer from '../Footer/Footer';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contactus = () => {
    const {t, i18n} = useTranslation()
    const [data, setData] = useState({ name: '', email: '', message: '' });
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.send('service_zgpv2xc', 'template_26e48cf', data, 'JPNP4AxpKoHkCujYD').then(
            (result) => {
                swal('Thank You!', 'We appreciate you contacting us!', 'success');
                setData({ name: '', email: '', message: '' });
            },
            (error) => {
                swal(
                    'Server Error!',
                    "that doesn't normally happen \nwe apologize and we hope you try again later!",
                    'error'
                );
            }
        );

    };

    return (<div className='contactus-page-container'>
        <PageTitle title={t("contactus.title")} />
        <div className='page-organizer'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1702.3407826362165!2d31.6904048!3d31.4228984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9e389c578f893%3A0xfd8297a4733f0d22!2z2YXYtdmG2Lkg2KfZhNmB2Kcg2KjYp9mDINmE2YTZhdmG2KrYrNin2Kog2KfZhNmI2LHZgtmK2Yc!5e0!3m2!1sen!2seg!4v1679332026462!5m2!1sen!2seg"
                width="600"
                className='location-iframe'
                height="350"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='contactdata-container'>
                <div className='contact-data-line'>
                    <EmailIcon sx={{ fontSize: 32 }} className='contact-data-line-icon' />
                    <div className='contact-data-line-text'>
                        main@alfapp.net
                    </div>
                </div>
                <div className='contact-data-line'>
                    <PhoneIphoneIcon sx={{ fontSize: 32 }} className='contact-data-line-icon' />
                    <div className='contact-data-line-text'>
                        +20 101 783 0861
                    </div>
                </div>
                <div className='contact-data-line'>
                    <RoomIcon sx={{ fontSize: 32 }} className='contact-data-line-icon' />
                    <div className='contact-data-line-text'>
                        {t("contactus.address")}
                    </div>
                </div>
            </div>

        </div>
    <div className='contact-data-image-container'>
        <form onSubmit={handleSubmit} className='contactus-form' >
            <h5 className={i18n.language === "ar" ? "sectionTitlearabic" : "sectionTitle"}>{t("contactus.getintouch")}</h5>
            <div className='form-organizer'>

            <input placeholder={t("contactus.yourname")}
                value={data.name}
                className='contactus-form-input'
                type="text"
                required
                onChange={(e) => setData({ ...data, name: e.target.value })} />

            <input
                placeholder={t("contactus.youremail")}
                className='contactus-form-input'
                type="email"
                value={data.email}
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                </div>
            <textarea
                placeholder={t("contactus.yourmessage")}
                required
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
            <button className="branBtn" type="submit">
            {t("contactus.send")}
            </button>
        </form>
        <img className='contactus-img' src='images/contactus-image.jpg'/>
        </div>
        <Footer />
    </div>

    );
}

export default Contactus;