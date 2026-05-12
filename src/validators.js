function validateDescription(description) {
  if (!description || typeof description !== 'string' || !description.trim()) {
    console.error('Error: Task description cannot be empty.');
    process.exit(1);
  }
  return description.trim();
}

function validateId(rawId) {
  const id = parseInt(rawId, 10);
  if (!rawId || isNaN(id) || id <= 0) {
    console.error(`Error: "${rawId}" is not a valid task ID. IDs must be positive integers.`);
    process.exit(1);
  }
  return id;
}

function findTask(tasks, id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.error(`Error: No task found with ID ${id}.`);
    process.exit(1);
  }
  return task;
}

module.exports = { validateDescription, validateId, findTask };
