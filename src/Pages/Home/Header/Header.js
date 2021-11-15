import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user}=useAuth();
  
  //Header set company name and brand logo
    return (
        <div>
 <Navbar fixed="top" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><i class="fas fa-car"></i><span className="text-head">Zee <span className="text-danger">cars</span></span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      {/* Navlink set  */}
      
      <Nav className="ms-auto">
        <NavLink className="navs1" to="/home"> Home</NavLink>
        <NavLink className="navs1" to="/explore"> Explore</NavLink>
        

        {
          user?.email ?
          <NavLink className="navs1" to="/dashbord">Dashboard</NavLink>:
           <NavLink className="navs1" to="/login">Login</NavLink>
          
          }
          <h6 className="mt-2"><span className="text-danger p-3">{user?.displayName}</span></h6>       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;