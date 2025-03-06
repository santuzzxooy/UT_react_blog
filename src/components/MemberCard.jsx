import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css'
import Container from 'react-bootstrap/Container';


const MemberCard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>David Francisco Rodriguez Lopez</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Code: 085450332023</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Nelson Daniel Rodriguez Lopez</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Code: 085450132023</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Body>
                <Card.Title>Josefth Santiago Rocha Villarraga</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Code: 085450722022</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MemberCard