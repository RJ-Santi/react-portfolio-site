import Carousel from 'react-bootstrap/Carousel'
import AnimatedPage from './AnimatedPage'
import { CaretDown } from 'react-bootstrap-icons'
import { motion } from 'framer-motion'
import Project from '../components/layout/Project'
import {
  Ferran,
  Secure,
  RealEstate,
  Store,
  ToDo,
  GhFinder,
  FeedbackSite,
} from '../pages'

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
            <Project
              siteUrl='https://www.ferranchizzefilms.com/'
              imgSrc={Ferran}
              imgAlt='Ferranchizze Films landing page.'
              projectName='Ferranchizze Films'
              projectDescription='Portfolio site for a client who does filming and
                    photography. Wanted a professional looking website to
                    display his work and a portal for people to contact him and
                    find his socials.'
              projectLanguages='HTML, CSS, Bootstrap, JS/React, React Parallax,
                    Framer Motion, and MailJS'
            />
          </Carousel.Item>
          {/* Secure Storage Client Project */}
          <Carousel.Item>
            <Project
              siteUrl='https://www.securestorageinc.com/'
              imgSrc={Secure}
              imgAlt='Secure Storage Inc. landing page.'
              projectName='Secure Storage Website'
              projectDescription='This site is built for a client who wanted a new website for
                    their company. It is fully responsive and compliant with all
                    browsers. It allows potential clients to get an idea of what
                    the company offers and fluidly contact the business owner.'
              projectLanguages='HTML, CSS, Bootstrap, JS/React, and MailJS'
            />
          </Carousel.Item>
          {/* House marketplace carousel */}
          <Carousel.Item>
            <Project
              siteUrl='https://house-marketplace-iota-two.vercel.app/'
              imgSrc={RealEstate}
              projectName='Real Estate Application'
              projectDescription='This is a mock real estate application that allows users to
                    view, list, and edit their property. Utilizing firebase
                    authentication and storage the application is able to
                    display listings stored in the database and authenticate
                    certain features for registered users.'
              projectLanguages='HTML, CSS, JS/React'
            />
          </Carousel.Item>
          {/* Ecommerce Carousel */}
          <Carousel.Item>
            <Project
              siteUrl='https://ecommerce-nine-zeta.vercel.app/'
              imgSrc={Store}
              imgAlt='eCommerce landing page.'
              projectName='eCommerce Project'
              projectDescription='Fully functional online store that uses the Sanity CMS to
                    store data and Stripe for payment processing.'
              projectLanguages='NextJS, CSS, Sanity, Stripe'
            />
          </Carousel.Item>
          {/* To-do List Carousel */}
          <Carousel.Item>
            <Project
              siteUrl='https://rj-santi.github.io/ToDoList/'
              imgSrc={ToDo}
              imgAlt='Home page for to-do list application.'
              projectName='To-Do List Project'
              projectDescription='This application allows you to add and remove items from a
                    list. It uses local storage to save your list for future
                    uses.'
              projectLanguages='HTML, CSS, Bootstrap, JS'
            />
          </Carousel.Item>
          {/* Github User Finder Application */}
          <Carousel.Item>
            <Project
              siteUrl='https://github-finder-tan-beta.vercel.app/'
              imgSrc={GhFinder}
              imgAlt='Home screen for the github finder application.'
              projectName='Github User Finder Project'
              projectDescription='This application can be used to find Github users by name.
                    It displays a full profile for the user including statistics
                    and links to the profile and repos.'
              projectLanguages='HTML, CSS, Tailwind, DaisyUI, JS/React'
            />
          </Carousel.Item>
          {/* Feedback application carousel */}
          <Carousel.Item>
            <Project
              siteUrl='https://sparkling-dragon-559a73.netlify.app/'
              imgSrc={FeedbackSite}
              imgAlt='Home screen for feedback application.'
              projectName='Feedback Application'
              projectDescription='This application can be used to add customer feedback functionality
                    to an existing site.'
              projectLanguages='HTML, CSS, Tailwind, JS/React'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </AnimatedPage>
  )
}

export default Projects
