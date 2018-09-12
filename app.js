require('dotenv').config();
var TwitchJS = require('twitch-js');
var DinoPoints = require('./dinopoints');

// Setup the client with your configuration; more details here:
// https://github.com/twitch-apis/twitch-js/blob/master/docs/Chat/Configuration.md
const options = {
  channels: ["#" + process.env.TWITCHUSER],
  // Provide an identity
  identity: {
    username: process.env.TWITCHUSER,
    password: process.env.OAUTH
  },
};

const client = new TwitchJS.client(options);

// Add chat event listener that will respond to "!command" messages with:
// "Hello world!".
client.on('chat', (channel, userstate, message, self) => {
  let isBroadcaster = ( "#" + userstate[ "username" ] ) == channel;
  let isMod = userstate[ "mod" ];

  if( message.startsWith( "!dino" ) ) {
    let parts = message.split( " " );
    let username = userstate[ "username" ];
    if( parts.length > 1 ) {
      username = parts[ 1 ].toLowerCase();
    }
    let points = DinoPoints.checkPointsByUsername( username );
    client.say( channel, "/me " + username + " has " + Number(points).toLocaleString() + " DINOPOINTS!" );
  }

  if( isBroadcaster || isMod ) {
    if( message.startsWith( "!givedino " ) ) {
      let parts = message.split( " " );
      if( parts.length == 4 ) {
        try {
          let fromUser = parts[ 1 ].toLowerCase();
          let toUser = parts[ 2 ].toLowerCase();
          let amount = parseInt( parts[ 3 ] );
          let result = DinoPoints.transferPointsByUsername( fromUser, toUser, amount );
          if( result < 0 ) {
            switch( result ) {
              case -1:
                client.say( channel, "/me USER IS EXTINCT" );
                break;
              case -2:
                client.say( channel, "/me NOT ENOUGH DNA" );
                break;
              case -3:
                client.say( channel, "/me NO TRANSFER OF DNA" );
                break;
              default:
                client.say( channel, "/me UNKNOWN DINO ERROR" );
                break;
            }
          }
          else {
              client.say( channel, "/me DINOPOINTS successfully transferred. " + toUser + " now has " + Number(result).toLocaleString() + " DINOPOINTS!" );
          }
        }
        catch( ex ) {}
      }
    }
  }

  if( message.startsWith( "!givedino " ) ) {
    let parts = message.split( " " );
    if( parts.length == 3 ) {
      try {
        let fromUser = userstate[ "username" ];
        let toUser = parts[ 1 ].toLowerCase();
        let amount = parseInt( parts[ 2 ] );
        let result = DinoPoints.transferPointsByUsername( fromUser, toUser, amount );
        if( result < 0 ) {
          switch( result ) {
            case -1:
              client.say( channel, "/me USER IS EXTINCT" );
              break;
            case -2:
              client.say( channel, "/me NOT ENOUGH DNA" );
              break;
            case -3:
              client.say( channel, "/me NO TRANSFER OF DNA" );
              break;
            default:
              client.say( channel, "/me UNKNOWN DINO ERROR" );
              break;
          }
        }
        else {
            client.say( channel, "/me DINOPOINTS successfully transferred. " + toUser + " now has " + Number(result).toLocaleString() + " DINOPOINTS!" );
        }
      }
      catch( ex ) {}
    }
  }
});

// Finally, connect to the channel
client.connect();
