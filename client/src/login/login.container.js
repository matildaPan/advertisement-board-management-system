import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {loginRequest, updateUsernameInput, updatePasswordInput} from './actions/login.actions';
import Login from './components/login.component';

class LoginContainer extends React.Component{
  constructor(props){
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  render(){
    return <Login
      login={this.props.login}
      submitLogin={this.submitLogin}
      handleUsernameChange={this.handleUsernameChange}
      handlePasswordChange={this.handlePasswordChange}
      />
  }

  submitLogin (){
    this.props.loginRequest(this.props.login.userCredential.username, this.props.login.userCredential.password);
  }

  handleUsernameChange(event){
    this.props.updateUsernameInput(event.target.value);
  }

  handlePasswordChange(event){
    this.props.updatePasswordInput(event.target.value)
  }

  
}

const mapStateToProps = (state) => {
  return{
    login: state.login
  }
}

const mapDispatchProps = (dispatch) => {
  return{
    loginRequest: bindActionCreators(loginRequest, dispatch),
    updateUsernameInput: bindActionCreators(updateUsernameInput, dispatch),
    updatePasswordInput: bindActionCreators(updatePasswordInput, dispatch)
    
  }
}

export default connect(mapStateToProps, mapDispatchProps)(LoginContainer);