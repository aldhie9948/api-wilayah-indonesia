const express = require("express");
const app = express();
const PORT = 3001;
const path = require("path");

app.use(express.json());
app.get("/api/provinces", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "static/api/provinces.json"));
});

app.get("/api/regencies/:id", (req, res) => {
  const id = req.params.id;
  id || res.status(400).json({ error: "malformat id" });
  res
    .status(200)
    .sendFile(path.join(__dirname, `static/api/regencies/${id}.json`));
});

app.get("/api/districts/:id", (req, res) => {
  const id = req.params.id;
  id || res.status(400).json({ error: "malformat id" });
  res
    .status(200)
    .sendFile(path.join(__dirname, `static/api/districts/${id}.json`));
});

app.listen(process.env.PORT || PORT, () => console.log("server start"));
