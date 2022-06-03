import { useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_1il4qgm', 'template_0pp66on', form.current, 'P2F4byEv7ghzE8BUK')
    .then((result) => {
        console.log(result.text)
    }, (error) => {
        console.log(error.text)
    })
  }

  return (
    <div>
      <div id="contact" className="contact-me p-5 row">
        <div className="col-md-6 text-center align-self-center">
          <h2>Get In Touch.</h2>
          <h3>If you love tech as much as I do.</h3>
          <p className="mx-auto mt-5 w-50">Love tech like me? Lets have a chat and share more about our passion.</p>
          <p className="mx-auto w-50"> Just fill out the contact form and I'll be sure to get in touch with you as soon as possible!</p>
        </div>


        <div className="col-md-6 py-5">
          <form ref={form} onSubmit={sendEmail} id="contact-form">
            <label>Name</label>
            <input className="form-control" id="name" type="text" name="user_name" required />

            <label>Subject</label>
            <input className="form-control" id="subject" type='text' name='subject' required />

            <label>Email</label>
            <input className="form-control" id="email" type="email" name="user_email" required />

            <label>Message</label>
            <textarea className="form-control" id="message" name="message" required />

            <div className="d-grid mx-auto mt-2">
              <input id="submit-btn" className="btn" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
