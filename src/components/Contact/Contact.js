import React from "react"
import emailjs from 'emailjs-com'
import "./Contact.css"

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_bg3aw48', 'template_4jahplr', e.target, 'user_4rQNdQSMXRXWsnIvNXxgz')
      .then((res) => {
        alert('Email Sent')
      })
      .catch((err) => {
        alert('Cannot Send')
      })
  }

  return (
    <div className = "contact">
      <form className='contact-form' onSubmit={sendEmail}>
        <div className = 'info'>
          <label>Name:
            <input
              className = "input"
              type='text'
              name='name' />
          </label>
        </div>
        <div className = 'info'>
          <label>Email:
            <input
              className = "input"
              type='text'
              name='email' />
          </label>
        </div>
        <div className = 'message'>
          <label>Message:</label>
          <br/>
          <br/>
          <textarea
            className = "message-input"
            name='message'>
          </textarea>
        </div>
        <input 
          className = "submit"
          type='submit'
          name='submit'
          value='Send'
        />
      </form>
    </div>
  )
}
export default Contact