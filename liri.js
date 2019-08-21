// Include the axios and reguire objects
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const axios = require("axios");
var fs = require("fs");

var moment = require('moment'); //required both entries to use with moment in nodeJS

var argument = process.argv[2] //For the switch statement
//var input = (process.argv[3]); // For the concerts/songs/movies; send to respective function.





// Store all of the arguments in an array
var nodeArgs = process.argv;



// Create an empty variable for holding the input
var input = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {

        input = input + "+" + nodeArgs[i];

    } else {

        input += nodeArgs[i];

    }
}




switch (argument) {
    case "concert-this":
        concertThis(input);
        break;
    case "spotify-this-song":
        spotifySong(input);
        break;
    case "movie-this":
        movieThis(input);
        break;
    case "do-what-it-says":
        doThis(input);
        break;
        // instructions firt time used
    default:
        console.log("\n" + "Type a Command After 'node liri.js': " + "\n" +
            "concert-this: " + "Example - node liri.js concert-this 'band name here'" + "\n" +
            "spotify-this-song: " + "Example - node liri.js spotify-this-song 'song name'" + "\n" +
            "movie-this: " + "Example - node liri.js movie-this 'any movie title' " + "\n" +
            "do-what-it-says: " + "Exanple - node liri.js do-what-it-says " + "\n");
        break;
}


function concertThis(input) {

    //console.log("The get Stament: " + "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp");

    if (!input) {
        console.log("\n" + "Type a Command After 'node liri.js': " + "\n" +
            "concert-this: " + "Example - node liri.js concert-this 'band name here'" + "\n" +
            "spotify-this-song: " + "Example - node liri.js spotify-this-song 'song name'" + "\n" +
            "movie-this: " + "Example - node liri.js movie-this 'any movie title' " + "\n" +
            "do-what-it-says: " + "Exanple - node liri.js do-what-it-says " + "\n");


    } else {

        axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
                function (response) {

                    fs.appendFile("log.txt", nodeArgs + "\n\n", function (err) {
                        // If an error was experienced we will log it.
                        if (err) {
                            console.log(err);
                        }

                    });

                    for (var i = 0; i < response.data.length; i++) {

                        var datetime = response.data[i].datetime; //datetime response 
                        var dateArr = datetime.split('T'); //split the date and time in the response

                        // console.log("Name of the venue: " + response.data[i].venue.name);
                        // console.log("Venue Location: " + response.data[i].venue.city);
                        // console.log("Date of the Event: " + moment(dateArr[0]).format("MM/DD/YYYY"))

                        var concertInfo =
                            "\n" + "-------------------Concert-This:----------------------------------" +
                            "\nName of the venue: " + response.data[i].venue.name +
                            "\nVenue Location: " + response.data[i].venue.city +
                            "\nDate of the Event: " + moment(dateArr[0]).format("MM/DD/YYYY") + "\n"

                        console.log(concertInfo);
                        // Next, we append the text into the "log.txt" file.
                        // If the file didn't exist, then it gets created on the fly.
                        fs.appendFile("log.txt", concertInfo + "\n", function (err) {
                            // If an error was experienced we will log it.
                            if (err) {
                                console.log(err);
                            }

                        });


                    }
                })
            .catch(function (error) {
                if (error) {
                    errors(error);
                }

            });

    }
}


function spotifySong(input) {

    if (!input) {
        // little for-loop magic to handle the inclusion of "+"s
        for (var i = 2; i < nodeArgs.length; i++) {

            if (i > 2 && i < nodeArgs.length) {

                input = input + "+" + nodeArgs[i];

            } else {

                input += nodeArgs[i];

            }
        }

    }

    // console.log("https://api.spotify.com/v1/search?q=track:" + input + "&type=track&limit=5");

    fs.appendFile("log.txt", nodeArgs + "\n\n", function (err) {
        // If an error was experienced we will log it.
        if (err) {
            console.log(err);
        }

    });

    if (!input) {
        input = "The Sign";
    };
    songRequested = input;
    spotify.search({
        type: "track",
        query: songRequested
    }).then(function (response) {
        var responseData = response.tracks.items;
        for (var i = 0; i < 5; i++) {
            if (responseData[i] != undefined) {
                var spotifyResults =
                    "\n" + "-------------------spotify-this-song:----------------------------------" +
                    "\nArtist: " + responseData[i].artists[0].name +
                    "\nSong: " + responseData[i].name +
                    "\nPreview URL: " + responseData[i].preview_url +
                    "\nAlbum: " + responseData[i].album.name + "\n"

                console.log(spotifyResults);
                // Next, we append the text into the "log.txt" file.
                // If the file didn't exist, then it gets created on the fly.
                fs.appendFile("log.txt", spotifyResults + "\n", function (err) {
                    // If an error was experienced we will log it.
                    if (err) {
                        console.log(err);
                    }

                });

            };
        };
    }).catch(function (error) {
        if (error) {
            errors(error);
        }

    });
};


function movieThis(input) {
    if (!input) {
        // And do a little for-loop magic to handle the inclusion of "+"s
        for (var i = 3; i < nodeArgs.length; i++) {

            if (i > 3 && i < nodeArgs.length) {

                input = input + "+" + nodeArgs[i];

            } else {

                input += nodeArgs[i];

            }
        }

    }


    if (!input) {
        input = "Mr.+Nobody";
    };


    //console.log("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy");

    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
            function (response) {

                fs.appendFile("log.txt", nodeArgs + "\n\n", function (err) {
                    // If an error was experienced we will log it.
                    if (err) {
                        console.log(err);
                    }

                });

                var movieResult =
                    "\n" + "-------------------movieThis:----------------------------------" +
                    "\nTitle of the movie: " + response.data.Title +
                    "\nYear the movie came out: " + response.data.Year +
                    "\nIMDB Rating of the movie: " + response.data.imdbRating +
                    "\nRotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value +
                    "\nCountry where the movie was produced: " + response.data.Country +
                    "\nLanguage of the movie: " + response.data.Language +
                    "\nPlot of the movie: " + response.data.Plot +
                    "\nActors in the movie: " + response.data.Actors + "\n"

                console.log(movieResult);
                // Next, we append the text into the "log.txt" file.
                // If the file didn't exist, then it gets created on the fly.
                fs.appendFile("log.txt", movieResult + "\n", function (err) {
                    // If an error was experienced we will log it.
                    if (err) {
                        console.log(err);
                    }

                });
            })
        .catch(function (error) {
            if (error) {
                errors(error);
            }

        });



}

function doThis() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }
        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
        spotifySong(dataArr[1]);


    });

}

//Error Fuction 
function errors(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log("Data error: " + error.response.data);
        console.log("---------------Status---------------");
        console.log("Status Error: " + error.response.status);
        console.log("---------------Status---------------");
        console.log("Headers Error: " + error.response.headers);

    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log("Error request: " + error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error Message: ", error.message);
    }
    console.log("Config Error: " + error.config);


}