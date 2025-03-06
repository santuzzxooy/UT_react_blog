import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './style.css'

const Content = ({ title, subtitle, fecha, link, img, text, text2, text3 }) => {
    return (
        <Container className='container-content'>
            <Card className="text-center">
                <Card.Header>{subtitle}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={img} className='img' />
                    <Card.Text>
                        <p>{text}</p>
                        <p>{text2}</p>
                        <p>{text3}</p>
                    </Card.Text>
                    <a href={link} target="_blank">
                        <Button variant="danger">Read full</Button>
                    </a>
                </Card.Body>
                <Card.Footer className="text-muted">date: {fecha}</Card.Footer>
            </Card>
        </Container>
    )
}

export default Content