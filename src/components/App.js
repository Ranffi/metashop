import React, {Component, useState} from 'react'
import Router from './Router'
import fire from '../fire'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    fire.auth().signOut()
  };

  console.log('logged in?', isLoggedIn)
  return (
    <div className="App">
      <Router isLoggedin={isLoggedIn} signOut={signOut}/>
    </div>
  );
}

export default App;
