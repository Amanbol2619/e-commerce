import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { isAuthenticated } from '../helper/auth';
const UserRoute = ({ element: Component, ...rest }) => {
    return (
       <Routes>
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() && isAuthenticated().role === 0 ? (
                    <Component {...props} />
                ) : (
                    <Navigate replace to='/signin'/>
                )
            }
        />
       </Routes>
        
        
        
    );
};

export default UserRoute;