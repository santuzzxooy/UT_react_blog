import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'

const Header = () => {
  return (
    <Navbar>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        TOLIMA UNIVERSITY english blog
      </Navbar.Brand>
      <a href="">
      <Button variant="outline-danger">Members</Button>
      </a>
    </Container>
  </Navbar>
  )
}

export default Header