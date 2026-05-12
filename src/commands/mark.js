const { load, save } = require('../storage');
const { validateId, findTask } = require('../validators');

function mark(rawId, status) {
  const id = validateId(rawId);
  const tasks = load();
  const task = findTask(tasks, id);

  if (task.status === status) {
    console.log(`Task ${id} is already marked as "${status}".`);
    return;
  }

  task.status = status;
  task.updatedAt = new Date().toISOString();

  save(tasks);
  console.log(`Task ${id} marked as "${status}".`);
}

module.exports = { mark };
