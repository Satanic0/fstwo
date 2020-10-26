const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const permError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 01 •')
        .setDescription('```To Use This Command You Must Have the "Ban Members" Authority```')
    
  const userError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 02 •')
        .setDescription('```To remove the ban, you must enter a user ID .unban ID```')
  
  const userError2 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 03 •')
        .setDescription("```No Letters Can Be Used in ID```")
  
  const userError3 = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 04 •')
        .setDescription('```This User Is Not Banned```')
    
  const levelError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 05 •')
        .setDescription('```You will not unblock a member who has the same or higher role as you```')


  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
        (permError).then
          (message.delete()).then
            (msg => msg.delete(5000));
  
  let user = args[0];
    if  (!user) return message.channel.send
          (userError).catch(console.error).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
  if  (isNaN(args[0])) return message.channel.send
        (userError2).catch(console.error).then
          (message.delete()).then
            (msg => msg.delete(5000));

  if  (user.highestRole >= message.author.highestRole) return message.channel.send
          (levelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
  
  const banList = await message.guild.fetchBans();
  
 // console.log(banList.map(s => s.users.id))
  
  if (!user.id === banList) return message.channel.send
      (userError3).then
        (message.delete()).then
          (msg => msg.delete(5000));
  
  message.guild.unban(user);
message.channel.send(`<@!${user}> User Ban Successfully Removed.`)
  
  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "moderasyon"

  };

  exports.help = {
    name: 'unban',
    description: 'It removes the ban of the person you want.',
    usage: 'unban [kullanıcı] [sebep]'
  };