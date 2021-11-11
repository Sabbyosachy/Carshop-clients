import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
 <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><span className="text-head">Zee <span className="text-danger">cars</span></span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavLink className="navs1" to="/home"><i class="fas fa-home"></i> Home</NavLink>
        <NavLink className="navs1" to="/explore"><i class="fas fa-car"></i> Explore</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;