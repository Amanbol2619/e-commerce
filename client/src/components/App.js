import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';
import Home from './Home';
import NotFound from './NotFound';
import Signin from './Signin';
import Signup from './Signup';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';


 const App = () => (
  <BrowserRouter>

   <Header/>
   <main>
     <Routes>
       <Route   path='/' element={<Home/>}/>
       <Route   path='/signup' element={<Signup/>}/>
       <Route   path='/signin' element={<Signin/>}/>
       <Route   path='/user/dashboard' element={<UserDashboard/>}/>
       <Route   path='/admin/dashboard' element={<AdminDashboard/>}/>
       <Route  element={<NotFound/>} />
     </Routes>
   </main>

  </BrowserRouter>
 );

export default App;
