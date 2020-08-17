import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './components/MainPage';
import Form from './components/Form';
import Response from "./components/Response";
import MainCards from "./components/MainCards";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter basename='/cuentaconnosotras/'>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/maincards" component={MainCards} />
        <Route exact path="/response" component={Response} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;