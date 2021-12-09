import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Router from "./Router";
import fire from "../fire";
import { useColorModeValue, Box } from "@chakra-ui/react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();


  fire.auth().onAuthStateChanged((user) => {
    if(user) {
      setUserEmail(user.email);
    }
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    fire.auth().signOut();
    navigate('/login')
  };

  return (
    <Box bg={useColorModeValue("#F2E9E4", null)} Name="App">
      <Router isLoggedin={isLoggedIn} signOut={signOut} userEmail={userEmail} />
    </Box>
  );
}

export default App;
