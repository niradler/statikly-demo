let todos = [
  { id: 1, title: "First note" },
  { id: 2, title: "Second note" },
];

const get = async (id) => todos.find((t) => t.id === id);
const del = async (id) => {
  const before = todos.length;
  todos = todos.filter((t) => t.id != id);
  if (todos.length != before) return true;
  return false;
};
const all = async (id) => todos;
const add = async (title) => todos.push({ title, id: todos.length + 1 });

module.exports = { all, get, add, del };
