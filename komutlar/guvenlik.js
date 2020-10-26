const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`You must have "\`administrator\""authority to use this command.`); 

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guvenlik${message.guild.id}`)
  if(!args[0]) {
const mbed = new Discord.RichEmbed()     
.setAuthor("Ultra Security", client.user.avatarURL)
.setTitle("Security")
.setDescription("All You Need To Do! Security**#logchannel**Write!")
.addField(`What Does It Do,This Will Help Identify Members Who Will Advertise On Your Server Or Harmful.
These Members Are Usually Harmful Members.
Automatically Activates After Opening. You don't need to write anything else
To turn off! Security reset
`)
.setColor("BLUE")
.setTimestamp()
.setFooter("© Balenciaga")
message.channel.send(mbed)
    }
  if (args[0] === "reset" || args[0] === "close") {
    if(!logkanal) return message.channel.send(` Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`b!güvenlik #kanal\``);
    
   db.delete(`guvenlik${message.guild.id}`)
   message.channel.send(`Security has been successfully closed.`);
  
    return
  }
  
  
 

   db.set(`guvenlik${message.guild.id}`, logk.id)

message.channel.send(`Güvenlik başarıyla ${logk} olarak ayarlandı`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlikseviyesi','güvenlik','guvenlik'],
  kategori: "moderasyon",
  permLevel: 0

};

module.exports.help = {
  name: 'security',
  description: 'It helps to identify harmful members who can advertise on your server.',
  usage: 'güvenlik'
};