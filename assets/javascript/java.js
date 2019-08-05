alert("Resetting..")

var gifArray = ["panda", "shark", "tiger", "bear"];

function displayGifs() {
    var gifAnimals = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifAnimals + "&api_key=T47hwreIsoUVDIFXaNBZxTX42nZzHJEJ";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        console.log(response);
        var results = response.data;

        for (var i=0; i<results.length; i++){
            var animalDiv = $("<div>");
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(animalImage);
            $("#gifs-view").prepend(animalDiv);
        }
    });
}

function renderButtons() {
    $("#buttons-view").empty();
    for (var i=0; i<gifArray.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-name", gifArray[i]);
        a.text(gifArray[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-gif").on("click", function(event){
    event.preventDefault();
    var gifAnimals = $("#gif-input").val().trim();
    gifArray.push(gifAnimals);
    renderButtons();
});

$(document).on("click", ".gif-btn", displayGifs);

renderButtons();

















// function displayGif(){

// $("button").on("click", function(){
//     var gifAnimals = $(this).attr("data-animal");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifAnimals + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(queryURL);
//         console.log(response);
//         var results = response.data;

//         for (var i=0; i<results.length; i++){
//             var animalDiv = $("<div>");

//             var animalImage = $("<img>");
//             animalImage.attr("src", results[i].images.fixed_height.url);

//             animalDiv.append(animalImage);

//             $("#gifs-appear-here").prepend(animalDiv);
//         }
//     });
// });
// }

// $("#add-movie").on("click", function(event){
//     event.preventDefault();
//     var gifsearch = $("#gif-input").val().trim();
//     gifAnimals.push(gifsearch);
//     renderButtons();
// })

//     $(document).on("click", ".gif-btn", displayGif);

//     renderButtons();