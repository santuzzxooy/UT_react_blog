import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router'
import './style.css'
import logo from './logo.svg'

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to={"/UT_react_blog"} className='link'>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            UT english blog
          </Link>
        </Navbar.Brand>
        <Link to={"/UT_react_blog/members"}>
          <Button variant="danger">Members</Button>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header