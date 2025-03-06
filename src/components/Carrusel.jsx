import Carousel from 'react-bootstrap/Carousel';


const carrusel = () => {
    return (
        <Carousel slide={false}>
            <Carousel.Item>
                <img alt="" src="https://i.postimg.cc/RVn1Rvqk/mac.jpg" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="" src="https://i.postimg.cc/RVn1Rvqk/mac.jpg" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="" src="https://i.postimg.cc/RVn1Rvqk/mac.jpg" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default carrusel