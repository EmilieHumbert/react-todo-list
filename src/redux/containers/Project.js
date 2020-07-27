import { connect } from "react-redux";

import { deleteProject, editTitle } from "../actions/projects";
import Project from "../../Components/Project";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, { project }) => ({
  handleDelete: () => dispatch(deleteProject(project.id)),
  handleEditTitle: (title) => dispatch(editTitle(project.id, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
