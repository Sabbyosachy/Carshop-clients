import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Aos from "aos";
import "aos/dist/aos.css";
const MyOrder = () => {
    const[order,setOrder]=useState([]);
    const[orders,setOrders]=useState([]);
    const{user}=useAuth();

    // fetch order from database 

    useEffect(()=>{
        fetch('https://shielded-sea-86684.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[]);
    useEffect(()=>{
      Aos.init({duration:2000});
  },[]);

  //Order delete 

    const handleDelete = (id) => {
        const sure = window.confirm("Do you want to delete order? ");
        if (sure) {
          fetch(`https://shielded-sea-86684.herokuapp.com/delorders/${id}`, {
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

   //orders all details
   
    return (
        <div data-aos="fade-left">
            <h3 className="fw-bold">My Order</h3>
            <span className="fw-bold text-danger mb-4">Selected Product You Want To Buy</span>
            <div>
               {
                   order.filter((orders)=>orders.email===user.email).map(product=><div key={product._id}>
                       <div className="productsiteam shadow">
                                <h4 className="title">User Name: {product.username}</h4>
                                <h6 className="information" >Email: {product.email}</h6>
                                <h6 className="information" >Address: {product.address}</h6>
                                <h6 className="information" >Phone: {product.phone}</h6>
                                <h6 className="information" >Product Name: {product.name}</h6>
                                <h6 className="information" >Total cost: {product.price}</h6>
                                <br />
                                <button onClick={() => handleDelete(product._id)} className="btn">Delete</button>
                                
                            </div>

                   </div>)
               }
            </div>
        </div>
    );
};

export default MyOrder;