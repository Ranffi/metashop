import React, { useState } from "react";
import Router from "./Router";
import fire from "../fire";
import axios from "axios";
const url = "http://localhost:3001";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState({})

  fire.auth().onAuthStateChanged((user) => {
    setUserEmail(user.email);
    axios.get(`${url}/user/${userEmail}`)
    .then(res =>{
      setUser(res.data) 
    })
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    fire.auth().signOut();
  };

  // console.log("logged in?", isLoggedIn);
  return (
    <div className="App">
      <Router isLoggedin={isLoggedIn} signOut={signOut} userEmail={userEmail} user={user}/>
    </div>
  );
}

export default App;
