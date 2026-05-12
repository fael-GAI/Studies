const { load, save, nextId } = require('../storage');
const { validateDescription } = require('../validators');

function add(description) {
  const desc = validateDescription(description);
  const tasks = load();
  const now = new Date().toISOString();

  const task = {
    id: nextId(tasks),
    description: desc,
    status: 'todo',
    createdAt: now,
    updatedAt: now,
  };

  tasks.push(task);
  save(tasks);

  console.log(`Task added successfully (ID: ${task.id})`);
}

module.exports = { add };
