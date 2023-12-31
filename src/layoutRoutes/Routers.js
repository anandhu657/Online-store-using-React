import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Logout from '../components/Logout'
import ProductDetails from '../components/ProductDetails'

function Routers() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/product/:id' element={<ProductDetails />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default Routers
