import './Hero.css'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation()
  const history = useHistory();
  return (<div className='Hero-container'>
    <div className='Hero'>
      <div className='Backdrop' >
        <div className='iso-certified-images'>
          <img className='iso-certified' src='images/iso-9001-certified.png' />
          <img className='iso-certified' src='images/iso-22000-certified.png' />
        </div>
        <div className='Hero-Title'>
          {t("hero.title")}
        </div>

        <div className='Hero-Description'>
          {t("hero.description")}
        </div>
        <button to="/contact" onClick={() => history.push("/contact")} className='fancy-button'>
  {t("contactus.title")}
</button>
      </div>
    </div>
  </div>
  );
}



export default Hero;