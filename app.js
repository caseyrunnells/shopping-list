$(function () {
    $('#submit').click(function () {
        var items = 0,
            message = $('#typetextbox').val();

        $('#messagebox').prepend(addItem(message));

        function addItem(message) {
            items += 1;

            return "<li class='li'><p class='list-item'><label for='checkbox-" + items + "'><input class='checkbox' type='checkbox' id='checkbox-" + items + "'/><span>" + message + "</span></label><button class='mdl-button mdl-js-button mdl-button--icon clear'><i class='material-icons'>clear</i></button></p></li>";
        }
    });

    $('.checkbox').click(function () {
        $(this).next().toggleClass("crossedOut");
    });

    $('.clear').click(function () {
        items -= 1;
        $(this).closest('.li').remove();
    });

});


