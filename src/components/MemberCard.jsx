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
                  "My English is so good that even Google Translate asks me if I'm sure."
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
                  "I don't know if I'm learning English or inventing a new language."
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
                  "When I speak English, I sound so attractive that even gringos get confused."
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