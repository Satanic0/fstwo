const Discord = require('discord.js')
const db = require('quick.db')
//const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  let prefix = client.top_secret.pref;
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You must have 'Administrator' privileges to use this command.")
  if(!args[0]) {
    message.channel.send(`To Activate Protection System ** $ {prefix} open protection**`)
  }
  
  if (args[0] == 'aç') {
    if(db.has(`korumaacik_${message.guild.id}`)) return message.reply(`Protection System Is Already Open. To Turn Off ** $ {prefix} turn off protection**`)
    message.channel.send(`Protection System Activated !. Turn off ** $ {prefix} protection to turn it off**`)
    db.set(`korumaacik_${message.guild.id}`, 'acik')
  }
  if(args[0] == 'kapat') {
    if(!db.has(`korumaacik_${message.guild.id}`)) return message.reply(`Protection System Is Already Off. To Turn On ** $ {prefix} turn on protection**`)
    message.channel.send(`Protection System Closed. To turn it on, open ** $ {prefix} protection**`)
    db.delete(`korumaacik_${message.guild.id}`)
    
  } else if(args[0] == "kanal") {
    if(!db.has(`korumaacik_${message.guild.id}`)) return message.reply("you cannot set channel when protection system is off");  
    let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name.replace("-" , " ").toLowerCase().includes(args[1])) || message.guild.channels.get(args[1]) || message.guild.channels.id();
    if(!kanal) return message.reply("You need to enter a channel to set the protection channel. You can tag the channel or enter its name."); else {
      await db.set(`korumalog_${message.guild.id}`, kanal.id);
      message.reply("guard-log channel successfully " + kanal + " was set to.");
    }
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: 'moderasyon',
  permLevel: 0
}
exports.help = {
  name: 'protection',
  description: 'Activates Channel And Role Protection.',
  usage: 'koruma'
}