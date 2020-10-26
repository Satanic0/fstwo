const Discord = require('discord.js')
const db = require('quick.db');
 
exports.run = async (client, message, args) => {
 
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
  const bilgi = new Discord.RichEmbed()
  .setDescription('You must have the ** Manage Messages ** authority to use this command.')
  .setColor("0000A0")
return message.channel.sendEmbed(bilgi).then(m => m.delete(150000)); return
       }
  let mlog = message.mentions.channels.first()
  let sıfırla = db.fetch(`mlog_${message.guild.id}`)
if(args[0] === "sıfırla") {
    if(!sıfırla) {
      message.channel.send(`Mode Log Channel is not already set.`)
                     
      return
    }
    db.delete(`mlog_${message.guild.id}`)
    message.channel.send(`Mod Daily Channel has been reset successfully.)
                    
      return
    }
    db.delete(mlog_ ${message.guild.id}`)
    message.channel.send(`Mod Log Channel has been reset successfully.`)
               
    return
  }
  if (!mlog) {
    return message.channel.send(
    `You must tag the Channel to be Mod Log.`)                      
  }
  db.set(`mlog_${message.guild.id}`, mlog.id)
  message.channel.send(`✅|Mod Log Kanalı başarıyla ayarlandı.$ {Mlog} olarak ayarlandı.`)
  };
   
   
   
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['modlog'],
    kategori: 'moderasyon',
    permLevel: 0
}
 
exports.help = {
    name: 'mod-log-set',
    description: 'Close Log Settings.',
    usage: 'mod-log #kanal'
}