import * as actions from './actionTypes';

export const addCounter = payload => ({
  type: actions.ADD_COUNTER,
  payload: payload
});

export const handleIncrement = payload => ({
  type: actions.HANDLE_INCREMENT,
  payload: payload
});

export const handleReset = payload => ({
  type: actions.HANDLE_RESET,
  payload: payload
});

export const handleDelete = payload => ({
  type: actions.HANDLE_DELETE,
  payload: payload
});
