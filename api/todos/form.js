const db = require('../../src/db')
module.exports = {
    post: {
        handler: async (req, reply) => {
            const title = req.body.title;
            if (title.length < 2) {
                req.flash('errors', ['title length should be longer then 2 characters'])
                return reply.redirect('/todos');
            }
            await db.add(title)
            reply.redirect('/todos');
        }
    }
}