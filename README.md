# Task Tracker CLI

A command-line task management application built with Node.js. Add, update, delete, and track your tasks directly from the terminal — no external dependencies required.

## Installation

```bash
# Clone or download the project, then:
npm install

# Optional: make task-cli available globally
npm link
```

## Usage

```bash
node task-cli.js <command> [arguments]

# Or after npm link:
task-cli <command> [arguments]
```

## Commands

### Add a task

```bash
node task-cli.js add "Buy groceries"
# Task added successfully (ID: 1)
```

### Update a task

```bash
node task-cli.js update 1 "Buy groceries and cook dinner"
# Task 1 updated successfully.
```

### Delete a task

```bash
node task-cli.js delete 1
# Task 1 deleted successfully.
```

### Mark task status

```bash
node task-cli.js mark-in-progress 2
# Task 2 marked as "in-progress".

node task-cli.js mark-done 2
# Task 2 marked as "done".
```

### List tasks

```bash
# All tasks
node task-cli.js list

# Filter by status
node task-cli.js list todo
node task-cli.js list in-progress
node task-cli.js list done
```

### Example output

```
All Tasks (3)
────────────────────────────────────────────

[1] Buy groceries
    Status: Done
    Created: 5/12/2026, 10:00:00 AM  |  Updated: 5/12/2026, 11:30:00 AM

[2] Write project report
    Status: In Progress
    Created: 5/12/2026, 10:05:00 AM  |  Updated: 5/12/2026, 10:45:00 AM

[3] Schedule team meeting
    Status: Todo
    Created: 5/12/2026, 10:10:00 AM  |  Updated: 5/12/2026, 10:10:00 AM
```

## Data

Tasks are saved to `tasks.json` at the project root. The file is created automatically on first use and follows this structure:

```json
[
  {
    "id": 1,
    "description": "Buy groceries",
    "status": "todo",
    "createdAt": "2026-05-12T10:00:00.000Z",
    "updatedAt": "2026-05-12T10:00:00.000Z"
  }
]
```

| Field | Type | Description |
|---|---|---|
| `id` | number | Auto-incremented unique identifier |
| `description` | string | Task text |
| `status` | string | `todo`, `in-progress`, or `done` |
| `createdAt` | string | ISO 8601 timestamp set on creation |
| `updatedAt` | string | ISO 8601 timestamp updated on every change |

## Project Structure

```
task-tracker/
├── src/
│   ├── commands/
│   │   ├── add.js           # Add new tasks
│   │   ├── update.js        # Update task description
│   │   ├── delete.js        # Remove tasks
│   │   ├── list.js          # Display and filter tasks
│   │   └── mark.js          # Change task status
│   ├── storage.js           # JSON file read/write helpers
│   └── validators.js        # Input validation and error handling
├── task-cli.js              # Entry point and command router
├── tasks.json               # Task data (auto-created on first use)
└── package.json
```

## Error Handling

The CLI validates all inputs and exits with a descriptive message on failure:

- Empty or missing descriptions
- Invalid or non-existent task IDs
- Unknown commands
- Invalid list filters
