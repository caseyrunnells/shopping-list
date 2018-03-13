$(function () {
    $('#submit').click(function () {
        var items = 0,
            message = $('#typetextbox').val();

        $('#messagebox').prepend(addItem(message));

        function addItem(message) {
            items += 1;

            return "<li><p class='list-item'><label for='checkbox-" + items + "'><input class='checkbox' type='checkbox' id='checkbox-" + items + "'/><span>" + message + "</span></label></p></li>";
        }
    });

    $('.checkbox').click(function () {
        $(this).next().toggleClass("crossedOut");
    });
});

$('.clear-all').click(function () {
    $('li').remove();
});
