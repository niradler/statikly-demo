const db = require('../../src/db');

module.exports = {
    loader: async (req, reply) => {
        const todo = await db.get(Number(req.params.id));
        if (!todo) return reply.notFound();

        return todo;
    },
    actions: async (req, reply) => {
        switch (req.body.action) {
            case 'delete':
                const deleted = await db.del(Number(req.params.id));
                if (!deleted) return reply.notFound();
                break;
            case 'update':
                await db.update(Number(req.params.id), req.body.title);
                break;
            default:
                return reply.notFound();
        }

        reply.redirect('/todos');
    },
};
