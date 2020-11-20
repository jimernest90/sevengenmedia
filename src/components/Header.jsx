import React from 'react';
import '../styles/header.css';
import facebook from '../img/facebook-64.png'
import twitter from '../img/twitter-64.png'
import linkedIn from '../img/linkedin-3-64.png'
import { NavLink } from 'react-router-dom'


const Header = () =>{
    return(
        <div className='header'>
            <div className='nav_top'>
                <NavLink to="/"><div className='nav_items'>home</div></NavLink>
                <NavLink to="/aboutus"><div className='nav_items'>about us</div></NavLink>
                <NavLink to="/ourwork"><div className='nav_items'>work</div></NavLink>
                <NavLink to="/contactus"><div className='nav_items'>contact us</div></NavLink>
            </div>
            <div className='nav_bottom'>
                <img src={facebook} className='facebook'/>
                <img src={twitter} className='twitter'/>
                <img src={linkedIn} className='twitter'/>
            </div>
        </div>
    )
}

export default Header;