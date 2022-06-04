import Carousel from 'react-bootstrap/Carousel'

function Projects() {
  return (
    <div name='projects' className='project-container'>
      <h2 className='text-center pt-5'>Projects.</h2>
      <p className='text-center p-4 mx-auto w-50 project-description'>
        Below are a few projects in my portfolio that showcase a variety of my
        different development skills. You can see more projects like these by
        visiting my Github page at the link in the footer!
      </p>

      <Carousel>
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
              <div className='overlay-text'>
                Click to View <br /> To-Do List Project
              </div>
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

        <Carousel.Item>
          <a
            href='https://rj-santi.github.io/weather-app/'
            className='stretched-link'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='d-block w-100'
              src='images/weatherdark.jpg'
              alt='Second slide'
            />
            <div className='overlay'>
              <div className='overlay-text'>
                Click to View <br /> Weather Project
              </div>
              <Carousel.Caption>
                <h3>Weather Project</h3>
                <p>
                  This application detects the user's location with Geolocation
                  API and accesses the API from OpenWeatherMap.com in order to
                  show the weather for the user's location.
                </p>
                <small className='text-muted'>
                  Built with: HTML, CSS, Bootstrap, JS
                </small>
              </Carousel.Caption>
            </div>
          </a>
        </Carousel.Item>

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
              <div className='overlay-text'>
                Click to View <br />
                Github Finder Project
              </div>
              <Carousel.Caption>
                <h3>Github User Finder Project</h3>
                <p>
                  This application can be used to find Github users by name. It
                  displays a full profile for the user including statistics and
                  links to the profile and repos.
                </p>
                <small className='text-muted'>
                  Built with: HTML, CSS, Tailwind, DaisyUI, JS, React
                </small>
              </Carousel.Caption>
            </div>
          </a>
        </Carousel.Item>

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
              <div className='overlay-text'>
                Click to View <br />
                Feedback UI Project
              </div>
              <Carousel.Caption>
                <h3>Feedback Application</h3>
                <p>
                  This application can be used to add feedback functionality to
                  an existing site.
                </p>
                <small className='text-muted'>
                  Built with: HTML, CSS, Tailwind, JS, React
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
