const db = require("../../src/db");
module.exports = {
  preHandler: async (req, reply) => {
    const errors = reply.flash("errors");
    const todos = await db.all();
    req.data = { todos, errors };
  },
};
