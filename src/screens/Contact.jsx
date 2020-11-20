import React from 'react'
import '../styles/contact.css'

const Contact = () => {
    return(
        <div className='contact'>
            <div className='box'>
            <div className='contact_form_box'>
            <div className='contact_left'>
            <h1 className='contact_title'>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat accusantium a earum at, repellendus iusto commodi amet delectus architecto vitae atque temporibus et quas voluptatum excepturi cumque. Exercitationem, nesciunt.</p>
            </div>
            <div className='contact_right'>
            <form>
                <input type='text'/>
                <input type='text'/>
                <input type='submit' className='submit'/>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;