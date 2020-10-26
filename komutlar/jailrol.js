/*const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:basarili:690022418735169592>', '**SÜPER!** <:basarili:690022418735169592>', '**NASIL YAPTIN BUNU?!** <:basarili:690022418735169592>', '**MÜKEMMEL!** <:basarili:690022418735169592>', '**SEVDİM BUNU!** <:basarili:690022418735169592>', '**ŞİMDİ OLDU!** <:basarili:690022418735169592>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:basarisiz:690022419116851268>', '**OLMADI BU!** <:basarisiz:690022419116851268>', '**HAY AKSİ!** <:basarisiz:690022419116851268>', '**HADİ ORADAN!** <:basarisiz:690022419116851268>', '**OLMADI YA!** <:basarisiz:690022419116851268>', '**BÖYLE OLMAZ?!** <:basarisiz:690022419116851268>', '**HADİ YA!** <:basarisiz:690022419116851268>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-yetkilisi ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, .jail-yetkilisi ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: .yardım sustur-kanal`)
   
  
  if (args[0] == 'ayarla') {
  
  let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args[1].join('-'))
  if (!kanal) return message.channel.send(x2 + ` Bir kanal etiketle.`)
  
  db.set(`jailkanal_${message.guild.id}`, kanal.id)
  message.channel.send(x + ` Jail logunun tutulacağı kanal ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailkanal_${message.guild.id}`)
    message.channel.send(x + ` Jail logunun tutulduğu kanal başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailkanal'],
 permLevel: 0
};

exports.help = {
 name: 'jail-channel',
 description: 'You set which channel to send messages when someone is jailed.',
 usage: 'jail-kanal ayarla/sıfırla #kanal',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};*/
// jail-rol.js
const Discord = require('discord.js')
const db = require('quick.db');
//const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:basarili:690022418735169592>', '**SÜPER!** <:basarili:690022418735169592>', '**NASIL YAPTIN BUNU?!** <:basarili:690022418735169592>', '**MÜKEMMEL!** <:basarili:690022418735169592>', '**SEVDİM BUNU!** <:basarili:690022418735169592>', '**ŞİMDİ OLDU!** <:basarili:690022418735169592>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:basarisiz:690022419116851268>', '**OLMADI BU!** <:basarisiz:690022419116851268>', '**HAY AKSİ!** <:basarisiz:690022419116851268>', '**HADİ ORADAN!** <:basarisiz:690022419116851268>', '**OLMADI YA!** <:basarisiz:690022419116851268>', '**BÖYLE OLMAZ?!** <:basarisiz:690022419116851268>', '**HADİ YA!** <:basarisiz:690022419116851268>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`To use the command **-set / reset jail-role**,you need to have the 'MANAGE SERVER' authority.`)
if (!args[0]) return message.reply(`To use the system, you must type -jail-set reset @role`)
   
  
  if (args[0] == 'set') {
  
  let rol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!rol) return message.channel.send(x2 + ` Tag a role.`)
  
  db.set(`jailrol_${message.guild.id}`, rol.id)
  message.channel.send(x + ` Jail role set to $ {role}.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailrol_${message.guild.id}`)
    message.channel.send(x + ` The jail role has been successfully reset.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailrol'],
 permLevel: 0,
 kategori: "moderasyon"
};

exports.help = {
 name: 'jail-role',
 description: 'When someone is thrown into jail, you set what role they have.',
 usage: 'jail-rol ayarla/sıfırla @rol',
// kategori: 'moderasyon',
 //permLvl: '**SUNUCUYU YÖNET**'
};/*
// jail-yetkilisi.js
const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:basarili:690022418735169592>', '**SÜPER!** <:basarili:690022418735169592>', '**NASIL YAPTIN BUNU?!** <:basarili:690022418735169592>', '**MÜKEMMEL!** <:basarili:690022418735169592>', '**SEVDİM BUNU!** <:basarili:690022418735169592>', '**ŞİMDİ OLDU!** <:basarili:690022418735169592>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:basarisiz:690022419116851268>', '**OLMADI BU!** <:basarisiz:690022419116851268>', '**HAY AKSİ!** <:basarisiz:690022419116851268>', '**HADİ ORADAN!** <:basarisiz:690022419116851268>', '**OLMADI YA!** <:basarisiz:690022419116851268>', '**BÖYLE OLMAZ?!** <:basarisiz:690022419116851268>', '**HADİ YA!** <:basarisiz:690022419116851268>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-yetkilisi ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, .jail-yetkilisi ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: .yardım sustur-kanal`)
   
  
  if (args[0] == 'ayarla') {
  
  let yetkilirol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!yetkilirol) return message.channel.send(x2 + ` Tag a role.`)
  
  db.set(`jailyetkilisi_${message.guild.id}`, authorizedrol.id)
  message.channel.send(x + ` The jail authority is set to $ {authority}.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailyetkilisi_${message.guild.id}`)
    message.channel.send(x + ` The jail authority has been reset successfully.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'jail-Officer',
 description: 'set which roles people can jail.',
 usage: 'jail-yetkilisi ayarla/sıfırla @rol',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};*/