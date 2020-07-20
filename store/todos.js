export const state = () => ({ list: [] });

export const mutations = {
  add(state, todoObj) {
    state.list.push({ id: todoObj.id, text: todoObj.text, done: false });
  },
  remove(state, todoId) {
    const filteredTodos = state.list.filter((todo) => todo.id !== todoId);
    console.log(filteredTodos);
    state.list = filteredTodos;
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
  edit(state, { id: todoId, text }) {
    const targetTodo = state.list.find((todo) => todo.id === todoId);
    targetTodo.text = text;
  },
};
