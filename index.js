const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");

const PREFIX = '$';

var servers = {};

bot.on('ready', () =>{
  console.log('This bot is online.');
});

bot.on('message', async message=>{
  let args = message.content.substring(PREFIX.length).split(" ");
  var comandos = ["os","ping","website","bano","help","otto","joksan","love","victor","santis","ian","gaby","menfi","flami"];

  switch (args[0]) {
    case 'she':
        message.channel.send('Usando esto? Mi pana otra vez sad, se que es dificil pero ya deja de pensarla solo te haces daño. Tu puedes.')
      break;

    case 'os':
        message.channel.send('Stay strong mi pana, hay que darle pa´lante. ')
      break;

    case 'ping':
        message.channel.send('pong!')
      break;

    case 'website':
        message.channel.send('https://www.twitch.tv/meteoricplum')
      break;

    case 'bano':
        message.channel.send('el buen bano peruano')
      break;

    case 'help':
        message.channel.send("This should display help but won´t")
        for(const comand of comandos){
          message.channel.send(comand);
        }
      break;

    case 'otto':
    if(!args[1]){
      message.channel.send("Usar 'otto 1' u 'otto 2'")
    }
    if(args[1] == '1'){
      message.channel.send("El otto es gei 8===D:")
    }
    if(args[1] == '2'){
      message.channel.send("Chilla rata.")
    }
      break;

    case 'joksan':
        message.channel.send("Mi pana el chapulin.")
      break;

    case 'love':
        message.reply('Tqm bro <3')
      break;

    case 'victor':
        message.channel.send('Les faltan manos para pelarsela a ese crack')
      break;

    case 'santis':
        if(!args[1]){
          message.channel.send("Para flame leve usar 'santis 1'.\n Para flame maestro usar 'santis 2'")
        }

        if(args[1] == '1'){
          message.channel.send('Acaso dijiste... champisbon?')
        }
        if(args[1] == '2'){
          message.channel.send('Recuerda... bros before hoes. Simpear en exceso es muy peruano de tu parte.')
        }

      break;

    case 'ian':
        message.channel.send('Jajajaja el costillas, esta bien cagado ese wey')
      break;

    case 'gaby':
        message.channel.send(':o la novia asiatica del champisbon')
      break;

    case 'menfi':
        message.channel.send('ah no mames se esta quedando pelon :(')
      break;

    case 'flami':
        message.channel.send('Ese wey es Silver 2 en csgo, valorant y en la vida ajajajaj')
      break;

      case 'play':

          //let songs = new Queue();

          if(!args[1]){
            message.channel.send('ocupo un link si no es molestia');
            return;
          }
          if(!message.member.voice.channel){
            message.channel.send('Epale mano como asi, metete a un canal de voz marrano');
            return;
          }

          if(message.member.voice.channel){
            var song = args[1];

            //songs.enqueue(args[1]);

            const connection =  await message.member.voice.channel.join();

            const dispatcher = connection.play(ytdl(song, { filter: 'audioonly'}));

            //songs.dequeue();

            /*if(songs.isEmpty() == 0){
              message.member.VoiceChannel.leave();
            }*/
          }
      break;

    default:

  }

})

bot.login(process.env.BOT_TOKEN);
