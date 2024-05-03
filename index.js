require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const pool = require("./db");
const myLogger = require("./middleware/logger");
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
app.use(myLogger);
app.use(requestTime);

// routes //
app.route("/api/v1/fish").post(createFish).get(getAllFish);
app
  .route("/api/v1/fish/searchfish/:id")
  .get(getSpecificFish)
  .put(updateFish)
  .delete(deleteFish);
app.get("/api/v1/fish/fishin", goFishin);

// listener //
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
