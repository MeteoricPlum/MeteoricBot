const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzExMzc3NzQ0NjUwMzA1NTY2.XsCS1Q.ADRCAO3Evrs-1gdG8RrByFKeHL4';

const PREFIX = '!';

bot.on('ready', () =>{
  console.log('This bot is online.');
});

bot.on('message', message=>{
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'ping':
        message.channel.send('pong!')
      break;

    case 'website':
        message.channel.send('https://www.twitch.tv/meteoricplum')
      break;

    default:

  }

})

bot.login(token);
