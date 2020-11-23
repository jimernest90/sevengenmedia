import React from 'react'
import { projects } from '../components/Information'
import '../styles/work.css'

const Work = () => {
    return(
    <div className='work'>
            <h1 className='white_title'>Our Work</h1>
            <div className='box'>
                <div className='work_container'>{projects.map((project)=>{
                    let sizing = project.type === 'photo' ? 'work_photos' : 'work_vids'     
                    return(
                    <div className='work_box'> 
                        <a href={project.ref} target="_blank" rel="noreferrer"><img src={project.image} className={sizing} alt='project_image'/></a>
                        <div className='work_caption'>{project.caption}</div>
                    </div>
                    )
                })}</div>
            </div>
    </div>
    )
}
export default Work;