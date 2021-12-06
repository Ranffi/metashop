import React, {Component, useState} from 'react'
import Router from './Router'
import fire from '../fire'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  console.log('logged in?', isLoggedIn)
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
