import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Division from "./components/main-components/Division";

import NotFound from "./components/main-components/NotFound";
import AddDivision from "./components/division/AddDivision";
import EditDivision from "./components/division/EditDivision";
import ShowDivision from "./components/division/ShowDivision"
import Register from "./components/main-components/Register";
import LoginMainComponent from "./components/main-components/LoginMainComponent";




function App() {
  return (
    <div className="App">
      <Router>


          <Switch>
              <Route exact path="/division" component={Division}/>
              <Route exact path="/division/add" component={AddDivision}></Route>
              <Route exact path="/division/edit/:id" component={EditDivision}></Route>
              <Route exact path="/division/show/:id" component={ShowDivision}></Route>

              <Route exact path="/register" component={Register}></Route>




              <Route exact path="/" component={LoginMainComponent}/>



          </Switch>
      </Router>

    </div>
  );
}

export default App;
