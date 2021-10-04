import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Newsletter from '../Newsletter/Newsletter';
import './Pricing.css';

const Pricing = () => {
    return (
        <div>
            <div className="pricing">
                <Container className="my-5">
                    <Row>
                        <Col sm>
                            <Card className="text-center">
                                <Card.Header className="py-3">
                                    <h3>Starter Plan</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Just $20/month</Card.Title>
                                    <Card.Text>

                                        <p>Upto 2 Course</p>
                                        <p>2 Device Login in 1 Account</p>
                                        <p>Unlimited Download</p>
                                        <p>No Certification</p>
                                        <p>Upto 2 Course</p>
                                        <p>2 Device Login in 1 Account</p>
                                        <p>Unlimited Download</p>
                                        <p>No Certification</p>
                                    </Card.Text>
                                    <Button className="px-5" variant="secondary">Request Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className="text-center">
                                <Card.Header className="py-3">
                                    <h3>Basic Plan</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Just $50/month</Card.Title>
                                    <Card.Text>
                                        <p>Upto 2 Course</p>
                                        <p>2 Device Login in 1 Account</p>
                                        <p>Unlimited Download</p>
                                        <p>No Certification</p>
                                        <p>Upto 2 Course</p>
                                        <p>2 Device Login in 1 Account</p>
                                        <p>Unlimited Download</p>
                                        <p>Certification Available</p>
                                    </Card.Text>
                                    <Button className="px-5" variant="secondary">Request Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className="text-center">
                                <Card.Header className="py-3">
                                    <h3>Advance Plan</h3>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Just $100/month</Card.Title>
                                    <Card.Text>
                                        <p>Upto 2 Course</p>
                                        <p>2 Device Login in 1 Account</p>
                                        <p>Unlimited Download</p>
                                        <p>No Certification</p>
                                        <p>Upto 2 Course</p>
                                        <p>2 Device Login in 1 Account</p>
                                        <p>Unlimited Download</p>
                                        <p>Certification Available</p>
                                    </Card.Text>
                                    <Button className="px-5" variant="secondary">Request Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Newsletter></Newsletter>
        </div >
    );
};

export default Pricing;