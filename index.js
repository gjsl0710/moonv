const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require("./config.json")
const token = process.env.token;


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});

client.on('message', (message) => {
    if(message.content === '/ping') {
        message.reply('pong')
    }
});

client.login(token);