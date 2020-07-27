import { connect } from "react-redux";
import { generate as generateId } from "shortid";

import { addProject, reorder } from "../actions/projects";
import Projects from "../../Components/Projects";

const mapStateToProps = (state) => ({
  projects: state.projects,
  projectsOrder: state.projectsOrder,
});

const mapDispatchToProps = (dispatch) => ({
  addProject: () => {
    const id = generateId();
    return dispatch(addProject(id));
  },
  reorderProjects: (event) =>
    dispatch(reorder(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
