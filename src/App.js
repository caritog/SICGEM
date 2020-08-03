import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Form from './components/Form';
import Response from "./components/Response";

import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';


//import Prueba from "./components/Prueba";





function App() {
  return (

    <BrowserRouter basename='/encuesta/'>

      <Switch>
        <Route exact path="/" component={Header}>
        </Route>
      </Switch>

      <Switch>
        <Route
          exact path="/" component={Navbar}>
        </Route >
      </Switch>

      <Switch>
        <Route
          exact path="/" component={Body}>
        </Route>
      </Switch>

      <Switch>
        <Route
          exact path="/" component={Footer}>
        </Route>
      </Switch>

      <Switch>
        <Route
          exact path="/response" component={Response}>
        </Route >

        <Route
          exact path="/form" component={Form}>
        </Route>
      </Switch>

    </BrowserRouter>

  )
}

export default App;




/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
      <h1>Todo OK</h1>
      <hr />
      <Switch>
        <Route path="/" exact>
          Inicio
        </Route>
        <Route>

        </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;

*/
