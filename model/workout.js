var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
          type:{
            type: String

          },
          duration:{
              type: Number
          },
          distance:{
              type: Number
          },
          repetition:{
              type: Number
          }

      }
    ]
});

var Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout;