import { ADD, DELETE, EDIT, TOGGLE } from "../actions/todos";

const initialState = {};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          completed: false,
          text: action.payload.text,
        },
      };

    case DELETE:
      // Destructure to get the todo to delete and return the other todos
      const { [action.payload.id]: _deletedTodo, ...todos } = state;
      return todos;

    case EDIT:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          text: action.payload.text,
        },
      };

    case TOGGLE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          completed: !state[action.payload.id].completed,
        },
      };

    default:
      return state;
  }
};

export default todos;
