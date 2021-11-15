import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

//Admin route

const AdminRoute = ({ children, ...rest }) => {
    const{user,admin,isLoading}=useAuth();
    if(isLoading){
        return <h1 className="text-danger text-center py-5 pt-5 mt-5">Loading.........</h1>;
     
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;