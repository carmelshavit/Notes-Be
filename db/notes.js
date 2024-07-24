// const fs = require('fs');
const notePath = __dirname + "/notes.json";
const { pool } = require("../db/db");
const { getNotesQuery } = require("../db/queries");

const getNotes = async () => {
  try {
    const query = getNotesQuery();
    const [queryResult] = await pool.query(query);
    return queryResult;
  } catch (err) {
    console.log("Error from server:", err.message);
    throw err;
  }
};

const addNote = (note) => {
  fs.readFile(notePath, "utf8", (err, fileText) => {
    if (err) {
      console.log("line 44", err);
      throw err;
    }
    let jsonData = JSON.parse(fileText);
    jsonData.push(note);

    fs.writeFile(notePath, JSON.stringify(jsonData), "utf8", (err) => {
      if (err) {
        console.log("line 51", err);
        throw err;
      }

      console.log("User added successfully!");
      return jsonData;
    });
  });
  return note;
};

const getNoteById = async (noteId) => {
  console.log("line 64", noteId);
  try {
    const fileText = await fs.promises.readFile(notePath, "utf8");
    let jsonData = JSON.parse(fileText);

    console.log("All notes:", jsonData);

    const note = jsonData.find((note) => {
      console.log("Checking note:", note);
      return note.id === noteId;
    });

    console.log("Final note:", note);
  } catch (err) {
    console.log("Error from server:", err.message);
    throw err;
  }
};

const deleteNote = async (noteId) => {
  console.log("line 64", noteId);
  try {
    const fileText = await fs.promises.readFile(notePath, "utf8");
    let jsonData = JSON.parse(fileText);

    console.log("All notes:", jsonData);

    const updatedNotes = jsonData.filter((note) => note.id !== noteId);

    await fs.promises.writeFile(notePath, JSON.stringify(updatedNotes), "utf8");

    console.log("User deleted successfully!");
  } catch (err) {
    console.log("Error from server:", err.message);
    throw err;
  }
};

module.exports = { addNote, getNotes, getNoteById, deleteNote };
