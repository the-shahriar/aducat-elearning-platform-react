import React from 'react';
import { Stack } from 'react-bootstrap';
import About from '../About/About';
import heroImg from '../../assets/images/hero-men2.png';
import './Home.css';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <div className="text-center m-5 px-5" >
                <Stack direction="horizontal" className="m-4" gap={5}>
                    <div className="text-start hero-div">
                        <h1> Learn Anywhere <br />Anytime from <br /> Any Device</h1>
                        <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut aliquam excepturi voluptatibus, recusandae inventore exercitationem, illo distinctio itaque cupiditate sit unde quod. Fugit eos nesciunt neque, ratione in sunt?</p>
                    </div>
                    <div className="hero-img">
                        <img src={heroImg} alt="Hero-img" />
                    </div>
                </Stack>
            </div>
            <About></About>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;