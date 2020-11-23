import React from 'react';
import '../styles/header.css';
import facebook from '../img/facebook-64.png'
import twitter from '../img/twitter-64.png'
import linkedIn from '../img/linkedin-3-64.png'
import instagram from '../img/instagram-3-64.png'
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
                <a href='https://facebook.com/sevgenprod' target='_blank' rel="noreferrer"><img src={facebook} className='facebook' alt='facebook'/></a>
                <a href='https://twitter.com/sevgenprod' target='_blank' rel="noreferrer"><img src={twitter} className='twitter' alt='twitter'/></a>
                <a href='https://www.linkedin.com/in/hisani-p-dubose-31b2176/' target='_blank' rel="noreferrer"><img src={linkedIn} className='twitter' alt='linkendin'/></a>
                <a href='https://instagram.com/hisanidubose' target='_blank' rel="noreferrer"><img src={instagram} className='twitter' alt='linkendin'/></a>
            </div>
        </div>
    )
}

export default Header;