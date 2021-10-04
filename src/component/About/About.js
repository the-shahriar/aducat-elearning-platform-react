import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarMinus, faMedal } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import img from '../../assets/images/404.png';
import img1 from '../../assets/images/funfact1.png';
import img2 from '../../assets/images/funfact2.png';
import img3 from '../../assets/images/funfact3.png';
import img4 from '../../assets/images/funfact4.png';
import './About.css';

const iconStyle = {
    'fontSize': '32px',
    'color': 'white'
}

const background = {
    'backgroundColor': '#E5F0EB',
    'margin': '40px'
}


const About = () => {
    return (
        <div className="my-5">
            <div className="my-5 pt-5 text-center side-div">
                <h2 className="my-5">Supreme Work Flows</h2>
                <Container className="pb-5 pt-3">
                    <Row>
                        <Col sm className="p-5">
                            <button className="buttonStyle">
                                <FontAwesomeIcon style={iconStyle} icon={faSearch} />
                            </button>
                            <h2 className="mt-4">Find Your Course</h2>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum eius ratione facilis beatae dolore iure. Saepe dolore molestiae veniam.</p>
                        </Col>
                        <Col sm className="p-5">
                            <button className="buttonStyle">
                                <FontAwesomeIcon style={iconStyle} icon={faCalendarMinus} />
                            </button>
                            <h2 className="mt-4">Book Your Seat</h2>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium, perspiciatis quae fugiat ipsam repellat facilis laudantium harum ipsum.</p>
                        </Col>
                        <Col sm className="p-5">
                            <button className="buttonStyle">
                                <FontAwesomeIcon style={iconStyle} icon={faMedal} />
                            </button>
                            <h2 className="mt-4">Instant Certified</h2>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla tempora laborum nisi ipsam eligendi libero corporis necessitatibus!</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Stack direction="horizontal" className="m-5" gap={5}>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="side-div">
                    <h2>We Make Your Learning <br /> Through Awesome</h2>
                    <p className="mt-4 w-75">Become the dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
                </div>
            </Stack >

            <div className="text-center my-5 py-5" style={background}>
                <Container>
                    <Row>
                        <Col className="bg-white py-4 me-5 about-col">
                            <img src={img1} alt="" />
                            <h2>2500+</h2>
                            <p>Online Course</p>
                        </Col>
                        <Col className="bg-white py-4 me-5 about-col">
                            <img src={img2} alt="" />
                            <h2>7000+</h2>
                            <p>Students Enrolled</p>
                        </Col>
                        <Col className="bg-white py-4 me-5 about-col">
                            <img src={img3} alt="" />
                            <h2>100+</h2>
                            <p>Expert Instructors</p>
                        </Col>
                        <Col className="bg-white py-4 about-col">
                            <img src={img4} alt="" />
                            <h2>9000+</h2>
                            <p>Hours Content</p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default About;