const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("670302634795728928") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "695719224940953621";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `0`,
    '1': `1`,
    '2': `2`,
    '3': `3`,
    '4': `4`,                       
    '5': `5`,
    '6': `6`,
    '7': `7`,
    '8': `8`,
    '9': `9`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `0`,
    '1': `1`,
    '2': `2`,
    '3': `3`,
    '4': `4`,                       
    '5': `5`,
    '6': `6`,
    '7': `7`,
    '8': `8`,
    '9': `9`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "ꍭ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `0`,
    '1': `1`,
    '2': `2`,
    '3': `3`,
    '4': `4`,                       
    '5': `5`,
    '6': `6`,
    '7': `7`,
    '8': `8`,
    '9': `9`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `0`,
    '1': `1`,
    '2': `2`,
    '3': `3`,
    '4': `4`,                       
    '5': `5`,
    '6': `6`,
    '7': `7`,
    '8': `8`,
    '9': `9`}[d];
      })
    }
  ///codare farkıyla bebeğim
const emoji1 = client.emojis.get("700966753471299625")
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 //.setAuthor('CodAre')
 .setDescription(`$ {emoji1} ** Our server has Total **$ {member}**Members.**\n\n${emoji1}**Our server has Total**${onlayn}**Online members.**\n\n${emoji1} **Voice channels Total**$ {voice}**There are members.**\n\n${emoji1}**Our tag Total**${tagdakilerr}**People.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**You do not have the right to use this command!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}