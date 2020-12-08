//LIBRARIES AND FUCTIONS
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//PUBLIC ROUTES
import Home from './components/Home'
import CartConsumer from './components/CartConsumerScreen'
import NavigationBar from './components/subComponents/navigationBar'
import AddVendorPage from './components/AddVendor'

//ACCESS ROUTES
import Login from './components/Login';
import Signup from './components/Signup';

//PRIVATE ROUTES
import Profile from './components/Profile'
import EditName from './components/subComponents/profile/editName';
import EditEmail from './components/subComponents/profile/editEmail';
import EditPassword from './components/subComponents/profile/editPassword';

//UTILITIES AND DECLARATIONS
import { auth } from './services/firebase';
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

              {/**ACCESSIBLE ANYWHERE ROUTES */}
              <Route exact path="/home"  component={Home} />
              <Route path="/cart"  component={CartConsumer} />
              <Route exact path="/addVendor" component={AddVendorPage} />
              
              {/**ACCESS PRIVATE ROUTES */}
              <PublicRoute exact path="/login" authenticated={this.state.authenticated} component={Login} />
              <PublicRoute exact path="/signup" authenticated={this.state.authenticated}  component={Signup} />
              
              {/**PROFILE ROUTES */}
              <PrivateRoute exact path="/profile" authenticated={this.state.authenticated}  component={Profile} />
              <PrivateRoute exacr path="/profile/editName" authenticated={this.state.authenticated}  component={EditName} />
              <PrivateRoute exacr path="/profile/editEmail" authenticated={this.state.authenticated}  component={EditEmail} />
              <PrivateRoute exacr path="/profile/editPassword" authenticated={this.state.authenticated}  component={EditPassword} />

            </Switch>
          </Router>
        </div>

      </Provider>
    );
  }
}

export default App;