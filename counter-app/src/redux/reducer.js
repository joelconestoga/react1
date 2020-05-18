import * as actions from './actionTypes';

export default function reducer(state = [], action) {
  switch(action.type) {
    case actions.ADD_COUNTER:
      return [...state, {id: action.payload.id, value: action.payload.value}];
    case actions.HANDLE_INCREMENT:
      return state.map(counter => counter.id !== action.payload.id ? counter : {...counter, value: counter.value + 1});
    case actions.HANDLE_RESET:
      return state.map(counter => ({...counter, value: 0}));
    case actions.HANDLE_DELETE:
      return state.filter(counter => counter.id !== action.payload.id);
    default:
      return state;
  }
}