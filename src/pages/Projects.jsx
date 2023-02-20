import Carousel from 'react-bootstrap/Carousel'
import AnimatedPage from './AnimatedPage'
import { CaretDown } from 'react-bootstrap-icons'
import { motion } from 'framer-motion'

function Projects() {
  return (
    // Projects introduction description
    <AnimatedPage>
      <div name='projects' className='project-container'>
        <div className='project-main'>
          <h1 className='p-4 mx-auto'>Projects.</h1>
        </div>
        <motion.a
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
          href='#project-location'
          className='arrow-down justify-content-center'
        >
          <CaretDown size={50} className='mb-5' />
        </motion.a>

        {/* Projects carousel with react bootstrap formatting - can be referenced here https://react-bootstrap.github.io/components/carousel/ */}
        <Carousel id='project-location'>
          {/* Ferran Client Project */}
          <Carousel.Item>
            <a
              href='https://www.ferranchizzefilms.com/'
              className='stretched-link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='d-block w-100'
                src='images/ferranchizze-films.png'
                alt='Ferranchize Films client project.'
              />
              <div className='overlay'>
                <div className='overlay-text'>Click to View</div>
                <Carousel.Caption>
                  <h3>Ferranchizze Films</h3>
                  <p>
                    Portfolio site for a client who does filming and
                    photography. Wanted a professional looking website to
                    display his work and a portal for people to contact him and
                    find his socials.
                  </p>
                  <small className='text-muted'>
                    Built with: HTML, CSS, Bootstrap, JS/React, React Parallax,
                    Framer Motion, and MailJS
                  </small>
                </Carousel.Caption>
              </div>
            </a>
          </Carousel.Item>
          {/* Secure Storage Client Project */}
          <Carousel.Item>
            <a
              href='https://www.securestorageinc.com/'
              className='stretched-link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='d-block w-100'
                src='images/secure-storage.png'
                alt='Client project for Storage Facility.'
              />
              <div className='overlay'>
                <div className='overlay-text'>Click to View</div>
                <Carousel.Caption>
                  <h3>Secure Storage Website</h3>
                  <p>
                    This site is built for a client who wanted a new website for
                    their company. It is fully responsive and compliant with all
                    browsers. It allows potential clients to get an idea of what
                    the company offers and fluidly contact the business owner.
                  </p>
                  <small className='text-muted'>
                    Built with: HTML, CSS, Bootstrap, JS/React, and MailJS
                  </small>
                </Carousel.Caption>
              </div>
            </a>
          </Carousel.Item>

          {/* House marketplace carousel */}
          <Carousel.Item>
            <a
              href='https://house-marketplace-iota-two.vercel.app/'
              className='stretched-link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='d-block w-100'
                src='images/real-estate.png'
                alt='Home page for house marketplace application.'
              />
              <div className='overlay'>
                <div className='overlay-text'>Click to View</div>
                <Carousel.Caption>
                  <h3>Real Estate Application</h3>
                  <p>
                    This is a mock real estate application that allows users to
                    view, list, and edit their property. Utilizing firebase
                    authentication and storage the application is able to
                    display listings stored in the database and authenticate
                    certain features for registered users.
                  </p>
                  <small className='text-muted'>
                    Built with: HTML, CSS, JS/React
                  </small>
                </Carousel.Caption>
              </div>
            </a>
          </Carousel.Item>

          {/* Ecommerce Carousel */}
          <Carousel.Item>
            <a
              href='https://ecommerce-nine-zeta.vercel.app/'
              className='stretched-link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='d-block w-100'
                src='images/ecommerce-home.png'
                alt='Home page for eCommerce list application.'
              />
              <div className='overlay'>
                <div className='overlay-text'>Click to View</div>
                <Carousel.Caption>
                  <h3>eCommerce Project</h3>
                  <p>
                    Fully functional online store that uses the Sanity CMS to
                    store data and Stripe for payment processing.
                  </p>
                  <small className='text-muted'>
                    Built with: NextJS, CSS, Sanity, Stripe
                  </small>
                </Carousel.Caption>
              </div>
            </a>
          </Carousel.Item>

          {/* To-do List Carousel */}
          <Carousel.Item>
            <a
              href='https://rj-santi.github.io/ToDoList/'
              className='stretched-link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='d-block w-100'
                src='images/tododark.jpg'
                alt='Home page for to-do list application.'
              />
              <div className='overlay'>
                <div className='overlay-text'>Click to View</div>
                <Carousel.Caption>
                  <h3>To-Do List Project</h3>
                  <p>
                    This application allows you to add and remove items from a
                    list. It uses local storage to save your list for future
                    uses.
                  </p>
                  <small className='text-muted'>
                    Built with: HTML, CSS, Bootstrap, JS
                  </small>
                </Carousel.Caption>
              </div>
            </a>
          </Carousel.Item>

          {/* Github User Finder Application */}
          <Carousel.Item>
            <a
              href='https://github-finder-tan-beta.vercel.app/'
              className='stretched-link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='d-block w-100'
                src='images/ghfinder.png'
                alt='Home screen for the github finder application.'
              />
              <div className='overlay'>
                <div className='overlay-text'>Click to View</div>
                <Carousel.Caption>
                  <h3>Github User Finder Project</h3>
                  <p>
                    This application can be used to find Github users by name.
                    It displays a full profile for the user including statistics
                    and links to the profile and repos.
                  </p>
                  <small className='text-muted'>
                    Built with: HTML, CSS, Tailwind, DaisyUI, JS/React
                  </small>
                </Carousel.Caption>
              </div>
            </a>
          </Carousel.Item>

          {/* Feedback application carousel */}
          <Carousel.Item>
            <a
              href='https://sparkling-dragon-559a73.netlify.app/'
              className='stretched-link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='d-block w-100'
                src='images/feedback-ui.png'
                alt='Home screen for feedback application.'
              />
              <div className='overlay'>
                <div className='overlay-text'>Click to View</div>
                <Carousel.Caption>
                  <h3>Feedback Application</h3>
                  <p>
                    This application can be used to add feedback functionality
                    to an existing site.
                  </p>
                  <small className='text-muted'>
                    Built with: HTML, CSS, Tailwind, JS/React
                  </small>
                </Carousel.Caption>
              </div>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </AnimatedPage>
  )
}

export default Projects
