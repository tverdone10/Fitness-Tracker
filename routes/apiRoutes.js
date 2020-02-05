console.log("controller loaded");
const Workouts = require("../model/workout.js");
var express = require("express");
var router = express.Router();

router.get("/api/workouts", function(req, res) {
    console.log("getting")
    Workouts.find().then(function(result) {
     res.json(result)
     console.log(result)
  });
});

router.post("/api/workouts", function(req, res) {
    
    Workouts.create({}).then(function(result) {
     res.json(result)
     console.log(result)
  });
});

router.put("/api/workouts/:id", function(req, res) {
  console.log(req)
    console.log(req.params.id, req.body)


 Workouts.findByIdAndUpdate(
   req.params.id,
   {$push:{exercises: req.body}}

  ).then(function(result) {
  res.json(result)    
  console.log(result)
 });
});

module.exports = router