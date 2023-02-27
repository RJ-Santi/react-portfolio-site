import AnimatedPage from './AnimatedPage'
import { Row } from 'react-bootstrap'
import { Skill } from '../components'
import {
  Bootstrap,
  CSS,
  HTML,
  JavaScript,
  GitHub,
  Node,
  Express,
  React,
} from './index'

function About() {
  return (
    <AnimatedPage>
      {/* Section for passions descriptions */}
      <div className='passions-container py-5'>
        <div className='passions'>
          <h1 className='text-center'>Passions.</h1>
          <div className='passion-row'>
            <img
              className='coding-gif'
              src='images/code-coding.gif'
              alt='coding-gif'
            />
            <h3>Web Development</h3>
            <p>
              I started learning how to code 5 years ago because I had a
              fascination with the functionality behind websites. Throughout my
              time learning how to code I have found a passion in creating my
              own websites, as well as enhancing others' existing sites.
            </p>
          </div>

          <div className='passion-row'>
            <img
              className='pc'
              src='images/pc-building.gif'
              alt='pc-building-gif'
            />
            <h3 className='build'>PC Building</h3>
            <p>
              I picked up a passion for PC building through my love for gaming.
              I built my first PC in 2019 and proceeded to build my second PC as
              a pandemic project. Since building my personal computers, I have
              gone on to build 5 more for clients as well as a home-server.
            </p>
          </div>
        </div>
      </div>

      {/* Sections for skills/languages logos */}
      <div className='skills-container py-5 text-center'>
        <h1 className='text-center pb-4'>Skills.</h1>

        <Row xs={1} md={2} lg={4}>
          <Skill imgUrl={HTML} imgAlt='HTML Logo' />
          <Skill imgUrl={CSS} imgAlt='CSS Logo' />
          <Skill imgUrl={JavaScript} imgAlt='JavaScript Logo' />
          <Skill imgUrl={Bootstrap} imgAlt='Bootstrap Logo' />
          <Skill imgUrl={GitHub} imgAlt='GitHub Logo' />
          <Skill imgUrl={Node} imgAlt='Node.js Logo' />
          <Skill imgUrl={Express} imgAlt='Express.js Logo' />
          <Skill imgUrl={React} imgAlt='React Logo' />
        </Row>
      </div>
    </AnimatedPage>
  )
}

export default About
