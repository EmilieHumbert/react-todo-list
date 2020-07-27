import { generate as generateId } from "shortid";

export default function getInitialState() {
  const projectId = generateId();
  const todoId = generateId();

  return {
    projects: {
      [projectId]: {
        id: projectId,
        title: "Example Project",
        list: [todoId],
      },
    },
    projectsOrder: [projectId],
    todos: {
      [todoId]: {
        id: todoId,
        text: "Example todo",
        completed: false,
      },
    },
  };
}
