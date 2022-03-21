import { LogOutput } from "concurrently";
import React, { Fragment } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../helper/auth";


const Header = ({navigate}) => {
   
    const handleLogout = (evt) => {
        logout(() =>{
            navigate('/signin')

        })
    };
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        {!isAuthenticated() && (
                            <Fragment>

                                <li className="nav-item">
                                    <Link to='/' className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signup' className="nav-link">
                                        Signup
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signin' className="nav-link">
                                        Signin
                                    </Link>
                                </li>
                            </Fragment>
                        )}
                        {isAuthenticated() && isAuthenticated().role === 0 && (
                            <Fragment>

                                <li className="nav-item">
                                    <Link to='/user/dashboard' className="nav-link">
                                        Dashboard
                                    </Link>
                                </li>

                            </Fragment>
                        )}
                         {isAuthenticated() && isAuthenticated().role === 1 && (
                            <Fragment>

                                <li className="nav-item">
                                    <Link to='/admin/dashboard' className="nav-link">
                                        Dashboard
                                    </Link>
                                </li>

                            </Fragment>
                        )}

                    {isAuthenticated() && (
                            <Fragment>

                                <li className="nav-item">
                                    <button 
                                    
                                    className="nav-link"
                                    onClick={handleLogout}
                                      
                                    
                                    >
                                        Logout
                                    </button>
                                </li>

                            </Fragment>
                        )}


                    </ul>

                </div>
            </div>
        </nav>
    );
    return <header id='header'>{showNavigation()}</header>;


};

export default Header;