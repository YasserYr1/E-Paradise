import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import {  UserContextProvider } from './context/UserContext'
import Product1 from './producsPage/Product1'
import CartContextProvider from './context/CartContext'
import Product2 from './producsPage/Product2'
import Product3 from './producsPage/Product3'
import Products from './pages/Products'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCart from './payement/ShoppingCart'
import ShippingForm from './payement/ShippingForm'
import PayementForm from './payement/PayementForm'

const App = () => {
  axios.defaults.baseURL = "http://localhost:4001";
  axios.defaults.withCredentials = true;
  
  return (

    <UserContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path={'/'} element={<Layout />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/products'} element={<Products />} />
          <Route path={'/product/:id'} element={<Product1 />} />
          <Route path={'/superQuality'} element={<Product2 />} />
          <Route path={'/specialOffer'} element={<Product3 />} />
          <Route path={'/bag'} element={<ShoppingCart />} />
          <Route path={'/order'} element={<ShippingForm />} />
          <Route path={'/payement'} element={<PayementForm />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false}/> 
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App
