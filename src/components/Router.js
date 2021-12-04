import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Items from "./itemsPage"
import Navbar from './Navbar'
import HomePage from './homePage'
// import homePage from './cartPage'

const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                {/* <Route path='/cart' element={<cartPage/>} /> */}
                {/* <Route path='/' element={<homePage/>} />
                <Route path='/cart' element={<cartPage/>} /> */}
                <Route path="/items" element={<Items />} />
            </Routes>
        </>
    );
}

export default Router;
