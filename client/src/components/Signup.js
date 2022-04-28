import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg, showLoadingMsg} from '../helper/message';
import {signup} from '../api/auth';
import { isAuthenticated } from "../helper/auth";
import './App.css';


const Signup = () => {
    let navigate = useNavigate();
    useEffect(() => {

        if(isAuthenticated() && isAuthenticated().role === 1){
            navigate('/admin/dashboard', {replace: true});
        } else if(isAuthenticated() && isAuthenticated().role === 0){
           
            navigate('/user/dashboard', {replace: true});

        }
        
    },[navigate]);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading :false,

    })
    const { username, email, password, password2, errorMsg, loading , successMsg} = formData;
    const handleChange = (evt) =>{
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: '',
            errorMsg: '',
        });
    }
    const handleSubmit = (evt) =>{
        evt.preventDefault();
       // console.log(formData);
       if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
           setFormData({
               ...formData, errorMsg:'Талбар хоосон байж болохгүй'
           });
       } else if(! isEmail(email)){
           setFormData({
               ...formData, errorMsg:'Invailed email'
           });
       } else if( ! equals(password, password2)){
           setFormData({
               ...formData, errorMsg:'Нууц үг адилхан биш байна'
           });
       } else {
           // амжилттай 
        //    setFormData({
            //    ...formData, successMsg:'Амжилттай'
       // })
            const {username, email, password} = formData;
            const data = {username, email, password};
             
            setFormData({...formData, loading:true});

            signup(data)
            .then(response =>{
                console.log('Axios signup success ',response);
                setFormData({
                    username:'',
                    email:'',
                    password:'',
                    password2:'',
                    loading: false,
                    successMsg: response.data.successMessage
                })

            })
            .catch((err ) => {
                console.log('Axios signup error:', err);
                setFormData({...formData, loading:false, errorMsg: err.response.data.errorMessage});
            });
           
       }
    };

    const showSignupForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
            {/* username */}
            <div className=' form-group input-group mb-2 '>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user mt-2'></i>
                    </span>
                </div>
                <input
                    name='username'
                    value={username}
                    className='form-control'
                    placeholder='Username'
                    type='text'
                    onChange={handleChange}
                />
            </div>
            {/* email */}
            <div className=' form-group input-group mb-2'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope mt-2'></i>
                    </span>
                </div>
                <input
                    name='email'
                    value={email}
                    className='form-control'
                    placeholder='Email address'
                    type='email'
                    onChange={handleChange}
                />
            </div>
            {/* pass */}
            <div className=' form-group input-group mb-2 '>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock mt-2'></i>
                    </span>
                </div>
                <input
                    name='password'
                    value={password}
                    className='form-control'
                    placeholder=' Create password'
                    type='password'
                    onChange={handleChange}
                />
            </div>
            {/* pass2 */}
            <div className=' form-group input-group mb-2'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock mt-2'></i>
                    </span>
                </div>
                <input
                    name='password2'
                    value={password2}
                    className='form-control'
                    placeholder='Confirm password'
                    type='password'
                    onChange={handleChange}
                />
            </div>
            {/* signup button */}
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Бүртгүүлэх
                </button>

            </div>
            <p className='text-center tex-white'>
               <h3 className="border rounded-3 border-success border-3 text-primary"> Бүртгэлтэй юу?</h3>  <Link to='/signin'><h5 className="btn rounded-pill btn-danger">Нэвтрэх</h5> </Link>
            </p>

        </form>
    );
    return (
        <div className='signup-container'>
            <div className='row px-2 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                {errorMsg && showErrorMsg(errorMsg)}
                {successMsg && showSuccessMsg(successMsg)}
                {loading && <div className='text-center pb-4'>{showLoadingMsg() }</div>}
                    {showSignupForm()}
                   
                  {/* <p style={{color:'red'}}>  {JSON.stringify(formData)} </p> */}

                </div>
            </div>

        </div>
    );



};
export default Signup;