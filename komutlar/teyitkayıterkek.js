const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
if(!message.member.hasPermission(`ADMINISTRATOR`)) return;
// Sadece role sahip olanlar kullansın istiyorsanız 4. satır yerine:
let teyitrol = db.get(`teyitRol_${message.guild.id}`);
  if(!message.member.roles.has(`${teyitrol}`)) return;
  
  let teyiterkek = db.get(`teyitErkek_${message.guild.id}`);
  let teyitKrol = db.get(`teyitkrol_${message.guild.id}`);
  let teyitlog = db.get(`teyitLog_${message.guild.id}`);
  
  
if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let role = message.guild.roles.get(`${teyiterkek}`)// Erkek rol id
let unregistered = message.guild.roles.get(`${teyitKrol}`)// Kayıtsız rol id
let channel = message.guild.channels.get(`${teyitlog}`) || message.channel// Log kanal id girin, boş bırakırsanız komutun kullanıldığı kanala logu yollar.

let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
let isim = args[1];
if(!isim) return message.channel.send(`${args[0]}, için bir isim girmelisin.`)
if(isim.length > 16) return message.channel.send(`Daha kısa bir isim yaz.`)

let yaş = args[2];
if(!yaş) return message.channel.send(`${args[0]}, için bir yaş gir.`)
if(yaş.length > 2) return message.channel.send(`Adam 100 yaşında değil ya?`)
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`#${message.channel.name} kanalında kullanıldı.`)

message.guild.members.get(kullanıcı.id).setNickname(`◊ ${isim} | ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(role.id)
message.guild.members.get(kullanıcı.id).removeRole(unregistered.id)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`**${message.guild.name}** sunucusunda ${message.author} tarafından ${isim} | ${yaş} olarak kayıt edildin.`))

channel.send(
emb.setDescription(`${kullanıcı}, kullanıcısı kayıt edildi.`)
.addField(`Kayıt eden:`, message.author, true)
.addField(`İsmi:`, args[1], true)
.addField(`Yaşı:`, args[2], true)
.addField(`Verilen rol:`, role.name, true)
.addField(`Alınan rol:`, unregistered.name, true))
  
message.channel.send(`Kullanıcı Başarıyla Kayıt Edildi.`)
// Çok isterseniz botun yolladığı mesaja tepki ekleyebilirsiniz.
 .then(m => m.react('a:onaytusu:735577432538742886'))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  kategori: 'moderasyon',
  permLevel: 0
};

exports.help = {
  name: 'e',
  description: 'Registers Male Members.',
  usage: 'e'
};