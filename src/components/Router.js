import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Items from "./ItemsPage";
import HomePage from "./HomePage";
import Login from "./sessions/Login";
import CartPage from "./CartPage";
import SingleItem from "./SingleItemPage";

const Router = ({ isLoggedin, signOut, userEmail, user }) => {
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
            <Route path="/categories/:id/items" element={<Items user={user}/>} />
            <Route path="/items/:id" element={<SingleItem user={user}/>}  />
          </Routes>
        </>
      )}
    </>
  );
};

export default Router;
