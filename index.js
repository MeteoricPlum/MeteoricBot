const Discord = require('discord.js');
const bot = new Discord.Client();

//const ytdl = require("ytdl-core");

const PREFIX = '$';

var servers = {};

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
        message.reply('Tqm bro <3')
      break;

    case 'victor':
        message.channel.send('Les faltan manos para pelarsela a ese crack')
      break;

    case 'santis':
        message.channel.send('Acaso dijiste... champisbon?')
      break;

    case 'ian':
        message.channel.send('Jajajaja el costillas, esta bien cagado ese wey')
      break;

    case 'gaby':
        message.channel.send(':o la novia asiatica del champisbon')
      break;

    /*case 'play':

        function play(connection,message){
          var server = servers[message.guild.id];

          server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter: "audioonly"}));

          server.queue.shift();

          server.dispatcher.on("end", function(){
            if(server.queue[0]){
              play(connection,message);
            }else{
              connection.disconnect();
            }
          });

        }

        if(!args[1]){
          message.channel.send('ocupo un link si no es molestia');
          return;
        }
        if(message.member.VoiceChannel){
          message.channel.send('Epale mano como asi, metete a un canal de voz marrano');
          return;
        }
        if(!servers[message.guild.id]) servers[message.guild.id] = {
          queue: []
        }

        var server = servers[message.guild.id];

        server.queue.push(args[1]);

        if(!message.guild.VoiceConnection) message.member.VoiceChannel.join().then(function(connection){
          play(connection,message);
        });
      break;*/

    default:

  }

})

bot.login(process.env.BOT_TOKEN);
