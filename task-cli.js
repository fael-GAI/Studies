#!/usr/bin/env node

'use strict';

const { add } = require('./src/commands/add');
const { update } = require('./src/commands/update');
const { del } = require('./src/commands/delete');
const { list } = require('./src/commands/list');
const { mark } = require('./src/commands/mark');

const [, , command, ...args] = process.argv;

const COMMANDS = {
  add: () => add(args[0]),
  update: () => update(args[0], args[1]),
  delete: () => del(args[0]),
  list: () => list(args[0]),
  'mark-done': () => mark(args[0], 'done'),
  'mark-in-progress': () => mark(args[0], 'in-progress'),
};

function printHelp() {
  console.log(`
Usage: task-cli <command> [arguments]

Commands:
  add <description>          Add a new task
  update <id> <description>  Update an existing task's description
  delete <id>                Delete a task
  list [status]              List tasks (filter: todo | in-progress | done)
  mark-in-progress <id>      Mark a task as in progress
  mark-done <id>             Mark a task as done
`);
}

if (!command) {
  printHelp();
  process.exit(0);
}

const handler = COMMANDS[command];

if (!handler) {
  console.error(`Error: Unknown command "${command}".`);
  printHelp();
  process.exit(1);
}

handler();
