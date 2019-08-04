alert("Resetting..")

var gifanimals = ["Lion", "Bear", "Dog", "Panda"];

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < gifanimals.length; i++) {

        var a = $("<button>");
        a.addClass("gif");
        a.attr("data-name", gifanimals[i]);
        a.text(gifanimals[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-gif").on("click", function(event){
    event.preventDefault();

    var gif = $("#gif-input").val().trim();
    gifanimals.push(gif);

    renderButtons();
});

    renderButtons();