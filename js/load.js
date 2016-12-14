$(document).ready(function () {
  var click = 0;
  var showData = $('#show-data');
  var showCounter = $('#show-counter');

  $.getJSON('../data/example.json', function (data) {
    var length = data.items.length;
    showCounter.append(click+1 + " / " + length);
  });


  $('#next-data').click(function () {
    click++;
    $.getJSON('../data/example.json', function (data) {
      var items = data.items[click].paragraph;
      var length = data.items.length;

      showData.empty();
      showData.append(items);

      showCounter.empty();
      showCounter.append(click+1 + " / " + length);

      $(".right-container").find(".blue").removeClass("blue");

    });
  });

  $('#prev-data').click(function() {
    click--;
    $.getJSON('../data/example.json', function(data) {
      var items = data.items[click].paragraph;
      var length = data.items.length;

      showData.empty();
      showData.append(items);

      showCounter.empty();
      showCounter.append(click+1 + " / " + length);

      $(".right-container").find(".blue").removeClass("blue");
    });
  })
});
