const { load } = require('../storage');

const STATUS_LABELS = {
  todo: 'Todo',
  'in-progress': 'In Progress',
  done: 'Done',
};

const VALID_FILTERS = Object.keys(STATUS_LABELS);

function formatDate(iso) {
  return new Date(iso).toLocaleString();
}

function list(filter) {
  if (filter && !VALID_FILTERS.includes(filter)) {
    console.error(`Error: Invalid filter "${filter}". Valid options: ${VALID_FILTERS.join(', ')}`);
    process.exit(1);
  }

  const tasks = load();
  const filtered = filter ? tasks.filter((t) => t.status === filter) : tasks;

  if (filtered.length === 0) {
    const scope = filter ? ` with status "${filter}"` : '';
    console.log(`No tasks found${scope}.`);
    return;
  }

  const heading = filter ? STATUS_LABELS[filter] : 'All';
  console.log(`\n${heading} Tasks (${filtered.length})\n${'─'.repeat(44)}`);

  for (const task of filtered) {
    const status = STATUS_LABELS[task.status] || task.status;
    console.log(`[${task.id}] ${task.description}`);
    console.log(`    Status: ${status}`);
    console.log(`    Created: ${formatDate(task.createdAt)}  |  Updated: ${formatDate(task.updatedAt)}\n`);
  }
}

module.exports = { list };
