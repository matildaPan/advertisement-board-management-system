import {post} from '../../common/http';
import {loginUrl} from '../../common/config';

export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  UPDATE_USERNAME_INPUT: 'UPDATE_USERNAME_INPUT',
  UPDATE_PASSWORD_INPUT: 'UPDATE_PASSWORD_INPUT'
};

export const loginSuccess =(auth)=>{
  return {
    type: actionTypes.LOGIN_SUCCESS,
    auth
  };
}

export const loginFailure =(message)=>{
  return {
    type: actionTypes.LOGIN_FAILURE,
    message
  }
}

export const loginRequest =(username, password, history)=>{
  const data = {username, password};
  return (dispatch)=>{
    post(loginUrl, data).then(
        response => response.json()
    ).then(
      (result)=>{
        if(result.success){
          localStorage.setItem("auth", JSON.stringify(result));
          dispatch(loginSuccess(result));
          history.push('/');
        }else{
          dispatch(loginFailure(result.message))
        }
      }
    ).catch(
      message => dispatch(loginFailure(message))
    ) 
  }
}

export const updateUsernameInput = (username) =>{
  return {
    type: actionTypes.UPDATE_USERNAME_INPUT,
    username
  }
}

export const updatePasswordInput = (password) =>{
  return {
    type: actionTypes.UPDATE_PASSWORD_INPUT,
    password
  }
}


