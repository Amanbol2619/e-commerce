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
      .then( (response) =>{
          setAuthentication(response.data.token, response.data.user);
        
        if( isAuthenticated().role && isAuthenticated().role === 1 ) {
                   
            console.log('admin ruugaa');
            navigate('/admin/dashboard', {replace: true});
        } else{
            console.log('redirecting to user Dashboard');
            navigate('/user/dashboard', {replace: true});

        }


      })
      .catch( err =>{
        console.log('signin api function err :', err);
      });
}
    
 
     
 };


  
 const showSigninForm = () =>(
  <form className='signin-form' onSubmit={handleSubmit} noValidate>
     {/* email */}
     <div className=' form-group input-group '>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
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
            <div className=' form-group input-group '>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
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
                <button type='submit' className='btn btn-primary btn-block'>
                    Нэвтрэх
                </button>

            </div>
            <p className='text-center tex-white'>
               Don`t  Have an account ?  <Link to='/signup'> Бүртгүүлэх</Link>
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