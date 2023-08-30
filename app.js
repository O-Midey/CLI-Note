const {
  insertNote,
  deleteNote,
  listNotes,
  readNote,
} = require("./noteHandler");

const args = process.argv.slice(2);

// List handler

if (args[0] === "list") {
  if (args.length > 1) {
    console.log("this function cannot take any parameter");
    return;
  } else {
    listNotes();
  }
}

// // Add handler

const flags = {
  title: null,
  body: null,
};

const extractFlagsValue = (args) => {
  args.forEach((element) => {
    if (element.startsWith("--title")) {
      element = element.replace(/^--/, "");
      const value = element.split("=");
      flags.title = value[1];
    }
    if (element.startsWith("--body")) {
      element = element.replace(/^--/, "");
      const value = element.split("=");
      flags.body = value[1];
    }
  });
};

if (args[0] === "add") {
  extractFlagsValue(args);
  if (flags.title === null || flags.body === null) {
    console.log(
      "Both --title and --body flags must be specified to add a note."
    );
  } else {
    const { title, body } = flags;
    insertNote(title, body);
  }
}

if (args[0] === "remove") {
  extractFlagsValue(args);
  if (flags.title === null) {
    console.log("The --title flag must be specified to remove a note.");
  } else {
    const { title } = flags;
    deleteNote(title);
  }
}

if (args[0] === "read") {
  extractFlagsValue(args);
  if (flags.title === null) {
    console.log("The --title flag must be specified to read a note.");
  } else {
    const { title } = flags;
    readNote(title);
  }
}

// HANDLE FUNCTIONS USING YARGS

// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *

// const yargs = require("yargs");

// // Handling Input Using yargs.

// yargs
//   .command({
//     command: "add",
//     describe: "Add a new note",
//     builder: {
//       title: {
//         describe: "Note title",
//         demandOption: true,
//         type: "string",
//       },
//       body: {
//         describe: "Note body",
//         demandOption: true,
//         type: "string",
//       },
//     },
//     handler: (argv) => {
//       insertNote(argv.title, argv.body);
//     },
//   })
//   .command({
//     command: "list",
//     describe: "List all notes",
//     handler: () => {
//       listNotes();
//     },
//   })
//   .command({
//     command: "read",
//     describe: "Find a note by its title",
//     handler: (argv) => {
//       readNote(argv.title);
//     },
//   })
//   .command({
//     command: "remove",
//     describe: "Remove a note by its title",
//     handler: (argv) => {
//       deleteNote(argv.title);
//     },
//   })
//   .demandCommand()
//   .help().argv;

// yargs.parse();
