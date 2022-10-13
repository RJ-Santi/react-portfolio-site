import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact() {
  // Point reference toward DOM element of form
  const form = useRef()

  // Function to send email - can be referenced here https://www.emailjs.com/docs/examples/reactjs/
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      // Use keys and the current reference state of the form to send email
      .sendForm(
        'service_1il4qgm',
        'template_au2664h',
        form.current,
        'P2F4byEv7ghzE8BUK'
      )
      // Notify the user of the end result
      .then(
        (result) => {
          console.log(result.text)
          toast.success(
            'Success!! Ryan will get in touch with you as soon as possible.',
            { position: 'top-center' }
          )
        },
        (error) => {
          console.log(error.text)
          toast.error(
            'There seems to have been an error submitting the form. Please try again.',
            { position: 'top-center' }
          )
        }
      )

    // Reset the form so that user input doesn't remain after submission
    e.target.reset()
  }

  return (
    <>
      <div id='contact' className='contact-me p-5 row'>
        <div className='col-md-6 text-center align-self-center'>
          <h2>Get In Touch.</h2>
          <h3>If you love tech as much as I do.</h3>
          <p className='mx-auto mt-5 w-50'>
            Love tech like me? Let's have a chat and share more about our
            passion.
          </p>
          <p className='mx-auto w-50'>
            Just fill out the contact form and I'll be sure to get in touch with
            you as soon as possible!
          </p>
        </div>

        {/* User input section for email form */}
        <div className='col-md-6 py-5'>
          <form ref={form} onSubmit={sendEmail} id='contact-form'>
            <label>Name</label>
            <input
              className='form-control'
              id='name'
              type='text'
              name='user_name'
              required
            />

            <label>Subject</label>
            <input
              className='form-control'
              id='subject'
              type='text'
              name='subject'
              required
            />

            <label>Email</label>
            <input
              className='form-control'
              id='email'
              type='email'
              name='user_email'
              required
            />

            <label>Message</label>
            <textarea
              className='form-control'
              id='message'
              name='message'
              required
            />

            <ToastContainer />

            <div className='d-grid mx-auto mt-2'>
              <input
                id='submit-btn'
                className='btn'
                type='submit'
                value='Send'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
