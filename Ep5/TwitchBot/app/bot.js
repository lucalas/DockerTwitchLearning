const config = require('./config.json');
const tmi = require('tmi.js');
const axios = require('axios')

// Define configuration options
const opts = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: config.bot_username,
    password: config.oauth_token
  },
  channels: [
    config.channel_name
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect().catch(console.error);

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) { return; }

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it

  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`).catch(console.error);
    console.log(`* Executed ${commandName} command`);
  } else if (commandName.startsWith("!luce")) {
      setLight(config.ha_token, commandName.split(" ")[1]);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}
// Function called when the "dice" command is issued
function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

function setLight(token, color) {
  axios.post( 
    'http://192.168.1.137:8123/api/services/light/turn_on',
    {
      'entity_id': 'light.letto',
      'color_name': color
    },
    {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  )
  //.then(console.log)
  .catch(console.log);
}