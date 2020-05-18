import * as actions from './actionTypes';
import { produce } from 'immer';

export default function reducer(state = [], action) {
  switch(action.type) {
    case actions.ADD_COUNTER:
      return produce(state, draftState => { 
        draftState.push({ id: action.payload.id, value: action.payload.value }) 
      })
    case actions.HANDLE_INCREMENT:
      return state.map(counter => counter.id === action.payload.id ? produce(counter, draftCounter => { draftCounter.value += 1 }) : counter);
    case actions.HANDLE_RESET:
      return state.map(counter => produce(counter, draftCounter => { draftCounter.value = 0 }));
    case actions.HANDLE_DELETE:
      return state.filter(counter => counter.id !== action.payload.id);
    default:
      return state;
  }
}