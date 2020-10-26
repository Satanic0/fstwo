const Discord = require('discord.js');
const db = require('quick.db');
//const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need to have Administrator permission to use this command.')
  if (!args[0]) return message.channel.send(new Discord.RichEmbed()
                                           .setColor('#e74c3c')
                                           .setDescription(`**Open** or **Close** You must type!\Example:**!Ad-block<open/close>**`))
  
  if (args[0] == 'aç') {
    db.set(`onlycode.reklamEngl_${message.guild.id}`, 'open')
      message.channel.send(new Discord.RichEmbed()
                          .setColor('#2ecc71')
                          .setDescription('Ad Blocking Filter Successfully ** Opened **.'))
  };
  if (args[0] == 'kapat') {
    db.set(`onlycode.reklamEngl_${message.guild.id}`, 'open')
    message.channel.send(new Discord.RichEmbed()
                          .setColor('#2ecc71')
                          .setDescription('Ad Blocking Filter Successfully ** Turned Off**.'))
  };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam-engel', 'reklamengel'],
  kategori: 'moderasyon',
  permLevel: 0
};

exports.help = {
  name: 'ad-blocking',
  description: 'You turn the Ad Blocking System on/off.',
  usage: 'reklam-engelleme'
};