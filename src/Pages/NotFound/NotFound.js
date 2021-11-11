import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="container mt-5">
        <img className="pt-5" width="75%" src="https://i.ibb.co/9VbG1hC/3819740.jpg" alt=""/>
        <div className="text-center py-5">
        <Link to="/home"><button className="btn_regular">Go to Home</button></Link>
        </div>
        </div>
        </div>
    );
};

export default NotFound;