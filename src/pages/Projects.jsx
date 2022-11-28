import Carousel from 'react-bootstrap/Carousel'

function Projects() {
  return (
    // Projects introduction description
    <div name='projects' className='project-container'>
      <h2 className='text-center pt-5'>Projects.</h2>
      <p className='text-center p-4 mx-auto project-description'>
        Below are a few projects in my portfolio that showcase a variety of my
        different development skills. You can see more projects like these by
        visiting my Github page at the link in the footer!
      </p>

      {/* Projects carousel with react bootstrap formatting - can be referenced here https://react-bootstrap.github.io/components/carousel/ */}
      <Carousel>
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
                  authentication and storage the application is able to display
                  listings stored in the database and authenticate certain
                  features for registered users.
                </p>
                <small className='text-muted'>
                  Built with: HTML, CSS, JS/React
                </small>
              </Carousel.Caption>
            </div>
          </a>
        </Carousel.Item>

        {/* to-do list carousel */}
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
                  list. It uses local storage to save your list for future uses.
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
                  This application can be used to find Github users by name. It
                  displays a full profile for the user including statistics and
                  links to the profile and repos.
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
                  This application can be used to add feedback functionality to
                  an existing site.
                </p>
                <small className='text-muted'>
                  Built with: HTML, CSS, Tailwind, JS/React
                </small>
              </Carousel.Caption>
            </div>
          </a>
        </Carousel.Item>

        {/* Original portfolio carousel */}
        <Carousel.Item>
          <a
            href='https://secure-garden-44553.herokuapp.com/'
            className='stretched-link'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='d-block w-100'
              src='images/ryan-portfolio.png'
              alt='Previous portfolio site'
            />
            <div className='overlay'>
              <div className='overlay-text'>Click to View</div>
              <Carousel.Caption>
                <h3>Vanilla JS Portfolio</h3>
                <p>
                  This is my previous portfolio using Vanilla JS as opposed to
                  the current portfolio which uses React. I have also made
                  various improvements upon the original site such as improved
                  formatting and styling, as well as increased efficiency.
                </p>
                <small className='text-muted'>
                  Built with: HTML, CSS, Bootstrap, JS
                </small>
              </Carousel.Caption>
            </div>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Projects
