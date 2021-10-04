import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../assets/images/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="text-center py-5 not-found">
            <div className="pt-5">
                <img src={img} className="w-25 pt-4" alt="404 Not Found" />
                <h1>Oops... Page Not Found!</h1>
                <p> Sorry the page could not be found here</p>
                <Button className="login-btn"><Link to="/home">Back To Home</Link></Button>
            </div>
        </div>
    );
};

export default NotFound;