const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

//connecting to the database
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("database connected")
);

//importing the routes
const ImageRoute = require("./routes/Images");

//using the routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

app.use("/images", ImageRoute);

//setting port
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", index.html))
  );
}

//listening to the server
// app.listen(port, () => console.log(`server running on port ${port}`));
app.listen(port, () => console.log(`server running on port ${port}`));
