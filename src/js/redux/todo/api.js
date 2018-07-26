export default class Api {

  static getTodo() {
    return Api.getLocalStorage('todos') || {};
  }

  static getNextId() {
    const todos = Api.getTodo();
    if (todos === null)
      return 0;
    else
      return Object.keys(todos).length;
  }

  static getTodos() {
    const todos = Api.getTodo();
    return Object.keys(todos).map((k) => (todos[k]));
  }

  static addTodo(text) {
    const id = Api.getNextId();
    const todos = Api.getTodo();
    todos[id] = {
      id,
      text,
      done: false,
    };
    Api.setLocalStorage('todos', todos);
    return todos[id];
  }

  static toggleTodo(id) {
    const todos = Api.getTodo();
    if (todos[id] !== null) {
      todos[id].done = !todos[id].done;
      Api.setLocalStorage('todos', todos);
      return todos[id];
    } else
      return null;
  }

  static getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
