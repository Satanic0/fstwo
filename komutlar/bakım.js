const Discord = require('discord.js')
const db = require('quick.db')


exports.run = (client, message, args) => {
  
  if(message.author.id != "342351135513772034") return
  
  if(!args[0]) return message.channel.send('To open maintenance mode! Open maintenance')
  
  if(args[0] === 'aç') {
    if(db.fetch(`bakim`)) return message.channel.send('Maintenance mode is already turned on')
    message.channel.send('Maintenance mode is turned on.')
    db.set(`bakim`, 'open')
  }
  if(args[0] === 'kapat'){
    if(!db.fetch(`bakim`)) return message.channel.send('Maintenance mode is already turned off.')
    message.channel.send('Maintenance mode is turned off.')
    db.delete(`maintenance`)
  }
  
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['maintenance'],
  permLevel: 0
}

exports.help = {
  name: 'maintenance'
}