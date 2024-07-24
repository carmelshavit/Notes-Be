const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = getNotes();

    res.json(result);
  } catch (error) {
    console.error("Error in GET / route:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

// router.post('/', async (req, res) => {
//     try {
//         const note = req.body;
//         console.log('my path', notePath);

//         // Check if 'note' exists before making the asynchronous call
//         if (!note) {
//             res.status(404).json({ error: "note not found" });
//             return;
//         }
//         const newNote = addNote(note); // Wait for the asynchronous operation to complete

//         console.log(newNote);

//         res.json(newNote);
//     } catch (error) {
//         console.error("Error in POST / route:", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// router.get('/:noteId', async (req, res) => {
//     try {
//         const noteId = req.params.noteId
//         const getNoteId = await getNoteById(noteId); // Wait for the asynchronous operation to complete

//         console.log('line 48', getNoteId);

//         res.json(noteId);
//     } catch (error) {
//         console.error("line 52,Error in GET / route:", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// router.delete('/:noteId', async (req, res) => {
//     try {
//         const noteId = req.params.noteId
//         const deletedNote = await deleteNote(noteId); // Wait for the asynchronous operation to complete

//         console.log('line 61', deletedNote);
//         res.json({message: `note with id ${noteId} deleted successfully`})
//         // res.json(noteId);
//     } catch (error) {
//         console.error("line 52,Error in GET / route:", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// router.post('/', async function (req, res) {
//     try {
//         // Validate request using a function, assuming you have one defined.
//         if (req.validate(NewProductSchema)) {
//          addNotes()
//         }
//     } catch (error) {
//         console.error(error);
//     }
// });

module.exports = { router };
