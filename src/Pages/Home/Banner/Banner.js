import React from 'react';
import { Button} from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container py-3">
            <div className="row">
            <div className="col-md-6 col-12 me-auto">
                  <h4 className="headline mb-1">Welcome To Zee cars <br />Company</h4>
                  <h6 className="fw-bold texa text-danger my-3">Top Most Expensive Cars in the World</h6>
                  <p className="des">Zee cars can make your Uk dream come true with a best cars in best offer.Zee cars is the biggest cars shop in uk.We provides vehicle delivery service to any place you may wish: your home, hotel, or your private jet.</p>
                  <Button className="me-4 btn">See More</Button>
                 
                </div>
                <div className="col-md-6 col-12">
                  <img className="image" src="https://i.ibb.co/rtnfgmK/Car-Wash-Service-Worker-Wearing-Uniform-Wiping-Out-Automobile-with-Sponge-Cleaning-Company-Employee.jpg" alt="" srcset="" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;