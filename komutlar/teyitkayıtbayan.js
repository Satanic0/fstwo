const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  // 𝑆𝑎𝑡𝑎𝑛𝑖𝑐#0330
  if (!message.member.hasPermission(`ADMINISTRATOR`)) return;
  // Sadece role sahip olanlar kullansın istiyorsanız 4. satır yerine:
  let teyitrol = db.get(`teyitRol_${message.guild.id}`);
  if (!message.member.roles.has(`${teyitrol}`)) return;

  let teyitbayan = db.get(`teyitBayan_${message.guild.id}`);
  let teyitKrol = db.get(`teyitkrol_${message.guild.id}`);
  let teyitlog = db.get(`teyitLog_${message.guild.id}`);

  if (!args[0]) return message.channel.send(`You have to tag a person.`);

  let role = message.guild.roles.get(`${teyitbayan}`); // Erkek rol id
  let unregistered = message.guild.roles.get(`${teyitKrol}`); // Kayıtsız rol id
  let channel = message.guild.channels.get(`${teyitlog}`) || message.channel; // Log kanal id girin, boş bırakırsanız komutun kullanıldığı kanala logu yollar.

  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı)
    return message.channel.send(
      `${args[0]}, I can't find the user on the server.`
    );
  if (kullanıcı.bot) return;

  let isim = args[1];
  if (!isim)
    return message.channel.send(`${args[0]}, You must enter a name for.`);
  if (isim.length > 16) return message.channel.send(`Write a shorter name.`);

  let yaş = args[2];
  if (!yaş) return message.channel.send(`${args[0]}, Enter an age for.`);
  if (yaş.length > 2)
    return message.channel.send(`The man is not 100 years old?`);

  const emb = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setColor(`#fffff0`)
    .setFooter(`#${message.channel.name} Used in the channel.`);

  message.guild.members.get(kullanıcı.id).setNickname(`◊ ${isim} | ${yaş}`);
  message.guild.members.get(kullanıcı.id).addRole(role.id);
  message.guild.members.get(kullanıcı.id).removeRole(unregistered.id);
  message.guild.members
    .get(kullanıcı.id)
    .send(
      emb.setDescription(
        `**${message.guild.name}** sunucusunda ${message.author} tarafından ${isim} | ${yaş} olarak kayıt edildin.`
      )
    );

  channel.send(
    emb
      .setDescription(`${kullanıcı}, Used in the channel.`)
      .addField(`Kayıt eden:`, message.author, true)
      .addField(`İsmi:`, args[1], true)
      .addField(`Yaşı:`, args[2], true)
      .addField(`Verilen rol:`, role.name, true)
      .addField(`Alınan rol:`, unregistered.name, true)
  );

  message.channel
    .send(`User Successfully Registered.`)
    // Çok isterseniz botun yolladığı mesaja tepki ekleyebilirsiniz.
    .then(m => m.react("a:onaytusu:670302634795728928"));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["b"],
  kategori: "moderasyon",
  permLevel: 0
};

exports.help = {
  name: "b",
  description: 'Registers Male Members.',
  usage: "b"
};
