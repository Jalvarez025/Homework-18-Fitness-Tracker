const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  exercises: [
    {
      type: 'Resistance',
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    },
    {
      type: 'Cardio',
      name: String,
      duration: Number,
      distance: Number
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;