import { connect } from "react-redux";

import { editTodo, deleteTodo } from "../actions/todos";
import ListItem from "../../Components/ListItem";

const mapStateToProps = (state, { id }) => ({
  todo: state.todos[id],
});

const mapDispatchToProps = (dispatch, { id, projectId }) => ({
  editTodo: (text) => dispatch(editTodo(id, text)),
  handleDelete: () => dispatch(deleteTodo(id, projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
