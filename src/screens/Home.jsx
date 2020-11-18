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
        </div>
        </div>
    )
}
export default Home;