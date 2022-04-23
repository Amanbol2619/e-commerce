import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import {setAuthentication, isAuthenticated} from '../helper/auth';
import {signin} from '../api/auth';


import { showErrorMsg, showLoadingMsg} from '../helper/message';
import './App.css';



const Signin = () =>{
    let navigate = useNavigate();

     useEffect(() => {

        if(isAuthenticated() && isAuthenticated().role === 1){
            navigate('/admin/dashboard', {replace: true});
        } else if(isAuthenticated() && isAuthenticated().role === 0){
           
            navigate('/user/dashboard', {replace: true});

        }
        
    },[navigate ]);

  const [formData, setFormData] = useState({
    email:'',
    password:'',
    errorMsg:false,
    loading:false,
    

  });
  const  {email, password, errorMsg, loading} = formData;
  const handleChange = (evt) =>{
    setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        errorMsg: '',
    });
};
const handleSubmit = (evt) =>{
  evt.preventDefault();
  if(isEmpty(email) || isEmpty(password)) {
    setFormData({
        ...formData, errorMsg:'Талбар хоосон байж болохгүй'
    });
} else if(! isEmail(email)){
    setFormData({
        ...formData, errorMsg:'Invailed email'
    });

} else {
    
     const { email, password} = formData;
     const data = { email, password};
      
     setFormData({...formData, loading:true});

     signin(data)
     .then(response =>{
         setAuthentication(response.data.token, response.data.user);
         
          if(isAuthenticated() && isAuthenticated().role === 1){
         console.log('admin ruuga');
         navigate('/admin/dashboard');
         
          } else{
              console.log('nnnnn');
              navigate('/user/dashboard');
          }

     })
      .catch( err =>{
        console.log('signin api function err :', err);
        setFormData({
            ...formData,
            loading:false,
            errorMsg: err.response.data.errorMessage,
        });
      });
}
    
 
     
 };


  
 const showSigninForm = () =>(
  <form className='signin-form' onSubmit={handleSubmit} noValidate>
     {/* email */}
     <div className=' form-group input-group mb-2 '>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                    <i className="fa-solid fa-envelope mt-2"></i>
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
                        <i className='fa-solid fa-lock mt-2'></i>
                    </span>
                </div>
                <input
                    name='password'
                    value={password}
                    className='form-control'
                    placeholder=' Нууц үг'
                    type='password'
                    onChange={handleChange}
                />
            </div>
             {/* signin button */}
             <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block mb-4'>
                    Нэвтрэх
                </button>

            </div>
            <p className='text-center'>
               <h5 className="border rounded-3 border-success border-3 text-danger">Don`t  Have an account ?</h5>  <Link to='/signup'><h5 className="btn rounded-pill btn-danger">  Бүртгүүлэх</h5></Link>
            </p>

  </form>

 );
  return(
    <div className='signin-container'>
            <div className='row px-2 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                {errorMsg && showErrorMsg(errorMsg)}
              
                {loading && <div className='text-center pb-4'>{showLoadingMsg() }</div>}
                    {showSigninForm()}
                   
                  {/* <p style={{color:'red'}}>  {JSON.stringify(formData)} </p> */}

                </div>
            </div>

        </div>
  );
}

export default Signin;