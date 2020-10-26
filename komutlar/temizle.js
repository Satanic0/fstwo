const Discord = require('discord.js');
//let owner = "670302634795728928"


exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning: warning: You cannot use the command named ',' clear in private messages')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('warning: Warning: warning: ,You must have the Manage Posts permission to be able to delete messages.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
   // .addField('**Eylem: **', 'Sohbet silme')
    //.addField('**Yetkili: **', message.author.username)
    //.addField('**Sonuç: **', `Başarılı`)
    .addField(messagecount + `Messege ${message.author.username} Deleted By`)
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
    console.log("**Sohbet " + message.member + " tarafından silindi! **").then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: 'moderasyon',
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'Set amount deletes message.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};