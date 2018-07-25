const Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const DBL = require('dblapi.js');

//const client = new Discord.Client();
//const dbl = new DBL(auth.token, client);

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'pumpit':
                bot.sendMessage({
                    to: channelID,
                    message: "https://cdn.discordapp.com/attachments/145942475805032449/471311185782898698/pumpItInTheClub.gif"
                });
            break;
         }
     }
});