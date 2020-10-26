const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if(message.author.id !== "761994125054312449") return message.channel.send('Only owner can use this command:x:')
    if (!emojiname) return message.channel.send("Emoji ismi belirtmediniz")
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
   // .addField("Emojinin ismi", `${emojiname}`)
   // .addField("Emoji ID", `${emoji.id}`)
   // .addField("İsteyen", message.author.username)
   // .addField("Link", `${emoji.url}`)
    .addField("Botamı Ekliceksin Al Bakalım", '```fix\n'+ `<a:${emojiname}:${emoji.id}>`+'```\n')
    .setTimestamp()
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojiid'],
    permLevel: 0
}

exports.help = {
    name: 'eb',
    description: 'It shows the information of the emoji whose name you have written.',
    usage: 'emoji info',
  kategori: 'user'
}