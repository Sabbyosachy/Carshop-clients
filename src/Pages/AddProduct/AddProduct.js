
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
        <div className="py-5 addproduct">
            <h3 className=" fw-bold text-warning">Add New Product</h3>
            <span className="fw-bold text-danger mb-5">New Iteams Add</span>
  
              <div className="row">
                <div className="col-md-6 col-12 pt-5 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name")} placeholder="name" required />   
                    <input type="text" {...register("description")} placeholder="description"  required/>   
                    <input type="text" {...register("price")} placeholder="price" required />     
                    <input type="url" {...register("img")} placeholder="img" required />   
                    <input className="btn1" type="submit"  /> 
                </form>
                </div>
                <div className="col-md-6 col-12">
                  <img className="w-75" src="https://www.shopitcommerce.com/wp-content/uploads/2019/11/undraw_product_teardown_elol-4.svg" alt="" srcset="" />
                </div>
              </div>
                 </div>
          
        
    );
};

export default AddProduct;