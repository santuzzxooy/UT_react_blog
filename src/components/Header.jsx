import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router'
import { useLocation } from "react-router-dom";
import { IoAccessibility, IoHomeSharp } from "react-icons/io5";
import './style.css'
import logo from './logo.svg'

const Header = () => {
  const location = useLocation();

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to={"/UT_react_blog/"} className='link'>
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
        {location.pathname === "/UT_react_blog/" ? (
          <Link to={"/UT_react_blog/members"}>
            <Button variant="danger">
              <IoAccessibility /> Members
            </Button>
          </Link>
        ) : location.pathname === "/UT_react_blog/members" ? (
          <Link to={"/UT_react_blog"}>
            <Button variant="danger">
              <IoHomeSharp /> Go home</Button>
          </Link>
        ) : null}
      </Container>
    </Navbar>
  )
}

export default Header