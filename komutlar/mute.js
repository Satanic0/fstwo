const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (receivedMessage,  msg, args) => {
let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("To use this command, you must have the Manage Messages privilege.");
 if (user.hasPermission("BAN_MEMBERS")) return msg.channel.send(`Hata! \`${user.tag}\` The user named is authorized on this server.`)
let log = await db.fetch(`mlog_${msg.guild.id}`)
  if (!log) return msg.channel.send("No Mute Log Channel Set -To set\`-Mute-log#channel\`!")  
var mod = msg.author
var reason = args[1]
 let sebep = args.slice(2).join(' ')
 
  if (!user) return msg.reply('User Untagged')
 if (!reason) return msg.reply('You Have Not Specified Time! Your options:1s/1m/1h/1d/1w')
if (!sebep) return msg.reply('You did not specify a reason!')
 
 
 
  let mute = msg.guild.roles.find(r => r.name === "Muted");
         
  let mutetime = args[1]
if(!mute){
      mute = await msg.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      msg.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(mute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
 
    }
 
 
  await(user.addRole(mute.id));
msg.channel.send(``)
  let mutezaman = args[1]
.replace(`d`," Gün")
.replace(`s`," Saniye")
.replace(`h`," Saat")
.replace(`m`," Dakika")
.replace(`w`," Hafta")
  msg.channel.send(`${user}Person named $ {always} Silenced! Even if he leaves the server, his mutesi will continue!`)
db.set(`muteli_${msg.guild.id + user.id}`, 'muteli')
db.set(`süre_${msg.mentions.users.first().id + msg.guild.id}`, mutetime)
                         
  const muteembed = new Discord.RichEmbed()
        .setTitle('Ceza: Mute')
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
      .addField('Moderatör', `${mod}`,true)
      .addField('Sebep', `\`${sebep}\``,true)
      .addField('Kullanıcı', `<@${user.id}>`,true)
      .addField('Süre',`\`${mutezaman}\``)
  . setColor("RANDOM")
msg.guild.channels.get(log).sendEmbed(muteembed)
 
  setTimeout(function(){
db.delete(`muteli_${msg.guild.id + user.id}`)
    user.removeRole(mute.id)
 msg.channel.send(`<@${user.id}> Muten açıldı.`)
  }, ms(mutetime));
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sustur"],
  kategori: 'moderasyon',
  permLevel: 0
};
 
exports.help = {
  name: "mute",
  description: "Even if the specified person exits the server and enters, it mutesi does not leave.",
  usage: "mute"
};