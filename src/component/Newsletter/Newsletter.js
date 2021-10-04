import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="text-center my-5 py-5 newsletter">
            <h2>Sign Up To Our Newsletter</h2>
            <p>Subscribe to our newsletter and get many <br />
                interesting things every week
            </p>
            <div className="input-field">
                <input type="email" placeholder="enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;