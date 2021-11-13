import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import CarosuleProduct from '../CarosuleProduct/CarosuleProduct';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           
           <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <CarosuleProduct></CarosuleProduct>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;