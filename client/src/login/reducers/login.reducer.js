import {actionTypes} from '../actions/login.actions';

export const initLoginState = {
  login: false,
  loading: false,
  auth: {},
  message: {},
  userCredential: {
    username: '',
    password: ''
  }
};

export const loginReducer = (state=initLoginState, action)=>{
  switch(action.type){
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign(
        {}, 
        state, 
        {
          login: true,
          loading: false,
          auth: action.auth
        }
      );
    
    case actionTypes.LOGIN_FAILURE:
      return Object.assign(
        {},
        state,
        {
          login: false,
          loading: false,
          auth: {},
          message: action.message
        }
      );

    case actionTypes.LOGIN_REQUEST:
      return Object.assign(
        {},
        state,
        {
          loading: true
        }
      )
    
    case actionTypes.UPDATE_USERNAME_INPUT:
      return Object.assign(
        {},
        state,
        {
          userCredential: 
            {
              ...state.userCredential,
              username: action.username
            }
        }
      )
    
    case actionTypes.UPDATE_PASSWORD_INPUT:
      return Object.assign(
        {},
        state,
        {
          userCredential: 
          {
            ...state.userCredential,
            password: action.password
          }
        }
      )
        
    default:
      return state;
  }
}

