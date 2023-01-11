const db = require('../../src/db');
module.exports = {
    get: {
        handler: async (req, reply) => {
            const { params } = req;
            console.log({ params })
            const todo = await db.get(Number(params.id))
            console.log({ todo })
            if (!todo) return reply.notFound();
            return todo
        },
    },
    delete: {
        handler: async (req, reply) => {
            const { params } = req;
            const deleted = await db.del(params.id);
            if (!deleted) return reply.notFound();
            return { status: "success" };
        },
    },
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
