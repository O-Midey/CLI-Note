const fsp = require("fs").promises;
const fs = require("fs");
const path = require("path");

// Insert a note
const insertLocalNote = async (title, body) => {
  try {
    // Validate input.
    if (!title || !body) {
      throw new Error("Title and body are required.");
    }

    // Remove invalid characters and spaces.
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9-_]/g, "");

    // Construct the file path.
    const filePath = path.join("./Notes", `${sanitizedTitle}.txt`);

    // Create the note text.
    const noteText = `${title}:\n\n\n${body}`;

    await fsp.writeFile(filePath, noteText);
    console.log("Note added locally.");
  } catch (err) {
    console.error("Error adding notes locally:", err);
  }
};

// Delete a note
const deleteLocalNote = async (title) => {
  try {
    const filePath = path.join("./Notes", `${title}.txt`);

    // Check if the file exists before deleting.
    if (!fs.existsSync(filePath)) {
      console.log(`File ${filePath} does not exist`);
      return;
    }

    await fsp.unlink(filePath);
    console.log(`File "${title}.txt" deleted successfully.`);
  } catch (err) {
    console.error(`Error removing file "${title}.txt":`, err);
  }
};

// List all notes
const listLocalNotes = async () => {
  try {
    const notesDir = "./Notes";
    const files = await fsp.readdir(notesDir);

    // Filter out any non-text files (if needed).
    const textFiles = files.filter((file) => file.endsWith(".txt"));

    if (textFiles.length === 0) {
      console.log("No notes found.");
    } else {
      console.log("List of notes:");
      textFiles.forEach((note) => {
        console.log(note);
      });
    }

    return textFiles;
  } catch (err) {
    console.error("Error listing notes:", err);
    return [];
  }
};

// Read the content of a note
const readNoteLocally = (title) => {
  try {
    // Validate input.
    if (!title) {
      console.log("Title is required.");
      return null;
    }

    // Remove invalid characters and spaces.
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9-_]/g, "");

    // Construct the file path.
    const filePath = path.join("./Notes", `${sanitizedTitle}.txt`);

    // Check if the file exists before reading.
    if (!fs.existsSync(filePath)) {
      console.log(`Note "${title}" does not exist.`);
      return null;
    }

    // Read the content of the note.
    const content = fs.readFileSync(filePath, "utf-8");
    if (!content) {
      console.log("Note not found or an error occurred.");
    } else {
      console.log("Note content: ", content);
    }
  } catch (err) {
    console.error(`Error reading note "${title}":`, err);
    return null;
  }
};

module.exports = {
  insertLocalNote,
  readNoteLocally,
  listLocalNotes,
  deleteLocalNote,
};
