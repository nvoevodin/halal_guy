//LIBRARIES AND FUCTIONS
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

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
import PaymentMethods from './components/subComponents/profile/paymentMethods';
import AddPaymentMethod from './components/subComponents/profile/addPaymentMethod';

//UTILITIES AND DECLARATIONS
import { auth } from './services/firebase';
import ourReducer from './store/reducer';
import { PrivateRoute, PublicRoute } from './helpers/routing';
const store = createStore(ourReducer);
//const stripePromise = loadStripe('pk_live_51HhkvNBmZZhLkiuRi5FvyWO2fP9WIaL1MuWJ1NTJk5lXcPxosr9MfLMxs2s1ZwEmbpltJ2SAzQ9iwIzSb3SYscC900XpjX39y4');



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

    // let paymentMethods = null;
    // paymentMethods = <Elements stripe={stripePromise}>
    //                 <PaymentMethods/>
    //             </Elements>;


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
              <PrivateRoute exact path="/profile/editName" authenticated={this.state.authenticated}  component={EditName} />
              <PrivateRoute exact path="/profile/editEmail" authenticated={this.state.authenticated}  component={EditEmail} />
              <PrivateRoute exact path="/profile/editPassword" authenticated={this.state.authenticated}  component={EditPassword} />
              <PrivateRoute exact path="/profile/paymentMethods" authenticated={this.state.authenticated}  component={PaymentMethods} />
              <PrivateRoute exact path="/profile/paymentMethods/addPaymentMethod" authenticated={this.state.authenticated}  component={AddPaymentMethod} />

            </Switch>
          </Router>
        </div>

      </Provider>
    );
  }
}

export default App;