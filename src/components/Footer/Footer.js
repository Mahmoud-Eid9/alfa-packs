import React from 'react';
import './Footer.css'; // import footer styles
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className='footer-section-container'>
      <div className="footer-container">
        <div className="footer-left">
          <h3>{t("footer.title")}</h3>
          <p>{t("footer.description")}</p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <h3>{t("footer.usefullinks")}</h3>
            <ul>
              <li><NavLink to="/">{t("navbar.home")}</NavLink></li>
              <li><NavLink to="/products">{t("navbar.products.title")}</NavLink></li>
              <li><NavLink to="/quality/gmp">{t("navbar.quality.title")}</NavLink></li>
              <li><NavLink to="/food-safe-packaging">{t("navbar.foodsafe.title")}</NavLink></li>
              {/* <li><NavLink to="/about">About Us</NavLink></li> */}
              <li><NavLink to="/contact">{t("navbar.contactus")}</NavLink></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>{t("navbar.quality.title")}</h3>
            <ul>
              <li><NavLink to="/quality/gmp">{t("navbar.quality.gmp")}</NavLink></li>
              <li><NavLink to="/foodsafe/ghs">{t("navbar.foodsafe.ghs")}</NavLink></li>
              <li><NavLink to="/foodsafe/haccp">{t("navbar.foodsafe.haccp")}</NavLink></li>
              <li><NavLink to="/quality/iso9001">{t("navbar.quality.iso9001")}</NavLink></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>{t("navbar.products.title")}</h3>
            <ul>
              <li><NavLink to="/products/cups">{t("navbar.products.cups")}</NavLink></li>
              <li><NavLink to="/products/containers">{t("navbar.products.containers")}</NavLink></li>
              <li><NavLink to="/products/covers">{t("navbar.products.covers")}</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p style={{ margin: "0" }}>Copyright &copy; {new Date().getFullYear()} Afla Pack. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

