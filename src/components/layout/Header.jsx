import { ReactComponent as RyanLogo } from './ryan-logo.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Header() {
  return (
    <>
      <Navbar expand='lg' sticky='top' className='navbar'>
        <Container fluid>
          <RyanLogo />
          <Navbar.Brand href='/' className='text-light'>
            Ryan's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link id='navTitle' href='/' className='text-light nav-link'>
                Home
              </Nav.Link>
              <Nav.Link
                id='navTitle'
                href='/about'
                className='text-light nav-link'
              >
                About
              </Nav.Link>
              <Nav.Link
                id='navTitle'
                href='/projects'
                className='text-light nav-link'
              >
                Projects
              </Nav.Link>
              <Nav.Link
                id='navTitle'
                href='/contact'
                className='text-light nav-link'
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
