import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Items from "./ItemsPage";
import HomePage from "./HomePage";
import Login from "./sessions/Login";
import CartPage from "./CartPage";
import SingleItem from "./SingleItemPage";

const Router = ({ isLoggedin, signOut, userEmail }) => {
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
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage userEmail={userEmail} />} />
            <Route path="/categories/:id/items" element={<Items userEmail={userEmail} />}/>
            <Route path="/items/:id" element={<SingleItem userEmail={userEmail} />}/>
          </Routes>
        </>
      )}
    </>
  );
};

export default Router;
