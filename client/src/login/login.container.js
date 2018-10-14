import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loginRequest, updateUsernameInput, updatePasswordInput} from './actions/login.actions';
import Login from './components/login.component';
import { loginStateSelector } from './reducers/login.reducer';
import { debounce } from 'lodash';

export class LoginContainer extends React.Component{

  submitLogin = () =>{
    this.props.loginRequest(this.props.login.userCredential.username, this.props.login.userCredential.password, this.props.history);
  }

  updateUsernameInputDebounce = debounce((value) => 
    this.props.updateUsernameInput(value), 300, { leading: true, trailing: true });
  
  updatePasswordInputDebounce = debounce((value) => 
    this.props.updatePasswordInput(value), 300, { leading: true, trailing: true });

  handleUsernameChange = (event) => {
    this.updateUsernameInputDebounce(event.target.value);
  }

  handlePasswordChange = (event) => {
    this.updatePasswordInputDebounce(event.target.value);
  }

  render(){
    return <Login
      login={this.props.login}
      submitLogin={this.submitLogin}
      handleUsernameChange={this.handleUsernameChange}
      handlePasswordChange={this.handlePasswordChange}
      />
  }

  

  
}

const mapStateToProps = (state) => {
  return{
    login: loginStateSelector(state)
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