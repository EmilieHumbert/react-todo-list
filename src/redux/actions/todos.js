const NS = "todo";
export const ADD = `${NS}/add`;
export const DELETE = `${NS}/delete`;
export const EDIT = `${NS}/edit`;
export const REORDER = `${NS}/reorder`;
export const TOGGLE = `${NS}/toggle`;

export const addTodo = (id, text, projectId) => ({
  type: ADD,
  payload: {
    id,
    text,
    projectId,
  },
});

export const deleteTodo = (id, projectId) => ({
  type: DELETE,
  payload: {
    id,
    projectId,
  },
});

export const editTodo = (id, text) => ({
  type: EDIT,
  payload: {
    id,
    text,
  },
});

export const reorder = (event, projectId) => ({
  type: REORDER,
  payload: {
    event,
    projectId,
  },
});

export const toggleCompletion = (id) => ({
  type: TOGGLE,
  payload: {
    id,
  },
});
