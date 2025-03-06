import Header from '../components/Header';
import Carrusel from '../components/Carrusel';
import Container from 'react-bootstrap/Container';
import MemberCard from '../components/MemberCard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './style.css'

const Members = () => {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <MemberCard />
      <Breadcrumb />
      <Container className='contenedor'>
        <Carrusel />
      </Container>
      <Breadcrumb />
    </div>
  )
}

export default Members