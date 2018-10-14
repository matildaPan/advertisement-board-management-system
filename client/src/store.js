import { createStore, combineReducers, applyMiddleware} from 'redux';
import {initLoginState, loginReducer} from './login/reducers/login.reducer';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  login: loginReducer
});

const initialState = {
  login: initLoginState
};

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});

export const initStore = (state = initialState) => {
    return createStore(
      reducers,
      state, 
      composeEnhancers(
        applyMiddleware(reduxThunk)
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};