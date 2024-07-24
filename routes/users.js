const express = require("express");
const router = express.Router();
const getConnection = require("../db/db");
const queries = require("../db/queries");

router.get("/notes", async (_, response) => {
  const query = queries.getNotes();
  try {
    const connection = await getConnection();
    const [queryResult] = await connection.query(query);

    connection.release();
    response.send(queryResult);
  } catch (error) {
    console.error(error);
    response.status(500).send("An error occurred");
  }
});

module.exports = { router };
