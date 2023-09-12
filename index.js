$(".readmore-btn").on('click', function() {
    $(this).parent().toggleClass("showContent");

    // Shorthand if-else statement
    var replaceText = $(this).parent().hasClass("showContent") ? "Xem toàn bộ" : "1";
    $(this).text(replaceText);
});