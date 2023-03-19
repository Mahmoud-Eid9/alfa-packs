import React from 'react';
import './SideBar.css'
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
    return (<div className='Sidebar-container'>

        {props.sidebarItems.map((item, index) => {
           return <NavLink to={item.link} activeClassName="Sidebar-link-active" className="Sidebar-link">{item.title}</NavLink>
        })}

    </div>);
}

export default SideBar;