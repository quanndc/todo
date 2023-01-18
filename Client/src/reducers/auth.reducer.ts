import { AuthActions } from './../actions/auth.action';
import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';


export const initialState: AuthState = {
    idToken: "",
    isAuthenticated: false,
    errorMessage: ""
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state,action) => {
    console.log(action.type);
    return state;
  }),
  on(AuthActions.loginSuccess, (state,action) => {
    console.log(action.type);
    // console.log(action.idToken);
    let newState:AuthState = {
        ...state,
        idToken: action.idToken,
        isAuthenticated: true,
        errorMessage:"",
    }
    return newState;
  }),
  on(AuthActions.loginFailure, (state,action) => {
    console.log(action.type);
    let newState:AuthState = {
        ...state,
        idToken: "",
        isAuthenticated: false,
        errorMessage: action.error,
    }
    return newState;
  }),





  on(AuthActions.logout, (state,action) => {
    console.log(action.type);
    return state;
  }),
  on(AuthActions.logoutSuccess, (state,action) => {
    console.log(action.type);
    let newState:AuthState = {
        ...state,
        isAuthenticated: false,
    }
    return newState;
  }),
  on(AuthActions.logoutFailure, (state,action) => {
    console.log(action.type);
    let newState:AuthState = {
        ...state,
        errorMessage: action.error,
    }
    return newState;
  })
);