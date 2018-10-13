import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { history } from './store';
import LoginContainer from './login/login.container';
class App extends React.Component {
  render() {
    // const redirectToLogin = () => (<Redirect to="/login" />);

    return (
      <Router>
        <div >
          <Route path="/login" component={LoginContainer} />
        </div>
      </Router>
    )
  }
}

export default App;
