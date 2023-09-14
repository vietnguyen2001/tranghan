$(".readmore-btn").on('click', function() {
    $(this).parent().toggleClass("showContent");

    // Shorthand if-else statement
    var replaceText = $(this).parent().hasClass("showContent") ? "Xem toàn bộ" : "1";
    $(this).text(replaceText);
});

javascript
const list = document.getElementById("list");
const items = list.getElementsByTagName("li");

function removeLastTwoIteams() {
    for (let i = 0; i < 2; i++) {
        list.removeChild(items[items.length - 1]);
    }
    rearrangeItems();
}

function rearrangeItems() {
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'inline-block';
    }
}