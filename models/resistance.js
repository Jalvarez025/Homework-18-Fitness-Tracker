const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  type: String,
  name: String,
  duration: DataTypes.INTEGER,
  weight: INTEGER,
  reps: INTEGER,
  sets: INTEGER
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;