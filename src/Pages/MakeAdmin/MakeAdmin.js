import React, { useState } from 'react';

const MakeAdmin = () => {
    const[email,setEmail]=useState('');
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
            console.log(data);
        })


      e.preventDefault();
    }
    return (
        <div className="py-5">
              <h3 className="fw-bold">Make An Admin</h3>
            <span className="fw-bold text-danger mb-4">Create A Admin</span>
            
            <form onSubmit={handleOnSubmit}>
              <input onBlur={handleOnBlur} type="email" placeholder="Email"/>
              <input type="submit"/>


            </form>

        </div>
    );
};

export default MakeAdmin;