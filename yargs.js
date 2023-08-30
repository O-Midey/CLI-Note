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
