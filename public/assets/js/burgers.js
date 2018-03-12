$(function () {
    $(document).on("click", ".change-devoured", function (event) {
        console.log("devoured clicked");
        var id = $(this).data("id");
        // save the new devoured state
        var newDevoured = $(this).data("newdevoured");
        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request with the id of button clicked
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        // Create a new burger, set devoured to false
        var newBurger = {
            burger_name: $("#newburgername").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
