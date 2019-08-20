# Liri-Node-App

[Liri-Node-App](https://github.com/fpinder/liri-node-app/)

**Object**

This App doesn't have an HTML page. Therefore, I used screen captures to explain how it works.  LIRI is a Language Interpretation and Recognition Interface. LIRI will beis a command line node app that takes in parameters and gives you back data. Liri take in one of the following commands:

**1.concert-This -**  *The commamd `node liri.js concert-this <artist/band name here>`  will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal: Name of the venue, Venue location, and Date of the Event (use moment to format this as "MM/DD/YYYY")*

`node liri.js concert-this <artist/band name here>`

https://github.com/fpinder/liri-node-app/blob/master/images/concert-This.JPG

1. spotify-this-song uses the Spotify NPM to create a function -- spotifyThisSong -- to pull specific information from the returned object based on the song the user asks for.
1. movie-this uses the Request NPM to pull specific data from the OMDB database for the user-specified movie.
1. The do-what-it-says command uses fs.write to write to the random.txt file in my directory.

A. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
B. Give a high-level overview of how the app is organized
C. Give start-to-finish instructions on how to run the app
D. Include screenshots, gifs or videos of the app functioning
F. Contain a link to a deployed version of the app
G. Clearly list the technologies used in the app
H. State your role in the app development

**_Technology used_**
This app uses JavaScript, Node.js and 4 NPM packages: Request, Dotenv, Twitter, and Node-Spotify-API

| Files Used   |  Role in the App                                                                  |
| ------------ | -------------------------------------------------------------------------------------- |
| node_modules | node modules includes the 4 NPM packages                                               |
| .env         | an invisible file that stores my Twitter and Spotify keys                              |
| .gitignore   | another invisible file that includes a `#do not track these files` to hide ensure .env |
| keys.js      | exports the Spotify and Twitter keys, which are required in liri.js                    |
| liri.js      | the central file that includes all variables, functions and commands                   |
| random.txt   | the command do-what-it-says uses `fs.writeFile` to write to random.txt                 |

**_Code excerpts_**

I used a switch with "cases" to create four separate functions:

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
