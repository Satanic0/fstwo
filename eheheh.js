const express = require("express");
const http = require("http");
const app = express();
 
app.get("/", (request, response) => {
  console.log(Date.now() + " BOT Aktif.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_NAME}.glitch.me`);
}, 1000 * 60 * 3);


const Discord = require('discord.js');
const client = new Discord.Client();
/*
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});*/

client.login(process.env.TOKEN);