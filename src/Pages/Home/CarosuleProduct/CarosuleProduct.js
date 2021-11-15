import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './CarosuleProduct.css';
import Aos from "aos";
import "aos/dist/aos.css";

const CarosuleProduct = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
},[]);
    return (
        <div className="pt-5">
           <div data-aos="fade-down">
           <h3 className="fw-bold">All Upcoming Cars</h3>
            <span className="fw-bold text-danger mb-4">With Best Price</span>
           </div>
            <div data-aos="fade-up" className="py-5">
            <Carousel fade>
            <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.teahub.io/photos/full/86-865738_bugatti-la-voiture-noire.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className="title">Bugatti La Voiture Noire: $12.5 million</h2>
      <p className="subtitle">This breathtaking exclusive one-off Bugatti was inspired by the legendary Type 57 Atlantic of Bugatti’s earlier history.Bugatti sought to recreate the sophistication.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://cdn.motor1.com/images/mgl/we78R/s1/bugatti-centodieci-hot-weather-testing.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className="title">Bugatti Centodieci: $9 million</h2>
      <p className="subtitle">The Bugatti Centodieci is an homage to a modern classic: the EB110. The 200+ mph icon of the 90s, combined with the body today can only make for a truly amazing.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/736/pagani-huayra-imola_100736303.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className="title">Pagani Huayra Imola: $5.4 million</h2>
      <p className="subtitle">The Huayra Imola is a car that is entirely dedicated to speed.Pagani went to the length of developing special paint to finish the car in that saved 11 pounds of weight.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://cdn.wallpapersafari.com/91/26/smSefX.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className="title">Koenigsegg CCXR Trevita: $4.8 million</h2>
      <p className="subtitle">The name “Trevita” is Swedish for “three whites” which is what describes completely unique and gorgeous finish.It takes quite the car to justify that price,does the job.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://photobest1.com/wp-content/uploads/2017/02/Lamborghini-Veneno-Wallpaper-HD-01.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className="title">Lamborghini Veneno: $4.5 milion</h2>
      <p className="subtitle">The Lamborghini packed full of incredible innovation and stirring design surely worth all the hype and all the money, not least because it was a clear symbol to the world.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
    );
};

export default CarosuleProduct;