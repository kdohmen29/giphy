
var data = ["Vikings", "Rams", "Patriots", "Titans"]
addButtons();
function addButtons() {
    $("#container").empty();
    data.forEach(function (eachItem) {
        // create a new button
        var newButton = $("<button>");
        // add values to the new button from our array
        newButton.html(eachItem);
        newButton.addClass("buttons");
        newButton.on("click", function () {
            var APIkey = "ZzYm2cjgvAuNmcapXUca61bPU946Jt1W";
            console.log();
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + eachItem + "&limit=10" + "&api_key=" + APIkey;
            $.get(queryURL, function (response) {
                $("#giphys").empty()
                response.data.forEach(function (eachGiphyUrl) {
                    var animatedUrl = eachGiphyUrl.images.fixed_height.url;
                    var stillUrl = eachGiphyUrl.images.fixed_height_still.url;
                    var newImage = $("<img>");
                    newImage.attr("state", "still")
                    newImage.attr("src", stillUrl);
                    newImage.on("click", function () {
                        var state = $(this).attr("state");
                        if(state === "still"){
                            $(this).attr("src", animatedUrl);
                            $(this).attr("state", "animated")
                        } else {
                            $(this).attr("src", stillUrl);
                            $(this).attr("state", "still");
                        }
                        
                    })
                    $("#giphys").append(newImage);

                })

            })


        });
        // append the new button to the page
        $("#container").append(newButton);
    })

};


$("#add-button-form").on("submit", function(event){
    event.preventDefault();
    var newButton = $("#add-button-text").val();
    data.push(newButton);
    addButtons();
    $("#add-button-form")[0].reset();
    
});


// my Giphy apikey
// APIkey = "ZzYm2cjgvAuNmcapXUca61bPU946Jt1W"


// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 'bear' + "&limit=10" + "&api_key=" + APIkey;


// $.get(queryURL, function(response){
//   console.log(response);


//   for (var i = 0; i < 10; i++) {
//     var newGiphy = $('<img>')
//     newGiphy.attr('src', response.data[i].images.fixed_height_still.url)
//     newGiphy.attr('animated', response.data[i].images.fixed_height.url)
//     newGiphy.attr('still', response.data[i].images.fixed_height_still.url)
//     newGiphy.attr('state', "still")
//     newGiphy.addClass('giphys')
//     $('.container').append(newGiphy)
//   }
// })


// $(document).on('click', '.giphys', function(){
//   var animatedGiphy = $(this).attr('animated')
//   var stillGiphy = $(this).attr('still')
//   var state = $(this).attr('state')

//   if(state == "still"){
//     $(this).attr('src', animatedGiphy)
//     $(this).attr('state', 'animated')
//   } else {
//     $(this).attr('src', stillGiphy)
//     $(this).attr('state', 'still')
//   }
//   // console.log(animatedGiphy);
// })