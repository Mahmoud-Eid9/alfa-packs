import React, {useEffect, useState} from 'react';
import './ServiceSection.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ServiceSection = ({ servicesection }) => {
    const { left, right, title } = servicesection
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])
    // const [layout, setLayout] = useState((<div></div>))
    const imgleft = String(left).startsWith('images/')
    if(screenWidth<=500 && imgleft){
        return (<div>
            <div className='ServiceSectionContainer'>
            <LazyLoadImage src={left} alt="serviceImage" className='ServiceSectionImage' />
            <p className='ServiceSecitonText'>
                <div className="text-center">
                    <h5 className="text-center sectionTitle">{title}</h5>
                </div>
                {right}
            </p>
        </div>
        </div>
        )
    }else if(screenWidth<=500 && !imgleft){
        return (<div>
            <div className='ServiceSectionContainer'>
            <LazyLoadImage src={right} alt="serviceImage" className='ServiceSectionImage' />
            <p className='ServiceSecitonText'>
                <div className="text-center">
                    <h5 className="text-center sectionTitle">{title}</h5>
                </div>
                {left}
            </p>
        </div>
        </div>
        )    
    }
    return (<div id={title.replaceAll(" ","").toLowerCase()}>


        {  imgleft ? (<div className='ServiceSectionContainer'>
            <LazyLoadImage src={left} alt="serviceImage" className='ServiceSectionImage' />
            <p className='ServiceSecitonText'>
                <div className="text-center">
                    <h5 className="text-center sectionTitle">{title}</h5>
                </div>
                {right}
            </p>
        </div>) : (<div className='ServiceSectionContainer'>
            <p className='ServiceSecitonText'>            
                <div className="text-center">
                    <h5 className="text-center sectionTitle">{title}</h5>
                </div>{left}</p>
            <LazyLoadImage src={right} alt="serviceImage" className='ServiceSectionImage' />
        </div>)}
    </div>
    );
}

export default ServiceSection;