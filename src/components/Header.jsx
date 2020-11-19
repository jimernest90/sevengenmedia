import React from 'react';
import '../styles/header.css';
import facebook from '../img/facebook-16.png'
import twitter from '../img/twitter-16.png'

const Header = () =>{
    return(
        <div className='header'>
            <div className='nav_top'>
                <div className='nav_items'>home</div>
                <div className='nav_items'>about us</div>
                <div className='nav_items'>work</div>
                <div className='nav_items'>contact us</div>
            </div>
            <div className='nav_bottom'>
                <img src={facebook} className='facebook'/>
                <img src={twitter} className='twitter'/>
            </div>
        </div>
    )
}

export default Header;