import { Carousel } from 'react-bootstrap'

const Project = ({
  siteUrl,
  imgSrc,
  imgAlt,
  projectName,
  projectDescription,
  projectLanguages,
}) => {
  return (
    <a
      href={siteUrl}
      className='stretched-link'
      target='_blank'
      rel='noreferrer'
    >
      <img className='d-block w-100' src={imgSrc} alt={imgAlt} />
      <div className='overlay'>
        <div className='overlay-text'>Click to View</div>
        <Carousel.Caption>
          <h3>{projectName}</h3>
          <p>{projectDescription}</p>
          <small className='text-muted'>Built With: {projectLanguages}</small>
        </Carousel.Caption>
      </div>
    </a>
  )
}

export default Project
