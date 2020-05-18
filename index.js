const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '$';

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

    case 'help':
        messsage.channel.send("This should display help but won´t")
      break;
      
    case 'otto':
        message.channel.send("El otto es gei 8===D")
      break;

    case 'joksan':
        message.channel.send("Ese wey simpea a la Jules y no lo pelaaa. Fuckin mint")
      break;

    case 'love':
        message.channel.reply('Tqm bro <3')
      break;

    case 'suerte':
        if(!args[1]) return message.reply('Error escoge un numero del 1 al 5');

        switch (args[1]) {
          case '1':
              message.channel.send('Estás en el lugar perfecto para llegar desde aquí')
            break;
          default:

        }
      break;



    default:

  }

})

bot.login(process.env.BOT_TOKEN);
