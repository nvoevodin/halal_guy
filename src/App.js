import React from 'react';
import {BrowserRouter as Router, Route,Switch, withRouter } from 'react-router-dom';

import Home from './components/Home'
import CartConsumer from './components/CartConsumerScreen'
import NavigationBar from './components/subComponents/navigationBar'
import AddVendorPage from './components/AddVendor'



function App() {
  return (
    <div>
    <NavigationBar/>
    <Router>
      <div>
      <Route exact path="/" component = {Home}/>
      <Route path="/cart" component = {CartConsumer} />
      <Route exact path="/addVendor" component = {AddVendorPage}/>
    
      </div>
      </Router>
    </div>

  );
}

export default App;
