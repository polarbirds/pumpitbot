const Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
const DBL = require('dblapi.js');

const client = new Discord.Client();
const dbl = new DBL(auth.token, client);

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


bot.on('message', message => {
    
    logger.info("message", message)

    if (message === '!pumpit') {
        message.channel.send("Yo", {
            files: [
                "https://cdn.discordapp.com/attachments/145942475805032449/471311185782898698/pumpItInTheClub.gif"
            ]
        });
    }
});