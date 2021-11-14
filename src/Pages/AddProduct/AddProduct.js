
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit,reset} = useForm();
    
    const onSubmit = data =>{
      console.log(data);
      axios.post('http://localhost:5000/products',data)
      .then(res=>{
        if(res.data.insertedId){
          alert('New Product Added');
          reset();
      }
      })
    }

    return (
        <div className="addproduct">
            <h3 className=" fw-bold text-warning">Add New Product</h3>
            <span className="fw-bold text-danger mb-5">New Iteams Add</span>
  
      
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} placeholder="name" required />   
                    <input type="text" {...register("description")} placeholder="description"  required/>   
                    <input type="text" {...register("price")} placeholder="price" required />     
                    <input type="url" {...register("img")} placeholder="img" required />   
                    <input className="btn1" type="submit"  /> 
                </form>
                 </div>
          
        
    );
};

export default AddProduct;