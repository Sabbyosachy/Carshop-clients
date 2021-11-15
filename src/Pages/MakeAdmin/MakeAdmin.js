import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const MakeAdmin = () => {
    const[email,setEmail]=useState('');
    const[success,setSuccess]=useState(false);
    const handleOnBlur=e=>{
        setEmail(e.target.value);
    }
    const handleOnSubmit=e=>{
        const user={email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })


      e.preventDefault();
    }
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div>
              <div data-aos="fade-left">
              <h3 className="fw-bold text-warning">Make An Admin</h3>
            <span className="fw-bold text-danger mb-4">Create A Admin</span>
            
            <form onSubmit={handleOnSubmit}>
              <input className="mt-2" onBlur={handleOnBlur} type="email" placeholder="Email"/>
              <input type="submit"/>
            </form>
              </div>
            {success && 
           <h6 className="text-primary mt-5 fw-bold">New Admin Created!</h6> 
             }

        </div>
    );
};

export default MakeAdmin;