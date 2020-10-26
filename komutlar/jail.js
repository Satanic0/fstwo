const Discord = require("discord.js");
const ms = require("ms");
//const ayarlar = require('../ayarlar.json');
const prefix = "-"

module.exports.run = async (client, message, args) => {
let db = require('quick.db')
let botisim = message.guild.members.get(client.user.id).displayName
let data = await db.fetch(`jailrol_${message.guild.id}`)
if(!data)  return message.channel.send(`I couldn't find the jail role.`)
let data2 = await db.fetch(`jailyetkilisi_${message.guild.id}`)
if(!data2)  return message.channel.send(`I couldn't find the jail officer role.`)
let data3 = await db.fetch(`jailkanal_${message.guild.id}`)
if(!data3)  return message.channel.send(`I could not find the jail channel.`)
let rol = message.guild.roles.get(data)
if(!rol) return message.channel.send(`Jail role is not set.`)
let yetkili = message.guild.roles.get(data2)
if(!yetkili) return message.channel.send(`Jail authority is not set.`)
let kanal = message.guild.channels.get(data3)
if(!kanal) return message.channel.send(`Jail log channel not set.`)

  if (!message.member.roles.has(`${yetkili.id}`)) return message.channel.send(`To use the **. jail ** command, you need the $ {authority} role.`)
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kişi) return message.channel.send(`Who are you going to silence? Don't forget to tag it.`)
  if(kişi.hasPermission("MANAGE_GUILD")) return message.channel.send(`No way. I can't shut this person down.`)
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send(`You must specify how long you will be on the jaw.\ N Example:+jail person time reason`)

let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Reason not specified.'
  
  const wasted = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`Here it is! Again, someone was sent to prison.`)
  .addField(`**Person sent to prison:**`, kişi, true)
  .addField(`**Judge:**`, `<@${message.author.id}>`, true)
  .addField(`**Reason:**`, sebep, true)
  .addField(`**Time:**`, zaman.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat'), true)
  .setTimestamp()
  .setFooter(`${message.channel.name} Used in the channel.`)
  .setThumbnail(message.author.avatarURL)
  
  const bitti = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription(`Someone's evacuated!`)
  .addField(`**Evacuated:**`, kişi, true)
  .addField(`**Judge:**`, `<@${message.author.id}>`, true)
  .setTimestamp()
  .setColor(`#f3c7e1`)
  .setFooter(`Jail süresi bitti. | ${message.channel.name} Used in the channel.`)
  .setThumbnail(message.author.avatarURL)
  
  kişi.addRole(rol.id);
    kişi.roles.forEach(r => {
kişi.removeRole(r.id)
db.set(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    db.set(`${message.guild.id}.jail.${kişi.id}`, 'codare')
    kanal.send(wasted)
    message.channel.send(`The person named $ {person} was successfully sent to prison.`)
    setTimeout(async () =>{
    kişi.removeRole(rol.id)
    kanal.send(bitti)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.addRole(i)}
db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
})
          db.delete(`${message.guild.id}.jail.${kişi.id}`)
              }, ms(zaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uçur'],
    permLevel: 0,
    kategori: "moderasyon"
  };
  
exports.help = {
 name: 'jail',
 description: 'You send someone to jail with the role you set.|-jail @ member deadline reason',
 usage: 'jail @üye <10s,10m,10h,10d> sebep',
 //kategori: 'moderasyon',
// permLvl: '**Bulunmuyor.** (+sustur-yetkilisi ayarla)'
};