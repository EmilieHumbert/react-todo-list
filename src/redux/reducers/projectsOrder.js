import { ADD, REORDER } from "../actions/projects";
import { reorderList } from "../../utils/drag-drop"

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload.id];

    case REORDER:
      return reorderList(action.payload.event, state);

    default:
      return state;
  }
};

export default todos;
