const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzcxMjU3NDQxMDc3MDM1MDE4.X5pfdw.XGi3Szap15zbiFjTbnPG13-HDo8';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === 'Hello') {
        message.reply('Hello, world!')
    }
});

client.login(token);