import { connect } from "react-redux";
import { generate as generateId } from "shortid";

import { addTodo } from "../actions/todos";
import AddTodoForm from "../../Components/AddTodoForm";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, { projectId }) => ({
  addTodo: (text) => {
    const id = generateId();
    return dispatch(addTodo(id, text, projectId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
