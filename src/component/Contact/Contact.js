import React from 'react';
import { Form, Button, Stack } from 'react-bootstrap';
import img from '../../assets/images/404.png';
import './Contact.css';

const Contact = () => {
    return (
        <Stack direction="horizontal" className="text-center m-5" gap={5}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="form-div">
                <div>
                    <h2>Do you need any help!</h2>
                    <h4 className="mb-5">Send a message to us we are always here for you</h4>
                </div>
                <div className="form mt-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Website" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlTextarea1">
                            <Form.Control as="textarea" rows={5} placeholder="Type your message" />
                        </Form.Group>
                        <Button className="login-btn px-5 py-2" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </Stack >
    );
};

export default Contact;