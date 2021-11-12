
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit,reset} = useForm();
    
    const onSubmit = data =>{
      console.log(data);
      reset();
    }

    return (
        <div className="py-5 addproduct">
            <h3 className=" fw-bold text-warning">App New Services</h3>
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