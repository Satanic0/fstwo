const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const {RichEmbed} = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const { Client, Util } = require('discord.js');
const db = require('quick.db');
const Jimp = require('jimp')
const snekfetch = require('snekfetch');
 
 
exports.run = (client, message, args) => {
   if(message.author.id !== "761994125054312449") return message.channel.send("Wow Jackal This Is My Owner's Command");
    try {
      var code = args.join(" ");
      var evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
 
exports.help = {
  name: 'eval',
  description: 'Used to test code.',
  usage: 'eval [code]'
};