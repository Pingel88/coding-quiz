$(document).ready(function() {
  $("form#codeQuiz").submit(function(event) {
    const age = parseInt($("input#age").val());
    const color = ($("input#favoriteColor").val());
    let ageResult;
    let colorResult;
    if (age <= 18) {
      ageResult = 1;
    } else if (age > 18 && age <= 25) {
      ageResult = 2;
    } else if (age > 25 && age <= 35) {
      ageResult = 3;
    } else if (age > 35) {
      ageResult = 4;
    } else {
      alert("Please enter a number for your age!")
    }
    if (color === "Orange" || color === "orange") {
      colorResult = 1;
    } else {
      alert("Orange is the only true color!")
    }

     



// Modify to show quiz results
    // $("#rate").text(quote);
    // $("#quote").show();
    alert(ageResult + colorResult);
    event.preventDefault();
  });
});