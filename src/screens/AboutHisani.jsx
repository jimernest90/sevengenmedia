import React from 'react'
import { hisaniInfo } from '../components/Information';
import '../styles/abouthisani.css'
const AboutHisani = () => {
    return(
    <div className='about_hisani'>
            <h1 className='white_title'>About Hisani</h1>
            <div className='box'>
                <div>{hisaniInfo.map((info) =>{
                    return(
                    <div className='hisani_paragraph'>{info.paragraph}</div>
                    )
                })}</div>
            </div>
    </div>
    )
}
export default AboutHisani;