const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args) {
  
  const moment = require('moment');
const ms = require('ms')
var time = moment().format('Do MMMM YYYY , hh:mm');
var teyiterkek;
var teyitKrol;
var teyitbayan;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
//done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;
 
  
  
      message.channel.send(`:eight_pointed_black_star:| **Write the Idea of ​​the Male Role.**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        //let muterol = message.guild.channels.find('name' , collected.first().content);
       // if(!muterol) return message.channel.send(':heavy_multiplication_x:| **Böyle bir kanal bulamadım**');
        teyiterkek = collected.first().content;
        db.set(`teyitErkek_${message.guild.id}`, teyiterkek);
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Write the Idea of ​​the Female Role.**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            //if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send(':heavy_multiplication_x:| **Böyle bir süre bilmiyorum :(**');
            teyitbayan = collected.first().content
            db.set(`teyitBayan_${message.guild.id}`, teyitbayan);
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Deny Your Indifferent Role**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                teyitKrol = collected.first().content;
                db.set(`teyitkrol_${message.guild.id}`, teyitKrol);
                collected.first().delete();
                msg.edit(':eight_pointed_black_star:| **Write Log Channel ID.**').then(msg => {
                  message.channel.awaitMessages(filter, {
                    max:1,
                    time: 20000,
                    errors: ['time']
                  }).then(collected => {
                    let teyitlog = collected.first().content;
                    db.set(`teyitLog_${message.guild.id}`, teyitlog);
                    collected.first().delete();
                    msg.edit(':eight_pointed_black_star:| **Write The ID Of The Role That Can Use The Command.**').then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                    }).then(collected => {
                      let teyitrol = collected.first().content;
                      db.set(`teyitRol_${message.guild.id}`, teyitrol);
                      collected.first().delete();
                msg.delete();
                message.delete();
                        message.channel.send("Confirmation Registration System is active! E -! B <@ user> You can register users by typing Name Age !!");
  
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
      
}
        

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'moderasyon',
  permLevel: 0
};

exports.help = {
  name: 'set confirmation',
  description: 'Sets the Confirmation Record System.',
  usage: 'teyitkayıtayar'
};