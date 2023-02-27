import AnimatedPage from './AnimatedPage'
import { Parallax } from 'react-parallax'
import { Row, Col } from 'react-bootstrap'
import Fuji from '../images/fuji.jpg'

function Home() {
  return (
    <AnimatedPage>
      {/* Intro section with image background */}
      <Parallax strength={-300} bgImage={Fuji}>
        <div className='landing'>
          <h1 className='name-title'>I'm Ryan</h1>
          <h2 className='job-title'>Web Developer</h2>
        </div>
      </Parallax>

      {/* Description about myself */}
      <div className='about-section container-fluid'>
        <Row
          id='about-me'
          className='about-me m-5 mx-auto'
          xs={1}
          sm={1}
          md={2}
        >
          <Col className='align-self-center text-center'>
            <img
              className='profile-picture'
              src='images/profilepicture.jpg'
              alt='Profile'
            />
          </Col>
          <Col className='text-center align-self-center'>
            <h2 className='mt-4'>Hello.</h2>
            <p className='hello'>
              My name is Ryan Santiago. I am a college graduate from the
              University of Central Florida pursuing a career in web
              development. I have a passion for all things tech & am looking
              forward to pursuing my dream of working in the industry that I
              have so much love for.
              <br />
              This is the second iteration of my personal website and my goal in
              re-building it has been to improve upon my original site with the
              utilization of React. It is responsive and also contains features
              such as a light/dark mode that changes based on the user's OS
              preferences and a functional contact form that will send an email
              directly to me using EmailJS.
            </p>
          </Col>
        </Row>
      </div>
    </AnimatedPage>
  )
}

export default Home
