$(document).ready(function() {
  var workoutID;

  $("#display").on("click", function() {
    $.ajax({
      method: "get",
      url: "/api/workouts/"
    }).then(function(data) {
      console.log(data);
    });
  });

  $("#submit").on("click", function() {
    event.preventDefault()
    var newWorkout = {
      type: $("#type").val(),
      duration: $("#duration").val(),
      distance: $("#distance").val(),
      repitition: $("#reps").val()
    };
    console.log(newWorkout);
    $.ajax({
      method: "put",
      url: "/api/workouts/" + workoutID,
      data: newWorkout
    }).then(function(data) {
      console.log(data);
      //apeending the data
    });
  });

  $("#create").on("click", function() {
    $.ajax({
      method: "post",
      url: "/api/workouts/"
    }).then(function(data) {
      console.log(data);
      workoutID = data._id;
      console.log(workoutID)
      $("#current").text(data.exercises)
    });
  });
});
