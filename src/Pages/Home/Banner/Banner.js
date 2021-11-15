import React, { useEffect } from 'react';
import './Banner.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    
    //Aos duration set

    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);

    return (
        
        //show some information
        
        <div className="container py-5">
            <div className="row">
            <div data-aos="fade-right" className="col-md-6 col-12 me-auto">
                  <h4 className="headline mb-1">Welcome To Zee cars <br />Company</h4>
                  <h6 className="fw-bold texa text-danger my-3">Top Most Expensive Cars in the World</h6>
                  <p className="des">Zee cars can make your Uk dream come true with a best cars in best offer.Zee cars is the biggest cars shop in uk.We provides vehicle delivery service to any place you may wish: your home, hotel, or your private jet.</p>
                  <button className="me-4 btn">See More</button>
                  <button className="me-4 btn">Buy Now</button>
                 
                </div>
            {/* banner image set  */}
                <div data-aos="fade-left" className="col-md-6 col-12">
                  <img className="image" src="https://i.ibb.co/rtnfgmK/Car-Wash-Service-Worker-Wearing-Uniform-Wiping-Out-Automobile-with-Sponge-Cleaning-Company-Employee.jpg" alt="" srcSet="" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;