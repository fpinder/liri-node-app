# Liri-Node-App

[Liri-Node-App](https://github.com/fpinder/liri-node-app/)

**Object**

The assignment doesn't have an HTML page, so I've used screen captures below to explain how it works. Liri has 4 commands:

1. concert-This -
1. spotify-this-song uses the Spotify NPM to create a function -- spotifyThisSong -- to pull specific information from the returned object based on the song the user asks for.
1. movie-this uses the Request NPM to pull specific data from the OMDB database for the user-specified movie.
1. The do-what-it-says command uses fs.write to write to the random.txt file in my directory.

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
1. Give a high-level overview of how the app is organized
1. Give start-to-finish instructions on how to run the app
1. Include screenshots, gifs or videos of the app functioning
1. Contain a link to a deployed version of the app
1. Clearly list the technologies used in the app
1. State your role in the app development

**_Technology used_**
This app uses JavaScript, Node.js and 4 NPM packages: Request, Dotenv, Twitter, and Node-Spotify-API

| Files Used   | Their Role in the App                                                                  |
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
