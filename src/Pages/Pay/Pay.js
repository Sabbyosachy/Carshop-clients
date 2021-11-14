import React from 'react';
import { useForm } from "react-hook-form";
import './Pay.css';

const Pay = () => {
    const { register} = useForm();
    return (
        <div className="addproduct">
             <h3 className="fw-bold text-warning">Pay For Product</h3>
            <span className="fw-bold text-danger mb-4">Using Cash And Cards</span>
            <form>
                <input type="text" {...register("Bank Name")} placeholder="Bank Name" required />      
                <input type="number" {...register("Card Number")} placeholder="Card Number" required />     
                <input className="btn1" type="submit"  /> 
            </form>
               


        </div>
    );
};

export default Pay;