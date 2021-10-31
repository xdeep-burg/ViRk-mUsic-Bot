module.exports = {
  Admins: [
    "323130717808754688",
    "171308954633240578",
    "687672297804267520",
    "665722059589943297",
  ], //Admins of the bot [Ignoramous, 5LOTH, Paul, Raldor]
  ExpressServer: process.env.EXPRESS_SERVER || true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.PREFIX || "!", //Default prefix, Server Admins can change the prefix
  Port: process.env.PORT || 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.TOKEN || "", //Discord Bot Token
  ClientID: process.env.DISCORD_CLIENT_ID || "", //Discord Client ID
  ClientSecret: process.env.DISCORD_CLIENT_SECRET || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: process.env.SERVER_DEAFEN || true, //If you want bot to stay deafened
  DefaultVolume: process.env.VOLUME || 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: process.env.OAUTH2 || "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: process.env.COOKIESECRET || "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: process.env.EMBEDCOLOR || "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: process.env.PERMISSIONS || 2205281600, //Bot Inviting Permissions
  Website: process.env.WEBSITE || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  Presence: {
    status: process.env.DISCORD_ONLINE_STATUS || "online", // You can show online, idle, and dnd
    name: process.env.DISCORD_STATUS || "Music", // The message shown
    type: process.env.DISCORD_STATUS_TYPE || "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "host name or IP",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "your password",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.SPOTIFY_CLIENT_ID || "", //Spotify Client ID
    ClientSecret: process.env.SPOTIFY_CLIENT_ID_SECRET || "", //Spotify Client Secret
  },
};
