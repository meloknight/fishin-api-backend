const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
