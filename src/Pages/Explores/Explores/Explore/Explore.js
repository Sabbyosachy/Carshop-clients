import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Explore.css';
const Explore = () => {
    const[products,setProducts]=useState([]);
    const{isLoading}=useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])
    
    if(isLoading){
        return <h4 className="text-danger text-center py-5 pt-5 mt-5">Loading.........</h4>;
     
    }
    return (
        <div className="py-5 mt-5">
            <h3 className="fw-bold">Best All Cars</h3>
            <span className="fw-bold text-danger mb-4">Expensive Cars</span>
            <div className="show__item">
                {
                    products.map(product=>
                        <div className="service" key={product._id}>
                            <div>
                            <img src={product.img} alt="" />
                            </div>
                            <div className="info">
                                <h4 className="title">{product.name}</h4>
                                <p>{product.description}</p>
                                <h6>Price: {product.price}</h6>
                                <br />
                                <Link to ={`products/${product._id}`}>
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