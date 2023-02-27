import { Col } from 'react-bootstrap'

const Skill = ({ imgUrl, imgAlt }) => {
  return (
    <Col>
      <img className='logo py-3' src={imgUrl} alt={imgAlt} />
    </Col>
  )
}

export default Skill
