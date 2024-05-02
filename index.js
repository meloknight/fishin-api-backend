const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const myLogger = require("./middleware/logger");
const requestTime = require("./middleware/requestTime");

require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json()); //req.body and req.params
app.use(myLogger);
app.use(requestTime);

// ROUTES //

// create a fish
app.post("/api/v1/fish", async (req, res) => {
  try {
    const {
      fish_name,
      fish_mean_weight_kg,
      fish_weight_boundary_kg,
      fish_mean_length_cm,
      fish_length_boundary_cm,
      rarity,
    } = req.body;
    const newFish = await pool.query(
      "INSERT INTO fish (fish_name, fish_mean_weight_kg, fish_weight_boundary_kg, fish_mean_length_cm, fish_length_boundary_cm, rarity) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        fish_name,
        fish_mean_weight_kg,
        fish_weight_boundary_kg,
        fish_mean_length_cm,
        fish_length_boundary_cm,
        rarity,
      ]
    );

    res.status(200).json(newFish.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// get all fish
app.get("/api/v1/fish", async (req, res) => {
  try {
    console.log(req.requestTime);
    const allFish = await pool.query("SELECT * FROM fish");
    res.json(allFish.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a particular fish
app.get("/api/v1/fish/searchfish/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fish = await pool.query("SELECT * FROM fish WHERE fish_id = $1", [
      id,
    ]);
    res.json(fish.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// go fishin! Random fish for now. Expand out to only fish in selected region, at certain time, etc.
app.get("/api/v1/fish/fishin", async (req, res) => {
  try {
    // fishListLength = 12;
    const fishListLength = await pool.query(
      "SELECT COUNT(fish_name) FROM fish;"
    );
    const random = Math.random();
    // console.log(random);
    const randomNumber = Math.ceil(
      random * Number(fishListLength.rows[0].count)
    );
    // console.log(randomNumber);
    const fish = await pool.query("SELECT * FROM fish WHERE fish_id = $1", [
      randomNumber,
    ]);
    res.status(200).json(fish.rows[0]);
    // res.status(200).json(fishListLength.rows[0].count);
  } catch (error) {
    console.error(error.message);
  }
});

// update a fish
app.put("/api/v1/fish/searchfish/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fish_name } = req.body;
    console.log(`The fish_id is: ${id} and the fish_name will be ${fish_name}`);
    const updateFish = await pool.query(
      "UPDATE fish SET fish_name = $1 WHERE fish_id = $2",
      [fish_name, id]
    );
    res.status(200).json({ completed: true });
  } catch (error) {
    console.error(error.message);
  }
});

// delete a fish
app.delete("/api/v1/fish/searchfish/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFish = await pool.query(
      "DELETE FROM fishlist WHERE fish_id = $1",
      [id]
    );
    res.json({ completed: true });
  } catch (error) {
    console.error(error.message);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
