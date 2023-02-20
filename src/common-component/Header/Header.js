import React from 'react';
import './Header.css'
import { Navbar,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
  <Navbar bg="light" variant="light" className="shadow-sm">
    <Container>
      <Navbar.Brand className="h1">
      <Link className='nav-link' to="/"> Food Recipe App</Link>
      </Navbar.Brand>
      <ul className="h6 text-muted navbar-nav">
        <li className='nav-item'>
        <Link className='nav-link' to="/about">About Me</Link>
        </li>
      </ul>
    </Container>
  </Navbar>
    );
}

export default Header;
