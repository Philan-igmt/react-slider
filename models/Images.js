const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  URL: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema);
