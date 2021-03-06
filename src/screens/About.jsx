import React from 'react'
import '../styles/about.css'
import { members } from '../components/Information'
import { hisaniInfo } from '../components/Information'

const About = () => {
    return (
        <div className='about'>
            <h1 className='white_title'>About Us</h1>
            <div className='box'>
                <div className='company_description'>The company, founded by Ms. DuBose, has a name based on the Native American belief that everything we do affects the seven generations that come after us.  The company is not tied to any specific genre.  It does believe in storytelling that is entertaining, inspiring, empowering, engaging  and fun. </div>
                <div>
                    {members.map((member) => {
                        let pos = member.id % 2 === 0 ? 'right' : 'left'
                        return (
                            <div className='members'>
                                <div className='member'>
                                    <div className='captions'>
                                        <div>{member.caption_one}</div>
                                        <div className='caption_two'>{member.caption_two}</div>
                                        <div className='caption_three'>{member.caption_three}</div>
                                    </div>
                                    <div className={pos}>
                                        <img src={member.image} className={pos} alt='member_image' />
                                        <div className={pos}>{member.name}</div>
                                        <div className={pos}>{member.info}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className='white_title'>About Hisani</h1>
                <div>{hisaniInfo.map((info) => {
                    return (
                        <div className='hisani_paragraph'>{info.paragraph}</div>
                    )
                })}</div>
            </div>
        </div>
    )
}
export default About;