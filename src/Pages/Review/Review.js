import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit=data=>{
       console.log(data); 
       axios.post('http://localhost:5000/reviews',data)
       .then(res=>{
           if(res.data.insertedId){
               alert("Your Opinion Are Added")
               reset();
           }
       })
    }
    return (
        <div className="addproduct">
        <h3 className=" fw-bold text-warning">Your Opinion</h3>
        <span className="fw-bold text-danger mb-5">Please Giveus Review</span>
      
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="Name" required />   
                <input type="text" {...register("description")} placeholder="Your Opinion"  required/>   
                <input type="number" {...register("rating")} placeholder="Rating" required />     
                <input type="url" {...register("img")} placeholder="img" required />   
                <input className="btn1" type="submit"  /> 
            </form>
        </div>
    );
};

export default Review;