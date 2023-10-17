import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import AddProducts from './Pages/AddProducts'
import ProductsDetails from './Pages/ProductsDetails'
import AllSales from './Pages/AllSales'
import AllWarehouses from './Pages/AllWarehouses'
import AddWarehouse from './Pages/AddWarehouse'
import WarehouseDetails from './Pages/WarehouseDetails'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails" element={<ProductsDetails />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/sales" element={<AllSales />} />
        <Route path="/all-warehouse" element={<AllWarehouses />} />
        <Route path="/add-warehouse" element={<AddWarehouse />} />
        <Route path="/warehouse-details" element={<WarehouseDetails />} />
      </Routes>
    </>
  )
}

export default Routing
