let initialState = [
  {
    text: 'This is a sampe todo',
    isDone: false,
  },
];
// {type: "ADD_TODO", payload: value}
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.payload, isDone: false }];
    case 'MARK_TODO': {
      const newState = [...state];
      return newState.map((value, index) =>
        index === action.payload ? { ...value, isDone: true } : value
      );
    }
    case 'DELETE_TODO':
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}
