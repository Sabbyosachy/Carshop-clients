import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Aos from "aos";
import "aos/dist/aos.css";
import './Products.css';

const Products = () => {
    const[products,setProducts]=useState([]);
    const{isLoading}=useAuth();
    
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    if(isLoading){
        return <h4 className="text-danger text-center py-5 pt-5 mt-5">Loading.........</h4>;
     
    }
    return (
        <div className="py-5">
             <div data-aos="fade-down">
             <h3 className="fw-bold">All Products</h3>
            <span className="fw-bold text-danger mb-4">Buy Any Cars</span>
             </div>
            <div  data-aos="fade-up" className="show__item">
                {
                    products.slice(0,6).map(product=>
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

export default Products;