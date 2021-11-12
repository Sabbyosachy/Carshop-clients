import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Product.css';

const Product = () => {
    const { user } = useAuth();
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit,reset} = useForm();
    
    const onSubmit= data =>{
        console.log(data);
        axios.post('http://localhost:5000/orders',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Thankyou For Purchasing')
                reset();
            }
        })
    }

     
    useEffect(() => {
             fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div className="product__container text-center py-5 mt-5">
            <div className="container cardb">
                <Card className="card" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                        {product.description}
                        <h5>{product.price}</h5>
                        </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
            <div className=" addproduct">
      <h2 className="fw-bold text-warning mt-5 world pb-3" >Please Fillup The Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("username")} value={user?.displayName} required />     
      <input type="text" {...register("address")} placeholder="Address" required />    
      <input type="text" {...register("name")} value={product?.name} required />    
      <input type="email" {...register("email")} value={user?.email}  required/>     
      <input type="text" {...register("price")} value={product?.price} required />   
      <input type="number" {...register("phone")} placeholder="Phone Number" required />        
      <input className="btn1" type="submit"  /> 
    </form>
    </div>
        </div>
    );
};

export default Product;