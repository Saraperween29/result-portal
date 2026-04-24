const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/examDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const resultRoutes = require("./routes/resultRoutes");
app.use("/api", resultRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Server
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});