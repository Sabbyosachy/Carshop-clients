import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';
const Explore = () => {
    const[products,setProducts]=useState([]);
    useEffect(() => {
        fetch('./fake.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="py-5">
            <h3 className="fw-bold">Best All Cars</h3>
            <span className="fw-bold text-danger mb-4">Expensive Cars</span>
            <div className="show__item">
                {
                    products.map(product=>
                        <div className="service" key={product.id}>
                            <div>
                            <img src={product.img} alt="" />
                            </div>
                            <div className="info">
                                <h4 className="title">{product.name}</h4>
                                <p>{product.description}</p>
                                <h6>Price: {product.price}</h6>
                                <br />
                                <Link to ={`products/${product.id}`}>
                                    <button className="btn">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Explore;