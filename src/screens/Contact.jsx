import React from 'react'
import '../styles/contact.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
    return(
        <div className='contact'>
            <div className='box'>
            <div className='contact_form_box'>
            <div className='contact_left'>
            <h1 className='contact_title'>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat accusantium a earum at, repellendus iusto commodi amet delectus architecto vitae atque temporibus et quas voluptatum excepturi cumque. Exercitationem, nesciunt.</p>
            </div>
            <div className='contact_right'>
            <form onSubmit={this.handleSubmit}>
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
        </form>
            </div>
            </div>
            </div>
        </div>
    )
}
}

export default Contact;