import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import Aos from "aos";
import "aos/dist/aos.css";

const ManageAllOrder = () => {
    const[order,setOrder]=useState([]);
    const[orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[])
   
    const handleDelete = (id) => {
        const sure = window.confirm("Do you want to delete order? ");
        if (sure) {
          fetch(`http://localhost:5000/delorders/${id}`, {
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

      useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return (
        <div data-aos="fade-left">
            <h3 className="fw-bold">Manage All Order</h3>
            <span className="fw-bold text-danger mb-4">See All Orders</span>
            <div>
                {
                    order.map(product=><div key={product._id}>
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

export default ManageAllOrder;