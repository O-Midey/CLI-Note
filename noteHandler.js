const { db, client, connectToDatabase } = require("./database");
const collection = db.collection("Notes");

// Insert a new Note Document.

const insertNote = async (title, noteText) => {
  if (!title || !noteText) {
    console.log("Please enter both a TITLE and the NOTE TEXT.");
    return;
  }

  try {
    await connectToDatabase();
    const result = await collection.insertOne({ title, text: noteText });
    console.log("Note created:", result.insertedId);
  } catch (err) {
    console.error("Error creating note:", err.message);
  } finally {
    await client.close();
  }
};

//List all notes.
const listNotes = async () => {
  try {
    await connectToDatabase();
    const notesArray = await collection.find({}).toArray();

    if (notesArray.length < 1) {
      console.log("You have no notes");
      return;
    }
    const formattedNotes = notesArray.map(
      (note, index) => `${index + 1}. ${note.text}`
    );

    formattedNotes.forEach((formattedNote) => {
      console.log(formattedNote);
    });
  } catch (error) {
    console.error("Error listing notes:", error);
  } finally {
    await client.close();
  }
};

//Find a note by title.
const readNote = async (title) => {
  try {
    await connectToDatabase();

    const result = await collection.find({ title: title }).toArray();

    if (result.length === 0) {
      console.log("Note not found");
      return;
    }

    if (result.length === 1) {
      const note = result[0];
      console.log(`TITLE: ${note.title}\n\n${note.text}`);
      return;
    }

    if (result.length > 1) {
      console.log(`Found ${result.length} notes with title "${title}":`);

      result.forEach((note, index) => {
        console.log(`Note ${index + 1}:`);
        console.log(`TITLE: ${note.title}\n\n${note.text}\n`);
      });
      return;
    }
  } catch (error) {
    console.error("Error reading note:", error);
  } finally {
    await client.close();
  }
};

//Delete a note by its title.
const deleteNote = async (title) => {
  try {
    await connectToDatabase();
    const deletionResult = await collection.deleteOne({ title: title });
    if (deletionResult.deletedCount === 1) {
      console.log("Note deleted successfully.");
    } else {
      console.log("Note not found or not deleted.");
    }
  } catch (error) {
    console.error("Error deleting note:", error);
  } finally {
    await client.close();
  }
};

module.exports = {
  insertNote,
  deleteNote,
  listNotes,
  readNote,
};
