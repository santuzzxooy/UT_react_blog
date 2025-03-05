import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './style.css'

const Content = ({ nombre, precio, stock, img }) => {
    return (
        <Container className='container-content'>
            <Card className="text-center">
                <Card.Header>{precio}</Card.Header>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Img src={img} className='img'/>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{stock}</Card.Footer>
            </Card>
        </Container>
    )
}

export default Content