const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Resistance"
        },
        {
            type: Schema.Types.ObjectId,
            ref: "Cardio"
        }
    ]
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;