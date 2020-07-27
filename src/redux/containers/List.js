import { connect } from "react-redux";

import { reorder } from "../actions/todos";
import List from "../../Components/List";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, { projectId }) => ({
  reorderTodos: (event) => dispatch(reorder(event, projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
