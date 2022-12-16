const db = require("../../src/db");

module.exports = {
  loader: async (req, reply) => {
    console.log("req.params.id", req.params.id);
    const todo = await db.get(Number(req.params.id));
    console.log("todo", todo);
    if (!todo) return reply.notFound();

    return todo;
  },
  actions: async (req, reply) => {
    console.log("req.params.id", req.params.id);
    const deleted = await db.del(Number(req.params.id));
    console.log("deleted", deleted);
    if (!deleted) return reply.notFound();
    reply.redirect("/todos");
  },
};
