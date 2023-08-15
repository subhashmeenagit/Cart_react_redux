import React from 'react'
import "./styles/app.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
//toaster ka kam wo upeer se send message bhejna hai
import Home from './component/Home'
import Header from './component/Header'
import Cart from './component/Cart'
import Footer from './component/Footer'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  )
}

export default App