import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './Reviews.css';
import Rating from 'react-rating';

const Reviews = () => {
    const[review,setReview]=useState([]);
    
    //Fech all reviews and show in home

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[]);
    //Aos animation duration 
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    //Reviews person name image,description 
    return (
        <div className="py-5">
            <div data-aos="fade-down">
            <h3 className="fw-bold">All Customer Reviews</h3>
            <span className="fw-bold text-danger mb-4">About Our Service</span>
            </div>
            <div data-aos="fade-up-right" className="show__item">
                {
                    review.map(person=>
                        <div className="service" key={person._id}>
                            <div>
                            <img className="rvimage" src={person.img} alt="" />
                            </div>
                            <div className="info">
                                <h4 className="title">{person.name}</h4>
                                <p>{person.description}</p>
                                <Rating className="text-warning" initialRating={person.rating}
                                 fullSymbol="fas fa-star fa-1x"emptySymbol="far fa-star fa-1x" placeholderSymbol="fas fa-star-half-alt fa-1x" readonly></Rating>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Reviews;