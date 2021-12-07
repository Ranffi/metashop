import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Items from "./itemsPage";
import Homepage from "./homePage";
import Login from "./sessions/Login";
import CartPage from "./CartPage";

const Router = ({ isLoggedin, signOut }) => {
  return (
    <>
      <Navbar signOut={signOut} isLoggedin={isLoggedin} />
      {!isLoggedin ? (
        <>
          <Routes>
            <Route path="/" element={<Login />}>
              Log In
            </Route>
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<homePage />} />
            <Route path="/categories/:id/items" element={<Items />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Router;
