import React from 'react';
import './Contactus.css'
import PageTitle from '../pageTitle/PageTitle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import RoomIcon from '@mui/icons-material/Room';

const Contactus = () => {
    return ( <div className='contactus-page-container'>
        <PageTitle title="Contact us" />
        <div  className='contactus-image' />
        <div className='contactdata-container'>
            <div className='contact-data-line'>
            <EmailIcon sx={{ fontSize: 32 }} className='contact-data-line-icon'/>
           <div className='contact-data-line-text'>
           main@alfapp.net
            </div> 
            </div>
            <div className='contact-data-line'>
            <PhoneIcon sx={{ fontSize: 32 }} className='contact-data-line-icon'/>
           <div className='contact-data-line-text'>
            (03)4242718
            </div> 
            </div>
            <div className='contact-data-line'>
            <PhoneIphoneIcon sx={{ fontSize: 32 }} className='contact-data-line-icon'/>
           <div className='contact-data-line-text'>
           +20 101 783 0861
            </div> 
            </div>
            <div className='contact-data-line'>
            <RoomIcon sx={{ fontSize: 32 }} className='contact-data-line-icon'/>
           <div className='contact-data-line-text'>
           Industrial Zone, New Damietta, Damietta Governorate
            </div> 
            </div>
        </div>
        
    </div> );
}
 
export default Contactus;