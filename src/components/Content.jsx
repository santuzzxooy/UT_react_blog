import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Content.css'

const Content = () => {
    return (
        <Container>
            <Card className="text-center" style={{ width: '44rem' }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </Container>
    )
}

export default Content