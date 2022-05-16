
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../helper/auth";
import { useSelector } from "react-redux";


const Header = () => {
    let navigate = useNavigate();

    const { cart } = useSelector(state => state.cart);
   
    const handleLogout = (evt) => {
        logout(() =>{
            navigate('/signin', {replace: true})

        })
    };
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                   <i className="fab fa-cuttlefish"></i> Amo </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        {!isAuthenticated() && (
                            <Fragment>

                                <li className="nav-item">
                                    <Link to='/' className="nav-link">
                                       <i className="fas fa-home"> </i> Нүүр хуудас
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/shop' className="nav-link">
                                    <i class="fa-solid fa-burger"></i> Хоол
                                    </Link>
                                </li>
                                <li className="nav-item mx-2 ">
                                    <Link to='/cart' className="nav-link" style={{ position: 'relative'}}>
                                       <i className="fas fa-shopping-cart"> </i> Захиалга
                                       <span className=" mt-1 mx-1 translate-middle badge rounded-pill bg-danger" style={{ position: 'absolute', top: '0px'}}> {cart.length} </span>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to='/signup' className="nav-link">
                                       <i className="fas fa-edit"></i> Бүртгүүлэх
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signin' className="nav-link">
                                      <i className="fas fa-user-edit"></i> Нэвтрэх
                                    </Link>
                                </li>
                            </Fragment>
                        )}
                        {isAuthenticated() && isAuthenticated().role === 0 && (
                            <Fragment>

                                <li className="nav-item">
                                    <Link to='/user/dashboard' className="nav-link">
                                        Дашбоард
                                    </Link>
                                </li>

                            </Fragment>
                        )}
                         {isAuthenticated() && isAuthenticated().role === 1 && (
                            <Fragment>

                                <li className="nav-item">
                                    <Link to='/admin/dashboard' className="nav-link">
                                        Самбар
                                    </Link>
                                </li>

                            </Fragment>
                        )}

                    {isAuthenticated() && (
                            <Fragment>

                                <li className="nav-item">
                                    <button
                                    
                                    className="btn btn-success"
                                    onClick={handleLogout}
                                      
                                    
                                    >
                                        Гарах
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