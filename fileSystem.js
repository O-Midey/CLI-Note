const {
  insertLocalNote,
  readNoteLocally,
  listLocalNotes,
  deleteLocalNote,
} = require("./localNoteHandler");

const args = process.argv.slice(2);

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

const listHandler = () => {
  if (args[0] === "list") {
    if (args.length > 1) {
      console.log("this function cannot take any parameter");
      return;
    } else {
      listLocalNotes();
    }
  }
};

const addHandler = () => {
  if (args[0] === "add") {
    extractFlagsValue(args);
    if (flags.title === null || flags.body === null) {
      console.log(
        "Both --title and --body flags must be specified to add a note."
      );
    } else {
      const { title, body } = flags;
      insertLocalNote(title, body);
    }
  }
};

const removehandler = () => {
  if (args[0] === "remove") {
    extractFlagsValue(args);
    if (flags.title === null) {
      console.log("The --title flag must be specified to remove a note.");
    } else {
      const { title } = flags;
      deleteLocalNote(title);
    }
  }
};

const readHandler = () => {
  if (args[0] === "read") {
    extractFlagsValue(args);
    if (flags.title === null) {
      console.log("The --title flag must be specified to read a note.");
    } else {
      const { title } = flags;
      readNoteLocally(title);
    }
  }
};

args[0] === "read"
  ? readHandler()
  : args[0] === "remove"
  ? removehandler()
  : args[0] === "list"
  ? listHandler()
  : args[0] === "add"
  ? addHandler()
  : console.log("That is not a valid operation");
