const Discord = require('discord.js');
const db = require('quick.db')
 
exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have sufficient privileges to use this command.')
  const arg = args[0]
  if (!arg) return message.reply('You have to enter a number to set  limit, or type -Ban-limit close to turn off the feature.')
 
  if (arg == 'kapa' || arg == 'close') {
    if (!db.has(`banlimit_${message.guild.id}`)) return message.reply('This feature is already turned off.')
    db.delete(`banlimit_${message.guild.id}`)
    message.reply('The feature has been successfully closed.')
  }else{
    if (isNaN(Number(arg))) return message.reply('To set the limit, you must enter a ** number **.')
    db.set(`banlimit_${message.guild.id}`, Number(arg))
    message.reply(`Ban limiti başarıyla \`${arg.toString()}\` olarak belirlendi. Artık sunucudaki yetkililer maksimum ${arg} kere ban atabileceklerdir.`)
  }
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['banlimit'],
  kategori: 'moderasyon',
  permLevel: 0
};
 
exports.help = {
  name: 'ban-limit',
  description: 'Sets a ban limit',
  usage: 'banlimit'
};