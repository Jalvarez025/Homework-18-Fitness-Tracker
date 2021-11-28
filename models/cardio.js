const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  type: String,
  name: String,
  duration: DateType.INTEGER,
  distance: DataType.INTEGER
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;