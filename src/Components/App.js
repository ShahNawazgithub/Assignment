import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'

import Footer from './Footer'
import Home from './Home'
import Images from './Images'
import Login from './Login'




import Navbar from './Navbar'
import SignUp from './SignUp'

export default function App() {
  return (
    <>
   <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/image-gallary'element={<Images/>}/>
    <Route path='/log-in'element={<Login/>}/>
    <Route path='/sign-up'element={<SignUp/>}/>
    <Route path='/contact-us'element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
   <Footer/>
   </>
  )
}
