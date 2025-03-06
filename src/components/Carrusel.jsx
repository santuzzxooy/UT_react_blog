import Carousel from 'react-bootstrap/Carousel';


const carrusel = () => {
    return (
        <Carousel slide={false}>
            <Carousel.Item>
                <img
                    alt=""
                    src="https://i.etsystatic.com/35898659/r/il/c51c1d/4136728277/il_fullxfull.4136728277_25td.jpg"
                    width="800"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    alt=""
                    src="https://englishonline.britishcouncil.org/wp-content/uploads/2022/02/image7-43-596x450.jpg"
                    width="800"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img alt=""
                    src="https://www.fluentu.com/blog/wp-content/uploads/site//3/vocabulario-de-redes-sociales-en-ingles-2.jpg.webp"
                    width="800"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default carrusel