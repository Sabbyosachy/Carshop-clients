import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div>
 <Navbar fixed="top" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><span className="text-head">Zee <span className="text-danger">cars</span></span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavLink className="navs1" to="/home"> Home</NavLink>
        <NavLink className="navs1" to="/explore"> Explore</NavLink>
        {/* <NavLink className="navs1" to="/manageproduct">Manage Product</NavLink> */}
        {/* <NavLink className="navs1" to="/pay">Pay</NavLink> */}
        {/* <NavLink className="navs1" to="/mnallorder">ManageAllOrders</NavLink>
        <NavLink className="navs1" to="/myorder">My Order</NavLink> */}
        {/* <NavLink className="navs1" to="/addproduct">AddProduct</NavLink> */}
        {/* <NavLink className="navs1" to="/review">Review</NavLink>
        <NavLink className="navs1" to="/makeadmin">Make Admin</NavLink> */}
        {
          user?.email ?
          <NavLink onClick={logOut} to="/home" className="navs1">Logout</NavLink>:
          
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