import './App.css';
import { Route } from 'react-router-dom';
import NavBar  from './components/NavBar';
import Home from './components/Home';
import React, {useEffect, useState} from 'react';
import SmallNavBar from './components/SmallNavBar';

function App() {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// const [windowHeight, setWindowHeight] = useState(window.innerHeight);

const handleResize = () => {
   setWindowWidth(window.innerWidth);
  //  setWindowHeight(window.innerHeight);
}

useEffect( () => {
    window.addEventListener('resize', handleResize)
}, [])

  return (
    <div className="App">
         {windowWidth > 530 ? <NavBar /> : <SmallNavBar />}
         <Route path = "/home">
            <Home windowWidth={windowWidth}/>
         </Route>
    </div>
  );
}

export default App;
