import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react";
import Navbar from './Componets/Navbar/Navbar';
import Cart from './Componets/Cart/Cart'
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
//import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <>
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App


//route path='/detalle/detalleId' element={<ItemDetailContainer />} />