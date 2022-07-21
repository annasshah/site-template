import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ProductDetails } from '../Pages/ProductDetails'



export const RouterApp = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
    </Router>
  )
}
