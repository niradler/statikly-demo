const db = require("../../src/db");
module.exports = {
  post: {
    handler: async (req, reply) => {
      const { params, body } = req;
      if (body["_method_"] == "delete") db.del(params.id);
      reply.redirect("/todos");
    },
  },
};
