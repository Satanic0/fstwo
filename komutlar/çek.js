const Discord = require('discord.js');
exports.run = async (client, message, args ) => {
  if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("You Must Have ** Move Members ** Permission to Use This Command!")

 let seslikanal = message.member.voiceChannelID
let seslikanal1 = message.member.voiceChannel
let kullanıcı = message.mentions.members.first()
let kullanıcıkanal = kullanıcı.voiceChannel
if(!seslikanal) return message.channel.send("You're not on a Voice Channel!")
if(kullanıcı.id == message.member.id) return message.channel.send("You Can't Attract Yourself!")
if(!args[0]) return message.channel.send("You Must Tag Someone!")
if(!kullanıcıkanal) return message.channel.send("The User You Tagged Is Not On The Voice Channel!")

if(kullanıcıkanal) {
kullanıcı.setVoiceChannel(seslikanal)
message.channel.send(`$ {user} Successfully Upgraded to ** $ {voichanal1} ** From channel ** $ {username} **!`)
}
 }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: 'moderasyon'
};

exports.help = {
  name: 'check',
  description: 'Attracts the User on a Different Voice Channel to the Channel You Are On.!',
  usage: 'çek'
};