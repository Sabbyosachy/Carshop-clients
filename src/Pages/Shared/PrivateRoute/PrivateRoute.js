import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

//Private Route
const PrivateRoute = ({ children, ...rest }) => {
    const{user,isLoading}=useAuth();
    if(isLoading){
        return <h1 className="text-danger text-center py-5 pt-5 mt-5">Loading.........</h1>;
     
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;