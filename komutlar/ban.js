const discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("To Use This Command You Must Have the 'Ban Members' Authority.");
  let user = message.mentions.users.first()
  if (!args[0]) return message.reply("I Need You To Tag Someone To Ban it.");
  
  let sebep = args[1]
  if (!sebep) return message.reply("You Need To Give A Reason!");
  let log = await db.fetch(`mlog_${message.guild.id}`);
  if (!log) return message.reply("I Could Not Find The Log Channel To Set .modlog #channel");
  let mod = message.author
  let banembed = new discord.RichEmbed()
  .setTitle(`Ceza : Ban`)
  .setThumbnail(user.avatarURL||user.defaultAvatarURL)
  .addField(`》Moderatör:`, `${mod}`, true)
  .addField(`》Banlanan:`, `<@${user.id}>`, true)
  .addField(`》Sebep:`, `${sebep}`, true)
  .setColor('RANDOM')
  message.guild.channels.get(log).sendEmbed(banembed);
  message.guild.ban(user.id);
  await message.react('✅');
}

exports.conf = {
  enabled: "true",
  guildOnly: "true",
  aliases: [],
  kategori: "moderasyon"
};
exports.help = {
  name: "ban",
  description: "Bans Your Tagged Person.",
  usage: "ban"
}