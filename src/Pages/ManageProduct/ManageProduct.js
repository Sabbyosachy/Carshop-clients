import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Aos from "aos";
import "aos/dist/aos.css";

const ManageProduct = () => {
    const[products,setProducts]=useState([]);
    const[orders,setOrders]=useState([]);
    const{isLoading}=useAuth();
    
    //Fetch products from database
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(()=>{
      Aos.init({duration:2000});
  },[]);
    
    if(isLoading){
        return <h4 className="text-danger text-center py-5 pt-5 mt-5">Loading.........</h4>;
     
    }
    //Delete products 

    const handleDelete = (id) => {
        const sure = window.confirm("Do you want to delete this product? ");
        if (sure) {
          fetch(`http://localhost:5000/delproducts/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                alert("Deleted Successfully");
                const remainingPlans = orders.filter((order) => order._id !== id);
                setOrders(remainingPlans);
              }
            });
        }
      };

      // products all information 
    return (
        <div data-aos="fade-left">
            <h3 className="fw-bold">Manage Products</h3>
            <span className="fw-bold text-danger mb-4">Products Are Handle</span>
            <div className="show__item">
                {
                    products.map(product=>
                        <div className="service" key={product._id}>
                            <div>
                            <img src={product.img} alt="" />
                            </div>
                            <div className="info">
                                <h4 className="title">{product.name}</h4>
                                <p>{product.description}</p>
                                <h6>Price: {product.price}</h6>
                                <br />
                              
                                    <button onClick={() => handleDelete(product._id)} className="btn">Delete Product</button>
                              
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default ManageProduct;