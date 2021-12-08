import React, { useState } from "react";
import Router from "./Router";
import fire from "../fire";
import { useColorModeValue, Box } from "@chakra-ui/react";
const url = "http://localhost:3001";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");


  fire.auth().onAuthStateChanged((user) => {
    setUserEmail(user.email);
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    fire.auth().signOut();
  };

  // console.log("logged in?", isLoggedIn);
  return (
    <Box bg={useColorModeValue("#F2E9E4", "#22223B")} Name="App">
      <Router isLoggedin={isLoggedIn} signOut={signOut} userEmail={userEmail} />
    </Box>
  );
}

export default App;
