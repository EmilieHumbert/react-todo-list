import { ADD, DELETE, EDIT_TITLE } from "../actions/projects";
import {
  ADD as ADD_TODO,
  DELETE as DELETE_TODO,
  REORDER as REORDER_TODOS,
} from "../actions/todos";
import { reorderList } from "../../utils/drag-drop";

const initialState = {};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: "New Project",
          list: [],
        },
      };

    case DELETE:
      // Destructure to get the project to delete and return the other projects
      const { [action.payload.id]: _deletedProject, ...projects } = state;
      return projects;

    case EDIT_TITLE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          title: action.payload.title,
        },
      };

    case ADD_TODO:
      return {
        ...state,
        [action.payload.projectId]: {
          ...state[action.payload.projectId],
          list: [...state[action.payload.projectId].list, action.payload.id],
        },
      };

    case DELETE_TODO:
      return {
        ...state,
        [action.payload.projectId]: {
          ...state[action.payload.projectId],
          list: state[action.payload.projectId].list.filter(
            (todoId) => todoId !== action.payload.id
          ),
        },
      };

    case REORDER_TODOS:
      return {
        ...state,
        [action.payload.projectId]: {
          ...state[action.payload.projectId],
          list: reorderList(
            action.payload.event,
            state[action.payload.projectId].list
          ),
        },
      };

    default:
      return state;
  }
};

export default projects;
