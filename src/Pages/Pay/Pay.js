import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './Pay.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Pay = () => {
    const { register} = useForm();
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div data-aos="fade-left" className="addproduct">
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