import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import './Header.css';

const backGround = {
    'backgroundColor': '#F8F7F3'
}

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={backGround} fixed="top" className="py-3">
            <Container>
                <NavLink to="/home">
                    <img src={logo} alt="logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink className="me-5" to="/about">About</NavLink>
                        <NavLink className="me-5 fs-" to="/courses">Courses</NavLink>
                        <NavLink className="me-5" to="/pricing">Pricing</NavLink>
                        <NavLink className="me-5" to="/contact">Contact</NavLink>
                    </Nav>
                    <Button className="login-btn px-5 py-2">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;