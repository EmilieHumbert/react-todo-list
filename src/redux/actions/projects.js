const NS = "project";
export const ADD = `${NS}/add`;
export const DELETE = `${NS}/delete`;
export const EDIT_TITLE = `${NS}/edit-title`;
export const REORDER = `${NS}/reorder`;

export const addProject = (id) => ({
  type: ADD,
  payload: {
    id,
  },
});

export const deleteProject = (id) => ({
  type: DELETE,
  payload: {
    id,
  },
});

export const editTitle = (id, title) => ({
  type: EDIT_TITLE,
  payload: {
    id,
    title,
  },
});

export const reorder = (event) => ({
  type: REORDER,
  payload: {
    event,
  },
});
