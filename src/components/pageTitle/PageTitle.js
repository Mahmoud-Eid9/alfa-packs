import React from 'react';
import './PageTitle.css'

const PageTitle = (props) => {
    return ( <h2 className='PageTitle'>
        {props.title}
    </h2> );
}
 
export default PageTitle;