const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  student_id: String,
  name: String,
  department: String,
  semester: Number,
  subjects: [
    { name: String, marks: Number }
  ],
  sgpa: Number,
  cgpa: Number
});

module.exports = mongoose.model("Result", resultSchema);