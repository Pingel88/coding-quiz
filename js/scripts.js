$(document).ready(function() {
  $("form#codeQuiz").submit(function(event) {

    const age = parseInt($("input#age").val());
    const color = $("input#favoriteColor").val();
    const bear = parseInt($("input:radio[name=bear]:checked").val());
    const covet = parseInt($("input:radio[name=covet]:checked").val());
    const cloud = parseInt($("input:radio[name=cloud]:checked").val());
    const bicycle = parseInt($("input:radio[name=bicycle]:checked").val());

    let points = 0;
    if (age > 0 && age <= 18) {
      points += 1;
    } else if (age > 18 && age <= 25) {
      points += 3;
    } else if (age > 25 && age <= 35) {
      points += 4;
    } else if (age > 35 && age <+ 118) {
      points += 2;
    } else {
      points -= 1000;
    }

    if (color === "Orange" || color === "orange") {
      points += 1;
    } else {
      points += 100;
    }

    points += bear + covet + cloud;
    points *= bicycle;
    
    if (points === 0) {
      $(".correct-heading").show();
      $("body").removeClass("orange-takeover");
      $(".not-orange").hide();
      $("#bicycle-result").show();
      $("#result").hide();
      $("#age-discrepancy").hide();
    } else if (points > 0 && points <= 9) {
      $(".correct-heading").show();
      $("body").removeClass("orange-takeover");
      $(".not-orange").hide();
      $("#bicycle-result").hide();
      $("#result").show();
      $(".language-result").text("Python");
      $(".language-url").replaceWith('<span class="language-url">the <a href="https://www.python.org/">Python homepage</a>.</span>')
      $("#age-discrepancy").hide();
    } else if (points > 9 && points <= 13) {
      $(".correct-heading").show();
      $("body").removeClass("orange-takeover");
      $(".not-orange").hide();
      $("#bicycle-result").hide();
      $("#result").show();
      $(".language-result").text("Go");
      $(".language-url").replaceWith('<span class="language-url">the <a href="https://golang.org/">Go homepage</a>.</span>')
      $("#age-discrepancy").hide();
    } else if (points > 13 && points <= 17) {
      $(".correct-heading").show();
      $("body").removeClass("orange-takeover");
      $(".not-orange").hide();
      $("#bicycle-result").hide();
      $("#result").show();
      $(".language-result").text("Ruby");
      $(".language-url").replaceWith('<span class="language-url">the <a href="https://www.ruby-lang.org/en/">Ruby homepage</a>.</span>')
      $("#age-discrepancy").hide();
    } else if (points > 17 && points <= 21) {
      $(".correct-heading").show();
      $("body").removeClass("orange-takeover");
      $(".not-orange").hide();
      $("#bicycle-result").hide();
      $("#result").show();
      $(".language-result").text("C#");
      $(".language-url").replaceWith('<span class="language-url"><a href="https://docs.microsoft.com/en-us/dotnet/csharp/">Microsoft\'s C# page</a>.</span>')
      $("#age-discrepancy").hide();
    } else if (points > 100) {
      $(".correct-heading").hide();
      $("body").addClass("orange-takeover");
      $(".not-orange").show();
      $("#bicycle-result").hide();
      $("#result").hide();
      $("#age-discrepancy").hide();
    } else if (points < 0) {
      $(".correct-heading").show();
      $("body").removeClass("orange-takeover");
      $(".not-orange").hide();
      $("#bicycle-result").hide();
      $("#result").hide();
      $("#age-discrepancy").show();
    }

    event.preventDefault();

  });
});