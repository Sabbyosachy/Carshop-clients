import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="first">
                  <h1 className="head"><i className="fas fa-car"></i> Zee cars</h1>
                  <div className="icons-container d-flex">
                    <div className="icon">
                    <i className="fab fa-facebook"></i>
                    </div>
                    <div className="icon">
                    <i className="fab fa-youtube"></i>
                    </div>
                    <div className="icon">
                    <i className="fab fa-twitter-square"></i>
                    </div>
                  </div>
                  <p className="mt-3 texts ">Here You can find the best cars with offers</p>
                  <p className="mt-1 texts">Copywrite © 2021 Zee cars</p>
                </div>
              </div>
              
              <div className="col-md-2 col-12">
                <div className="menu-container">
              
                    <p className="menu">Home</p>
                    <p className="menu">Explore</p>
                    <p className="menu">Clients Reviews</p>
                    <p className="menu">Login</p>
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="text-start iteams">
                <p><i className="fas fa-map-marker-alt"></i> Norway,street-213</p>
               <p> <i className="fas fa-envelope"></i>  zeecars12@gmail.com</p>
                <p><i className="fas fa-phone-square-alt"></i>  +05 849 321 09</p>
                <div className="search">
                <input className="p-1" placeholder="Your Message"></input>
                <button className="btn_regu">Submit</button>
                </div>
                           
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    );
};

export default Footer;