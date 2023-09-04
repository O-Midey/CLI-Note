# Note-Taking App

This is a simple command-line note-taking application built with Node.js. It allows you to add, list, read, and remove notes from a text file. This README will guide you through setting up and using the app.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Adding a Note](#adding-a-note)
  - [Listing Notes](#listing-notes)
  - [Reading a Note](#reading-a-note)
  - [Removing a Note](#removing-a-note)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can use this application, you'll need to have Node.js installed on your computer. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/note-taking-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd note-taking-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

The note-taking app provides several commands for managing your notes:

### Adding a Note

To add a new note, use the `add` command and specify the title and body of the note using `--title` and `--body` flags, respectively.

```bash
node main.js add --title="Note Title" --body="This is the note body."
```

### Listing Notes

To list all of your notes, use the `list` command.

```bash
node main.js list
```

### Reading a Note

To read the contents of a specific note, use the `read` command and specify the title of the note using the `--title` flag.

```bash
node main.js read --title="Note Title"
```

### Removing a Note

To remove a specific note, use the `remove` command and specify the title of the note using the `--title` flag.

```bash
node main.js remove --title="Note Title"
```

## Contributing

If you'd like to contribute to this project or report issues, please open an issue or create a pull request on the project's GitHub repository: [https://github.com/yourusername/note-taking-app](https://github.com/yourusername/note-taking-app).


