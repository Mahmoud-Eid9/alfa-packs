import './ContactCard.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const ContactCard = () => {
    const {t, i18n} = useTranslation()
    return (             <div className='Contactsidebar'>
    <h3 className='Contactsidebar-header'>
   { t("products.contactus.title")}
    </h3>
    <NavLink to="/contact" className='tchbtn'>{ t("products.contactus.button")}</NavLink>
</div> );
}
 
export default ContactCard;