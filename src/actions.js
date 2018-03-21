// src/actions.js
import * as c from './constants';

export function update(name, value) {
  return dispatch => dispatch({
    type: c.FORM_UPDATE_VALUE,
    name, value
  });
}

export function ansver(name, value){
	return dispatch => dispatch({
    type: c.ANSVER,
    ansver:  Date.getFullYear() - value
  });
}

export function reset() {
  return dispatch => dispatch({
    type: c.FORM_RESET
  });
}

