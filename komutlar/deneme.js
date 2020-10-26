const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args) {
  
  let teyiterkek = db.get(`teyitRol_${message.guild.id}`);
  
  message.channel.send(teyiterkek);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'x',
  description: 'x',
  usage: 'x'
};