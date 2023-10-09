import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import AddProducts from './Pages/AddProducts'
import ProductsDetails from './Pages/ProductsDetails'
import AllSales from './Pages/AllSales'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails" element={<ProductsDetails />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/sales" element={<AllSales />} />
      </Routes>
    </>
  )
}

export default Routing
