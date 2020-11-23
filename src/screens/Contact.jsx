import React from 'react'
import '../styles/contact.css'

// const encode = (data) => {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&");
//   }

  class Contact extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = { name: "", email: "", message: "" };
    // }

    /* Here’s the juicy bit for posting the form submission */

    // handleSubmit = e => {
    //   fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: encode({ "contact-form": "contact", ...this.state })
    //   })
    //     .then(() => alert("your message was sent!"))
    //     .catch(error => alert(error));

    //   e.preventDefault();
    // };

    // handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        // const { name, email, message } = this.state;
    return(
        <div className='contact'>
            <div className='box'>
            <div className='contact_form_box'>
            <div className='contact_left'>
            <h1 className='contact_title'>Contact Us</h1>
            <p>Feel free to contact us. We will get back to you as soon as possible.</p>
            </div>
            <div className='contact_right'>
            {/* <form onSubmit={this.handleSubmit} name='contact' action='/contact' method='post' >
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form> */}
          <form name='contact' action='/contact' method='post'>
            <input type='hidden' name='form-name' value='contact'/>
            <input required type='text' name='name' placeholder='Your name'/>
            <input required type='email' name='email' placeholder='Your email'/>
            <textarea required name='message' placeholder='Message' cols='30' rows='10'></textarea>
            <button type='submit' className='submit'>submit</button>
          </form>
            </div>
            </div>
            </div>
        </div>
    )
}
}

export default Contact;