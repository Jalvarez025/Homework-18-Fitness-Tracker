const router = require("express").Router();
const Workout = require("../models/workout.js");
const Cardio = require("../models/cardio.js");
const Resistance = require("../models/resistance.js");

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });