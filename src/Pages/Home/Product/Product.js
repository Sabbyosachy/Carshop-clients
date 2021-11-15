import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Product.css';

//selected product show and go into place order page

const Product = () => {
    const { user } = useAuth();
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit,reset} = useForm();

    // data load from database 

    const onSubmit= data =>{
        console.log(data);
        axios.post('https://shielded-sea-86684.herokuapp.com/orders',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Thankyou For Purchasing')
                reset();
            }
        })
    }

     
    useEffect(() => {
             fetch(`https://shielded-sea-86684.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    //products show and from fillup

    return (
        <div className="product__container text-center py-5 mt-5">
            <div className="container cardb">
                <Card className="card" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                        {product.description}
                        <h6>Price: {product.price}</h6>
                        </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
            <div className=" addproduct">
      <h2 className="fw-bold text-warning mt-5 world pb-3" >Please Fillup The Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("username")} placeholder="User Name" value={user?.displayName} required />     
      <input type="text" {...register("address")} placeholder="Address" required />    
      <input type="text" {...register("name")} placeholder="Product Name" required />    
      <input type="email" {...register("email")} value={user?.email}  required/>     
      <input type="text" {...register("price")} placeholder="price" required />   
      <input type="number" {...register("phone")} placeholder="Phone Number" required />        
      <input className="btn1" type="submit"  /> 
    </form>
    </div>
        </div>
    );
};

export default Product;