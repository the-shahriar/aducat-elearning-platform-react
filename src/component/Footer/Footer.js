import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import { Form, Stack, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import './Footer.css';

const backGround = {
    'backgroundColor': '#EAF1ED'
}

const links = {
    'textDecoration': 'none',
    'color': 'black',
    'display': 'block',
    'fontSize': '18px'
}


const Footer = () => {
    return (
        <Stack direction="horizontal" className="mx-auto justify-content-evenly" style={backGround} gap={4}>
            <div className="my-5">
                <img className="mb-3" src={logo} style={{ 'height': '60px' }} alt="logo" />
                <p>(+75) 36 6552 9564</p>
                <p>contact@domain.com</p>
                <p>Washington, United State</p>
                <div className="social-links mt-4">
                    <Nav.Link href="https://facebook.com">
                        <FontAwesomeIcon className="text-dark" icon={faFacebook} />
                    </Nav.Link>
                    <Nav.Link href="https://twitter.com">
                        <FontAwesomeIcon className="text-dark" icon={faTwitter} />
                    </Nav.Link>
                    <Nav.Link href="https://instagram.com">
                        <FontAwesomeIcon className="text-dark" icon={faInstagram} />
                    </Nav.Link>
                    <Nav.Link href="https://youtube.com">
                        <FontAwesomeIcon className="text-dark" icon={faYoutube} />
                    </Nav.Link>
                </div>
            </div>
            <div className="mb-5">
                <h3>Useful Links</h3>
                <NavLink style={links} to="/about">About us</NavLink>
                <NavLink style={links} to="/courses">Our Courses</NavLink>
                <NavLink style={links} to="/pricing">Pricing</NavLink>
                <NavLink style={links} to="/contact">Contact us</NavLink>
            </div>
            <div className="mb-5">
                <h3>Useful Links</h3>
                <NavLink style={links} to="/about">About us</NavLink>
                <NavLink style={links} to="/courses">Our Courses</NavLink>
                <NavLink style={links} to="/pricing">Pricing</NavLink>
                <NavLink style={links} to="/contact">Contact us</NavLink>
            </div>
            <div className="my-5">
                <h3 className="mt-4">Send Message to us</h3>
                <Form>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Type your message" />
                    </Form.Group>
                    <Button className="login-btn px-5 py-2" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Stack>
    );
};

export default Footer;