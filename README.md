# Liri-Node-App

[Liri-Node-App](https://github.com/fpinder/liri-node-app/)

**Object**

This App doesn't have an HTML page. Therefore, I used screen captures to explain how it works.  LIRI is a Language Interpretation and Recognition Interface. LIRI will is a command line node app that takes in parameters and gives you back data in terminal as well as save the information in a log file. Liri take in one of the following commands:

**1.concert-This -**  *The commamd `node liri.js concert-this <artist/band name here>`  will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal: Name of the venue, Venue location, and Date of the Event (use moment to format this as "MM/DD/YYYY")*

`node liri.js concert-this <artist/band name here>`

 <a href="#"><img src="https://github.com/fpinder/liri-node-app/blob/master/images/concert-This.JPG" alt="concert-this"></a>


**spotify-this-song -** *The command `node liri.js spotify-this-song '<song name here>'` will utilize the node-spotify-api package in order to retrieve followint song information from the Spotify API: Artist(s), The song's name, A preview link of the song from Spotify, and The album that the song is from. However, if no song is provided then your program will default to "The Sign" by Ace of Base*

`node liri.js spotify-this-song '<song name here>'`

 <a href="#"><img src="https://github.com/fpinder/liri-node-app/blob/master/images/spotify-this-song.JPG" alt="spotify-this-song></a>

**movie-this -** *The commamd `node liri.js movie-this '<movie name here>'` Request NPM to pull specific data from the OMDB database for the user-specified movie. Additionaly,  will output the following information to the terminal/bash window:*
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

   `node liri.js movie-this '<movie name here>'`

    <a href="#"><img src="https://github.com/fpinder/liri-node-app/blob/master/images/movie-this.JPG" alt="movie-thi"></a>


**The do-what-it-says** *The command `node liri.js do-what-it-says` use the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for "I Want it That Way," ; movie-this for "Ready or Not", and  concert-this for "Guns and Roses"*

`node liri.js do-what-it-says`

<a href="#"><img src="https://github.com/fpinder/liri-node-app/blob/master/images/do-what-it-says.JPG" alt="do-what-it-says"></a>

**_Technology used_**
This app uses JavaScript, Node.js and 4 NPM packages: Request, Dotenv, Twitter, and Node-Spotify-API

| Files Used   |  Role in the App                                                                  |
| ------------ | -------------------------------------------------------------------------------------- |
| node_modules | node modules includes the  NPM packages                                               |
| .env         | Invisible file that used by the dotenv package to set what are known as environment variables keys                              |
| .gitignore   | This will tell git not to track these files, and thus they won't be committed to Github |
| keys.js      | exports the Spotify keys that are required in liri.js                    |
| liri.js      | The Javascript file that includes all variables, functions and commands                   |
| random.txt   | the command do-what-it-says uses `fs.writeFile` to write to random.txt                 |

**_Code excerpts_**

*I used a switch with "cases" to create four separate functions:*

```switch (argument) {
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
```

*App also provides a help menu to aid the user in executing each commands*

<a href="#"><img src="https://github.com/fpinder/liri-node-app/blob/master/images/Help.JPG" alt="Help File"></a>






