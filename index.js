const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const upload = multer();
const app = express();
const PORT = 5000;

const usersDatasetRoutes = require("./routes/usersDataset");

app.use(bodyParser.json());
app.use(upload.array());

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/usersDataset", usersDatasetRoutes);

app.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}`);
});
