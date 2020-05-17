export default function reducer(state = [], action) {
  switch(action.type) {
    case "addCounter":
      return [...state, {id: action.payload.id, value: action.payload.value}];
    case "handleIncrement":
      return state.map(counter => counter.id !== action.payload.id ? counter : {...counter, value: counter.value + 1});
    case "handleReset":
      return state.map(counter => ({...counter, value: 0}));
    case "handleDelete":
      return state.filter(counter => counter.id !== action.payload.id);
    default:
      return state;
  }
}