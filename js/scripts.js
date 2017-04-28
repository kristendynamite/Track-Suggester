$(document).ready(function() {
  $("#userInput").submit(function(event) {
    var name = $("#name").val();
    var design = $("#design").val();
    var android = $("#android").val();

    if (design === "Designing the navigation and layout of a website") && (android === "Yes") {
      $(".courseType").text("Java / Android");
      $(".java").show();
      $(".design").hide();
      $(".cSharp").hide();

    } else if (design === "Designing the navigation and layout of a website") && (android === "No") {
      $(".courseType").text("CSS / Design");
      $(".design").show();
      $(".java").hide();
      $(".cSharp").hide();

    } else if (design === "Building the infrastructure of an app") && (android === "Yes") {
      $(".courseType").text("Java / Android");
      $(".java").show();
      $(".design").hide();
      $(".cSharp").hide();

    } else if (design === "Building the infrastructure of an app") && (android === "No") {
      $(".courseType").text("C# / .NET");
      $(".cSharp").show();
      $(".java").hide();
      $(".design").hide();

    } else if (design === "" || android === "") {
      alert('Selection must be made in dropdown menu');
      $('#suggestion').hide();
    }

    if (name === "" || fiveYears === "") {
      alert('Please fill out the form');
      $('#suggestion').hide();
    }

    $(".nameInput").text(name);

    $('#suggestion').show();

    event.preventDefault();
  });
});
