const Discord = require('discord.js')
let prefix = '!'
exports.run = async (client, message, keremdesu) => {
let kategori = "moderasyon"
//if(!kategori) return message.channel.send('Lütfen bir kategori giriniz. \`{ moderasyon, kullanıcı, müzik }\`');
//if(kategori === 'moderasyon' | kategori === 'yetkili' | kategori === 'müzik'){
//let embed = new Discord.RichEmbed()
  // .setAuthor(`Balenciaga Komutlar`)//keremdesu#0404
   //.setTitle(`Örnek Kullanım: ${prefix}${client.commands.filter(c=>c.conf.kategori===kategori).random().help.name}`)//keremdesu#0404
  let embed = client.commands.filter(c=>c.conf.kategori=== kategori).map(kmt=>`> `+`**`+kmt.help.name+`**`+` | `+kmt.help.description).join('\n')
//  .setDescription(client.commands.filter(c=>c.conf.kategori===kategori).map(kmt=>kmt.help.description).join(', '))
  message.channel.send(embed)
 // } else { message.channel.send('Kategori \`moderasyon, yetkili veya müzik\` olmalı!') }};
}
  exports.conf = {
      enabled:true,
      guildOnly: true,
      aliases:['help'],
      permLevel:0
  }
  
  exports.help = {
      name:`help`,
    description:`help`,
    usage:`yardım`
  }