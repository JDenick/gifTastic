// Please see Readme for psuedocode 

var gifArray = ["panda", "shark", "tiger", "bear"];

function displayGifs() {
    var gifAnimals = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifAnimals + "&api_key=T47hwreIsoUVDIFXaNBZxTX42nZzHJEJ";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;

        for (var i=0; i<results.length; i++){
            var animalDiv = $("<div>");
            var animalImage = $("<img>");
            var pOne = $("<p>").text("rating: " + results[i].rating);
            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;
            animalDiv.append(pOne);
            animalImage.attr("src", results[i].images.fixed_height.url);
            // animalImage.attr('src',still);   //
            // animalImage.attr('data-still',still);
            // animalImage.attr('data-animated',animated);
            // animalImage.attr('data-state','still');
            // AnimalImage.addClass('searchImage'); //
            animalDiv.append(animalImage);
            $("#gifs-view").prepend(animalDiv);
        }
    });
}

// $(document).on("click", ".searchImage", function(){ 
//     var state = $(this).data("state");
//     if(state == 'still'){
//         $(this).attr('src',$(this).data('animated'));
//         $(this).attr('data-state', 'animated');
//     } else {
//         $(this).attr('src',$(this).data('still'));
//         $(this).attr('data-state', 'still');
//     }
// })

function renderButtons() {
    $("#buttons-view").empty();
    for (var i=0; i<gifArray.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-animal", gifArray[i]);
        a.text(gifArray[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-gif").on("click", function(event){
    event.preventDefault();
    var gifAnimals = $("#gif-input").val().trim();
    gifArray.push(gifAnimals);
    renderButtons();
    $("#gif-input").val("");                            // 42 - to clear out text box
});

$(document).on("click", ".gif-btn", displayGifs);

renderButtons();















