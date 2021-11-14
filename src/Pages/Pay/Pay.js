import React from 'react';
import { useForm } from "react-hook-form";
import './Pay.css';

const Pay = () => {
    const { register} = useForm();
    return (
        <div className="py-5 addproduct">
             <h3 className="fw-bold">Pay For Product</h3>
            <span className="fw-bold text-danger mb-4">Using Cash And Cards</span>

            <div className="row py-5">
                <div className="col-md-6">
                    <h5 className="pt-5 mt-5"> Payment Methods </h5>
                    <form>
                <input type="text" {...register("name")} placeholder="Name" required />   
                <input type="text" {...register("description")} placeholder="Your Opinion"  required/>   
                <input type="number" {...register("rating")} placeholder="Rating" required />     
                <input type="url" {...register("img")} placeholder="img" required />   
                <input className="btn1" type="submit"  /> 
            </form>
                </div>
                <div className="col-md-6">
                    <img className="w-75" src="https://i.ibb.co/GJCfLC2/pay.png" alt="" srcset="" />
                </div>

            </div>


        </div>
    );
};

export default Pay;