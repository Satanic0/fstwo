const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('<:carpi:761994125054312449> | Insufficient ** authorization!**')
  
  if (!args[0]){
    message.channel.send('<:carpi:761994125054312449> | Invalid argument; ** (open `` / `close) **')
  }
  if (args[0] === 'hungry'){
    message.channel.send("<:tik:761994125054312449> | Profanity filter ** is active! **")
    
    db.set(`kufur_${message.guild.id}`, "open")
  }
  if (args[0] === 'close'){
    message.channel.send('<:tik:761994125054312449> | Profanity filter ** disabled! **')
    
    db.set(`kufur_${message.guild.id}`, "closed")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfürengel"],
  kategori: 'moderasyon',
  permLevel: 0
}
exports.help = {
  name: "swearing-obstacle",
  description: "Swearing barrier opens or closes.",
  usage: "küfür-engel"
}