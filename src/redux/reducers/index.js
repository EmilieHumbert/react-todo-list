// import all the reducers
import { combineReducers } from "redux";
import projects from "./projects";
import projectsOrder from "./projectsOrder";
import todos from "./todos";

const rootReducer = combineReducers({
  projects,
  projectsOrder,
  todos,
});

export default rootReducer;
