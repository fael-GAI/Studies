const { load, save } = require('../storage');
const { validateId, validateDescription, findTask } = require('../validators');

function update(rawId, description) {
  const id = validateId(rawId);
  const desc = validateDescription(description);
  const tasks = load();
  const task = findTask(tasks, id);

  task.description = desc;
  task.updatedAt = new Date().toISOString();

  save(tasks);
  console.log(`Task ${id} updated successfully.`);
}

module.exports = { update };
