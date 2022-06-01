import Container from 'react-bootstrap/Container'

function Footer() {
  return (
    <>
      <Container fluid className="footer-container pt-5">
        <a className="footer-link hoverColor" href="https://www.linkedin.com/in/ryan-santiago/" target="_blank">LinkedIn</a>
        <a className="footer-link hoverColor" href="http://www.ryansantiago.me" target="_blank">Website</a>
        <a className="footer-link hoverColor" href="https://github.com/RJ-Santi?tab=repositories" target="_blank">Github</a>
        <p className="copyright">© 2021 Ryan Santiago.</p>
      </Container>
    </>
  )
}

export default Footer
