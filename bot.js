const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env file

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
  console.log('Bot is online!');

    setInterval(() => {
        client.channels.cache.get('1339751211363995709').send('@everyone hello');
          }, 1000); // 100 milliseconds = 1 second
          });

          // Use the token from the .env file
          client.login(process.env.DISCORD_TOKEN);