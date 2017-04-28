$(function () {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var design = $("#design").val();
    var android = $("#android").val();

    if ( design === "Building the infrastructure of an app" && android === "Yes") {
      $(".java").show();
      $(".design").hide();
      $(".cSharp").hide();
    } else if ( design === "Building the infrastructure of an app" && android === "No") {
      $(".cSharp").show();
      $(".java").hide();
      $(".cSharp").hide();
    } else if ( design === "Designing the navigation and layout of a website") || (design === "Solving for bad website interfaces and poor user experience") && android === "No"{
    $(".design").show();
    $(".java").hide();
    $(".cSharp").hide();
    }

    if (name === "") {
      alert('Fill in your name')
      $(".suggestion").hide();
    }

    $(".name").text(name);

    $(".suggestion").show();
  });
});
