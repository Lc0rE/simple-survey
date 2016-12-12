$(document).ready(function() {
    var rightArrow = $(".right-arrow");
    var leftArrow = $(".left-arrow");

    $(".right-container > button").click(function() {
        $(".right-container").find(".blue").removeClass("blue");

        $(this).toggleClass("blue");

        $(rightArrow).removeAttr("disabled");
        $(rightArrow).addClass("blue");

    });

});

