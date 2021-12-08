import React, { useState } from "react";
import Router from "./Router";
import fire from "../fire";
import { useColorModeValue, Box } from "@chakra-ui/react";

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
    <Box className="App">
      <Router isLoggedin={isLoggedIn} signOut={signOut} userEmail={userEmail} />
    </Box>
  );
}

export default App;
