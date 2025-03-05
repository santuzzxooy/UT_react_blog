import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './style.css'

const Content = ({ title, subtitle, fecha, img, text, text2 }) => {
    return (
        <Container className='container-content'>
            <Card className="text-center">
                <Card.Header>{subtitle}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={img} className='img' />
                    <Card.Text>
                        {text}
                        {text2}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">date: {fecha}</Card.Footer>
            </Card>
        </Container>
    )
}

export default Content