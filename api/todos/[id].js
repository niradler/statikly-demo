const db = require('../../src/db');
module.exports = {
    post: {
        handler: async (req, reply) => {
            const { params, body } = req;
            if (body['_method'] == 'delete') {
                const deleted = await db.del(params.id);
                if (!deleted) return reply.notFound();
            }
            reply.redirect('/todos');
        },
    },
};
