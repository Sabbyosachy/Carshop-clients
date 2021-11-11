import React from 'react';
import Banner from '../Banner/Banner';
import CarosuleProduct from '../CarosuleProduct/CarosuleProduct';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Products></Products>
            <CarosuleProduct></CarosuleProduct>
          
        </div>
    );
};

export default Home;