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
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                        </ul>
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
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                        </ul>
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
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                            <li> With supporting text below as a natural</li>
                                        </ul>
                                    </Card.Text>
                                    <Button className="px-5" variant="secondary">Request Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Pricing;