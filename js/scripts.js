$(document).ready(function() {
  $("form#codeQuiz").submit(function(event) {

    const age = parseInt($("input#age").val());
    const color = $("input#favoriteColor").val();
    const bear = parseInt($("input:radio[name=bear]:checked").val());
    const covet = parseInt($("input:radio[name=covet]:checked").val());
    const cloud = parseInt($("input:radio[name=cloud]:checked").val());
    const bicycle = parseInt($("input:radio[name=bicycle]:checked").val());

    let points = 0;
    if (age <= 18) {
      points += 1;
    } else if (age > 18 && age <= 25) {
      points += 3;
    } else if (age > 25 && age <= 35) {
      points += 4;
    } else if (age > 35) {
      points += 2;
    } else {
      alert("Please enter a number for your age!")
    }

    if (color === "Orange" || color === "orange") {
      points += 1;
    } else {
      points + 100;
    }

    points += bear + covet + cloud
    points *= bicycle;
    

     



// Modify to show quiz results
    // $("#rate").text(quote);
    // $("#quote").show();
    alert("total points: " + points);
    event.preventDefault();
  });
});