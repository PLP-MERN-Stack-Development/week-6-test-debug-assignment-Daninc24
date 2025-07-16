// Minimal Post model stub for testing
module.exports = {
  create: async (data) => ({ _id: 'mockid', ...data }),
  findById: async (id) => (id === 'notfound' ? null : { _id: id, title: 'Test Post' }),
  insertMany: async (posts) => posts,
}; 