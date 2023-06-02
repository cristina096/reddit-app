import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar  from './components/NavBar';
import React, {useEffect, useState} from 'react';
import SmallNavBar from './components/SmallNavBar';
import RedditPosts from './components/RedditPosts';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// const [windowHeight, setWindowHeight] = useState(window.innerHeight);

const handleResize = () => {
   setWindowWidth(window.innerWidth);
  //  setWindowHeight(window.innerHeight);
}

useEffect( () => {
    window.addEventListener('resize', handleResize)
    return() => {
      document.removeEventListener('resize', handleResize);
    }
}, [])

  return (
    <Provider store = {store}>
    <div className="App">
         {windowWidth > 530 ? <NavBar /> : <SmallNavBar />}
         <Switch>
           <Redirect exact path = "/" to = "/popular"/>
           <Route path = "/">
               <RedditPosts/>
          </Route>
          </Switch>
    </div>
    </Provider>
  );
}

export default App;
