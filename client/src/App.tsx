import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './pages/admin/Admin'
import AdminUser from './pages/admin/adminuser/AdminUser'

import AdminOrder from './pages/admin/adminorder/AdminOrder'
import Home from './pages/home/Home'
import Register from './pages/Auth/register/Register'
import Login from './pages/Auth/login/Login'
import LoginAdmin from './pages/Auth/loginAdmin/LoginAdmin'
import AddUserAd from './pages/admin/adminuser/addUserAd/AddUserAd'
import AdCategory from './pages/admin/adminCategory/AdCategory'
import AdminProduct from './pages/admin/adminproduct/AdminProduct'
import Cart from './pages/cart/Cart'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}></Route>

        <Route path='loginAdmin' element={<LoginAdmin/>}/>
        <Route path='/admin' element={<Admin/>}>
          <Route path='adUser' element={<AdminUser/>}/>
          <Route path='adProduct' element={<AdminProduct/>}/>
          <Route path='adOrder' element={<AdminOrder/>}/>
          <Route path='adCategory' element={<AdCategory/>}/>
          <Route path='addUserAd' element={<AddUserAd/>}/>
          </Route>
      </Routes>
    </div>
  )
}
