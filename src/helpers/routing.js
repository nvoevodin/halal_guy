import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';

export const PrivateRoute = function ({ component: Component, authenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => authenticated === true
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
      />
    )
  }
  
 export const PublicRoute =  function ({ component: Component, authenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => authenticated === false
          ? <Component {...props} />
          : <Redirect to='/home' />}
      />
    )
  }