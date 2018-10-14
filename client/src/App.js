import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import LoginContainer from './login/login.container';
import { isAuthenticatedSelector } from './login/reducers/login.reducer';
import Home from './home/home.component';

import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    const redirectToLogin = () => (<Redirect to="/login" />);

    const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
      <Route {...rest} render={(props) => (
          isAuthenticated === true ? 
            <Component {...props} /> : redirectToLogin ()  
      )} />
   );

    return (
      <Router>
        <div >
          <Route exact={true} path="/login" component={LoginContainer} />
          <ProtectedRoute exact={true} path="/" component={Home} isAuthenticated={this.props.isAuthenticated} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isAuthenticated: isAuthenticatedSelector(state)
  }
}

export default connect(mapStateToProps)(App);
