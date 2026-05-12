const { load, save } = require('../storage');
const { validateId, findTask } = require('../validators');

function del(rawId) {
  const id = validateId(rawId);
  const tasks = load();
  findTask(tasks, id);

  const remaining = tasks.filter((t) => t.id !== id);
  save(remaining);
  console.log(`Task ${id} deleted successfully.`);
}

module.exports = { del };
