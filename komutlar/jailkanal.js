const Discord = require('discord.js')
const db = require('quick.db');
//const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:basarili:690022418735169592>', '**SUPER!** <:successful:690022418735169592>', '**HOW DID YOU DO THIS?!** <:successful:690022418735169592>', '**EXCELLENT!** <:successful:690022418735169592>', '**I LIKED IT!** <:successful:690022418735169592>', '**HAPPENED NOW!** <:successful:690022418735169592>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TOBACCA** <:unsuccessful:690022419116851268>', '**THIS IS BAD!** <:unsuccessful:690022419116851268>', '**CHRIST NO!** <:unsuccessful:690022419116851268>', '**LET THERE!** <:unsuccessful:690022419116851268>', '**HAPPENED YA!** <:unsuccessful:690022419116851268>', '**THAT DONT** <:unsuccessful:690022419116851268>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**.To be able to use the command named set -reset jail-authority** you need to have the 'MANAGE SERVER' authority.`)
if (!args[0]) return message.reply(`To use the system, you must type .jail-authority set / reset @role \ For detailed information: help mute-channel.`)
   
  
  if (args[0] == 'set') {
  
  let kanal = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args[1].join('-'))
  if (!kanal) return message.channel.send(x2 + ` Tag a channel.`)
  
  db.set(`jailkanal_${message.guild.id}`, kanal.id)
  message.channel.send(x + ` The channel where the jail log will be kept is set as $ {channel}.`)
  } 
  

  if (args[0] == 'reset') {
    db.delete(`jailkanal_${message.guild.id}`)
    message.channel.send(x + ` The channel where the jail log is kept has been successfully reset.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailkanal'],
 permLevel: 0,
 kategori: "moderasyon"
};

exports.help = {
 name: 'jail-Channel',
 description: 'set which channel to send messages when someone is jailed.',
 usage: 'jail-set / reset channel #channel',
 //kategori: 'moderasyon',
 //permLvl: '**SUNUCUYU YÖNET**'
};/*
// jail-rol.js
const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <:basarili:690022418735169592>', '**SÜPER!** <:basarili:690022418735169592>', '**NASIL YAPTIN BUNU?!** <:basarili:690022418735169592>', '**MÜKEMMEL!** <:basarili:690022418735169592>', '**SEVDİM BUNU!** <:basarili:690022418735169592>', '**ŞİMDİ OLDU!** <:basarili:690022418735169592>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <:basarisiz:690022419116851268>', '**OLMADI BU!** <:basarisiz:690022419116851268>', '**HAY AKSİ!** <:basarisiz:690022419116851268>', '**HADİ ORADAN!** <:basarisiz:690022419116851268>', '**OLMADI YA!** <:basarisiz:690022419116851268>', '**BÖYLE OLMAZ?!** <:basarisiz:690022419116851268>', '**HADİ YA!** <:basarisiz:690022419116851268>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-rol ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, .jail-rol ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: .yardım sustur-kanal`)
   
  
  if (args[0] == 'ayarla') {
  
  let rol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!rol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailrol_${message.guild.id}`, rol.id)
  message.channel.send(x + ` Jail rolü ${rol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailrol_${message.guild.id}`)
    message.channel.send(x + ` Jail rolü başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailrol'],
 permLevel: 0
};

exports.help = {
 name: 'jail-rol',
 description: 'Birisi jaile atılınca hangi role sahip olacağını ayarlarsınız.',
 usage: 'jail-rol ayarla/sıfırla @rol',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};
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
  if (!yetkilirol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailyetkilisi_${message.guild.id}`, yetkilirol.id)
  message.channel.send(x + ` Jail yetkilisi ${yetkilirol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailyetkilisi_${message.guild.id}`)
    message.channel.send(x + ` Jail yetkilisi başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'jail-officer',
 description: 'set which roles people can jail..',
}*/