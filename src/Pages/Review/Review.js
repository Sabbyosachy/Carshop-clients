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
        <div className="py-5 addproduct">
        <h3 className=" fw-bold text-warning">Your Opinion</h3>
        <span className="fw-bold text-danger mb-5">Please Giveus Review</span>
        <div className="row py-5">
            <div className="col-md-6 col-12">
                <img className="w-50" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/modern_design_v3wv.svg" alt="" srcset="" />
            </div>
            <div className="col-md-6 col-12 pt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="Name" required />   
                <input type="text" {...register("description")} placeholder="Your Opinion"  required/>   
                <input type="number" {...register("rating")} placeholder="Rating" required />     
                <input type="url" {...register("img")} placeholder="img" required />   
                <input className="btn1" type="submit"  /> 
            </form>
            </div>
        </div>
    </div>
    );
};

export default Review;