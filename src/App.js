import React from "react";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
        <Route path='/' exact component={ProductListing}></Route>
        <Route path='/product/:productId' exact component={ProductDetails}></Route>
        <Route>404 Not Found!</Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
