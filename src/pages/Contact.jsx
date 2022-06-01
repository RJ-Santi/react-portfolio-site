function Contact() {
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
            <form id="contact-form" method="POST" action="send">
              <label>Name</label>
              <input className="form-control" id="name" type="text" name="name" required />

              <label>Subject</label>
              <input className="form-control" id="subject" type="text" name="subject" required />

              <label>Email</label>
              <input className="form-control" id="email" type="text" name="email" required />

              <label>Message</label>
              <textarea className="form-control" id="message" name="message" required></textarea>

              <div className="d-grid mx-auto mt-2">
                <button id="submit-btn" className="btn" type="submit" value="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
