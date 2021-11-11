import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Product.css';

const Product = () => {
    const { user } = useAuth();
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit} = useForm();

    useEffect(() => {
             fetch(`./fake.json/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [])



    return (
        <div className="product__container text-center py-5 mt-5">  
            <div className="product__img">
                <img src={product.img} alt="" />
            </div>
            <h1>{product.name}</h1>
            <p className="px-5">{product.description}</p>
            <h6>{product.price}</h6>
            <div className=" addproduct">
      <h2 className="fw-bold text-warning world pt-5 pb-3" >Place Your Order</h2>
      <form onSubmit={handleSubmit}>
      <input type="text" {...register("name")} value={user?.displayName} required />    
      <input type="text" {...register("address")} placeholder="Address" required />    
      <input type="email" {...register("email")} value={user?.email}  required/>   
      <input type="number" {...register("cost")} placeholder="Price" required />   
      <input type="number" {...register("phone")} placeholder="Phone Number" required />        
      <input className="btn1" type="submit"  /> 
    </form>
    </div>
        </div>
    );
};

export default Product;