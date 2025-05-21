import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
