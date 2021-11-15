import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
    const[review,setReview]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[]);
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
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
                            <img src={person.img} alt="" />
                            </div>
                            <div className="info">
                                <h4 className="title">{person.name}</h4>
                                <p>{person.description}</p>
                                <h6>Rating: {person.rating}</h6>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Reviews;