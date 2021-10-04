import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    console.log(props)
    const { title, category, price, enrolled, lesson, rating, totalRated, image, } = props.course
    return (
        <div className="p-3 course">
            <img src={image} style={{ 'width': '100%' }} alt="" />
            <div className="pt-3">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="category">{category}</p>
                    <h4 className="price">${price}</h4>
                </div>
                <h5 className="title">{title}</h5>
                <div className="d-flex justify-content-between align-items-center pt-3">
                    <p className="info"><FontAwesomeIcon icon={faBook} /> {lesson} Lessons</p>
                    <p className="info"><FontAwesomeIcon icon={faUser} /> {enrolled} Students</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="info">Rating <span className="category2"> {rating}</span></h5>
                    <h5 className="info">Total Rated <span className="category2">{totalRated}</span> </h5>
                </div>
            </div>
        </div>
    );
};

export default Course;