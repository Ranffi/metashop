import React from 'react';
import {Routes, Route} from 'react-router-dom'

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
            </Routes>
        </>
    );
}

export default Router;
