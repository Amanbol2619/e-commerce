import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import NotFound from './NotFound';
// import AdminRoute from './AdminRoute';
// import UserRoute from './UserRoute';
import Cart from './Cart';
import Signin from './Signin';
import Signup from './Signup';
import UserPayment from './UserPayment';
import AdminDashboard from './AdminDashboard';
import AdminEditProduct from './AdminEditProduct';
import UserDashboard from './UserDashboard';

 const App = () => {

   return (

  <BrowserRouter>

   <Header/>
   <main>
     <Routes>
       <Route   path='/' element={<Home/>}/>
       <Route   path='/shop' element={<Shop/>}/>
       <Route   path='/cart' element={<Cart/>}/>
       <Route   path='/product/:productId' element={<Product/>}/>
       <Route   path='/signup' element={<Signup/>}/>
       <Route   path='/signin' element={<Signin/>}/>
       <Route   path='/user/payment' element={<UserPayment/>}/>
       <Route   path='/user/dashboard' element={<UserDashboard/>}/>
       <Route   path='/admin/dashboard' element={<AdminDashboard/>}/>
       <Route   path='/admin/edit/product/:productId' element={<AdminEditProduct/>}/>
       <Route  element={<NotFound/>} />
     </Routes>
   </main>

  </BrowserRouter>
   );
 };

export default App;
