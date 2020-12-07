import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Home from './components/Home'
import CartConsumer from './components/CartConsumerScreen'
import NavigationBar from './components/subComponents/navigationBar'
import AddVendorPage from './components/AddVendor'
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile'

import { auth } from './services/firebase';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ourReducer from './store/reducer';
const store = createStore(ourReducer);


function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/home' />}
    />
  )
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }

 


  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Provider store={store}>
        <div>
        
          <Router>
          <NavigationBar />
          <Switch>
              <Route exact path="/home"  component={Home} />
              <Route path="/cart"  component={CartConsumer} />
              <Route exact path="/addVendor" component={AddVendorPage} />
              <PublicRoute exact path="/login" authenticated={this.state.authenticated} component={Login} />
              <PublicRoute exact path="/signup" authenticated={this.state.authenticated}  component={Signup} />
              <PrivateRoute exact path="/profile" authenticated={this.state.authenticated}  component={Profile} />
            </Switch>
          </Router>
        </div>

      </Provider>
    );
  }
}

export default App;