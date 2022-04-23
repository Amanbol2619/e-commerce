import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { isAuthenticated } from '../helper/auth';

const AdminRoute = ({ element: Component, ...rest }) => {
    return (
       <Routes>
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() && isAuthenticated().role === 1 ? (
                    <Component {...props} />
                ) : (
                    <Navigate replace to='/signin'/>
                )
            }
        />
      </Routes>
        
    );
};

export default AdminRoute;