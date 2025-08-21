const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let latestCommand = "";  // Stores the last command

// Endpoint for Kodular to send a command
app.post("/send", (req, res) => {
  latestCommand = req.body.cmd || "";
  res.json({ status: "ok", command: latestCommand });
});

// Endpoint for TurboWarp to get the command
app.get("/receive", (req, res) => {
  res.json({ command: latestCommand });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
