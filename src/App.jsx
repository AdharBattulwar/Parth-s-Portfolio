import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Homepage  from './components/Homepage';
import Nectar from './components/NectarInside';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Nectar" element={<Nectar/>}/>
    </Routes>
    </>
  )
}

export default App
