let todos = [{ id: 1, title: "First note" }];

const get = async (id) => todos.find((t) => t.id === id);
const del = async (id) => {
  todos = todos.filter((t) => t.id != id);
};
const all = async (id) => todos;
const add = async (title) => todos.push({ title, id: todos.length + 1 });

module.exports = { all, get, add, del };
