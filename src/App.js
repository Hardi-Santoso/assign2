import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom";
import './index.css'

// import component
import Home from './component/Home';
import Category from './component/Category';
import PDP from './component/PDP';
import Cart from './component/Cart';

import Profile from './component/Profile';
import Register from './component/Register';

// import redux
import { Provider } from "react-redux";
import store from "./redux/store";


function Navigations(){
  return (
    <>      
      <Router>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Category">
            <Category/>
          </Route>
          <Route path="/PDP">
            <PDP/>
          </Route>
          <Route exact path="/Cart">
            <Cart/>
          </Route>

          <Route exact path="/Register">
            <Register/>
          </Route>
          <Route exact path="/Profile">
            <Profile/>
          </Route>

          <Route path="*">          
            <div className="text-center">
              <img src="https://online.globalresp.com/MyAccount/Images/404.jpg" className="img_full margin-top-10"/>
            </div>
          </Route>

        </Switch>

      </Router>
    </>
  );
}



function App() {
  return(

    <Provider store={store}>
      <Navigations />
    </Provider>

  )
}

export default App;
