import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Items from "./itemsPage"
import Homepage from './homePage'
import Login from './sessions/Login'
// import homePage from './cartPage'

const Router = ({isLoggedin, signOut}) => {
    return (
        <>
            <Navbar />
            {!isLoggedin ? (
            <>
                <Routes>
                    <Route path="/" element={<Login />}>Log In</Route>
                </Routes>
            </>
            ) : (
                <>
                    <Routes>
                        <Route path='/' element={<Homepage/>} />
                        {/* <Route path='/cart' element={<cartPage/>} /> */}
                        {/* <Route path='/' element={<homePage/>} />
                        <Route path='/cart' element={<cartPage/>} /> */}
                        <Route path="/categories/:id/items" element={<Items />} />
                    </Routes>
                    <span onClick={signOut}>
                        <a href="http://localhost:3000/#">Sign out</a>
                    </span>
                </>
            )}
        </>
    );
}

export default Router;

{/* <Routes> */}
    {/* <Route path='/' element={<HomePage/>} /> */}
    {/* <Route path='/cart' element={<cartPage/>} /> */}
    {/* <Route path='/' element={<homePage/>} />
    <Route path='/cart' element={<cartPage/>} /> */}
    {/* <Route path="/items" element={<Items />} /> */}
{/* </Routes> */}