import { createAction } from 'redux-actions';
import backend from '../service/backend.js';
import { Actions } from 'react-native-router-flux';
import React, {
  AsyncStorage,
} from 'react-native';

export const SEND_POST_LOGIN = 'SEND_POST_LOGIN';
export const INVALID_USER = 'INVALID_USER';
export const VALID_USER = 'VALID_USER';

export function isValidUser(validLogin) {
	return {
		type: VALID_USER,
    validLogin,
	}
}

export function InvalidUser(validLogin) {
	return {
		type: INVALID_USER,
    validLogin
	}
}

export function sendPostLogin(loginFields) {
	return {
		type: SEND_POST_LOGIN,
		loginFields
	}
}

export function validateLogin(emailAndPassword) {
  return dispatch => {
    dispatch(sendPostLogin(emailAndPassword))
    return fetch('http://localhost:3000/api/carly/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailAndPassword.email,
        password: emailAndPassword.password,
      })
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(JSON.stringify(responseData.token));
        if (responseData.success) {
          dispatch(isValidUser({isValidLogin: true}));
          AsyncStorage.setItem('key', JSON.stringify(responseData.token));
          Actions.Search();
      	} else {
      		dispatch(InvalidUser({isValidLogin: false}))
      	}
      })
      .done();
  }
}



//export default createAction('SEND_POST_LOGIN', async (loginFields) => await backend.login(loginFields));