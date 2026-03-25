const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test
app.get("/", (req, res) => {
  res.send("Server running");
});

// main route
app.post("/users", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data received successfully" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started");
});