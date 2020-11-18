import React from 'react';
import '../styles/header.css';
const Header = () =>{
    return(
        <div className='header'>
            <div className='nav_items'>home</div>
            <div className='nav_items'>about us</div>
            <div className='nav_items'>work</div>
            <div className='nav_items'>contact us</div>
        </div>
    )
}

export default Header;