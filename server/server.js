require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/tasks", require("./routes/tasks"));

// ✅ FIXED PATH (IMPORTANT)
app.use(express.static(path.join(__dirname, "server/client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "server/client/index.html"));
});

app.listen(process.env.PORT, () => console.log("Server running"));