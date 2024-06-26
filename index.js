require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
// const fs = require("fs");
// const pool = require("./db");
const notFound = require("./middleware/not-found");
const myLogger = require("./middleware/logger");
const logErrors = require("./middleware/logErrors");
const errorHandler = require("./middleware/errorHandler");
const requestTime = require("./middleware/requestTime");
const {
  getAllFish,
  createFish,
  getSpecificFish,
  goFishin,
  updateFish,
  deleteFish,
} = require("./controllers/fishinControllers");

// middleware //
app.use(cors());
app.use(express.json()); //req.body and req.params
app.use(requestTime);
app.use(myLogger);
app.use(logErrors);
app.use(errorHandler);

const buildpath = path.normalize(path.join(__dirname, "client/dist"));
app.use(express.static(buildpath));

// routes //
app.route("/api/v1/fish").get(getAllFish); //.post(createFish);
app.route("/api/v1/fish/searchfish/:id").get(getSpecificFish);
// .put(updateFish)
// .delete(deleteFish);
app.get("/api/v1/fish/gofishin", goFishin);
// app.get("/", async (req, res) => {
//   // res.sendFile("/dist/index.html");
//   res.status(200).json("something fishy round here");
// });

// ROUTES TO ADD
// Find fish by name (query the db)
// upgrade the get all fish to return pages of 10 or something
// add restrictions to get based on origin or location

app.use(notFound);

// listener //
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

// "test": "echo \"Error: no test specified\" && exit 1"
