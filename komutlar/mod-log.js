//AYARLAMA KODU




const Discord = require('discord.js');
//const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = "."

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**You do not have the necessary authorization to do this!**`)
 
 let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`**Please enter a channel!**\n>**Correct Usage;**\`${prefix}set modlog<#channel>\``)

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    message.channel.send(`> **Modlog channel has been set up successfully.**`)
    
    } else {
      if(modlogs) {
        
        const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
        return message.channel.send(`**Modlog channel is already set on this server. To reset:**||${prefix}set-reset modlog||\ n**Set channel:**\`$ {modlogchanal.name} \``)
        
      }
    }

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log',
    description: 'Determines the log channel.',
    usage: 'mod-log <#kanal>'
}
//SIFIRLAMA KODU
/*

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!**`)
  
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    return message.channel.send(`> **Bu sunucuda daha önceden modlog kanalı ayarlanmamış. Ayarlamak için:** \`${prefix}modlog-ayarla <#kanal>\``)
  } else {
    if(modlogs) {    
      db.delete(`modlogkanaly_${message.guild.id}`)
      message.channel.send(`> **Modlog kanalı başarılı bir sıfırlandı!**`)
    }
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["modlog-sıfırla"],
    permLevel: 0
}

exports.help = {
    name: 'modlog-reset',
    description: 'Zeros.',
    usage: 'modlog-sıfırla'
}*/
