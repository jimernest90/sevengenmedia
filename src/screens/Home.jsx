import React from 'react'
import '../styles/home.css'
import logo from '../img/logo.jpg'

const Home = () =>{
    return (
        <div className='home'>
        <h1>Seven Gen Media, LLC</h1>
        <div className='box'>
            <h2>Movies, Documentaries, Screenwriting…On The Rise!</h2>
            <img src={logo} alt='logo' class='logo'/>
            <div className='awards'>
                <div className='award'>2020 - Community Service Award/ Women in Media</div>
                <div className='award'>2015 - Director of the Year Award/ Princeton TV</div>
                <div className='award'>2014 - Historical Documentary Award/ New Brunswick African American Cultural and Heritage Committee (NJ)
                </div>
                <div className='award'>2006- Broader Vision Award/ Garden State Film Festival</div>
            </div>
        </div>
        </div>
    )
}
export default Home;