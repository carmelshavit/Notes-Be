const express = require("express");
require("dotenv").config();
const app = express();
const port = 3001;
const cors = require("cors");
const { router } = require("./routes/notes");
const { pool } = require("./db/db");

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use(express.json());

app.use("/notes", router);
// app.use("/users", router);

app.get("/", (req, res) => {
  res.send("Notes application");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// GET: /notes                           (get all)
// DELETE: /notes/:noteId     (delete)
// PUT: /notes/:noteId            (edit note)
// POST: /notes                        (create note)
