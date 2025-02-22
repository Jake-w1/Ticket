const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
  intents: [
      GatewayIntentBits.Guilds, 
          GatewayIntentBits.GuildMessages
            ] 
            });

            client.once('ready', () => {
              console.log('Bot is online!');

                setInterval(() => {
                    client.channels.fetch('1339751211363995709')
                          .then(channel => channel.send('@everyone hello'))
                                .catch(console.error);
                                  }, 1000); // 1 second
                                  });

                                  client.login(process.env.DISCORD_TOKEN);