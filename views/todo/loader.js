const db = require("../../src/db");

module.exports = {
  preHandler: async (req, reply) => {
    const todo = await db.get(Number(req.params.id));
    if (!todo) return reply.notFound();

    req.data = todo;
  },
};
