/*const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000)
*/




const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");
const db = require("quick.db");
const ms = require("ms");
client.top_secret = {
    "token": process.env.TOKEN,
    "pref": "+",
    "sahip": "670302634795728928",
    "oynuyor": "+help Ultra Security For Servers.",
    "durum": "online"
}

client.on("message", message => {
    let client = message.client;
    if (message.author.bot) return;
    if (!message.content.startsWith(client.top_secret.pref)) return;
    let command = message.content.split(" ")[0].slice(client.top_secret.pref.length);
    let params = message.content.split(" ").slice(1);
    //let perms = client.yetkiler(message);
    let cmd;
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
    /*
   if(cmd) {
  const data = require('quick.db')
  const dsd =  data.fetch(`bakimmodu_${client.user.id}`)
  if (dsd) {
  if (message.author.id !== '424587795248709643') {
  message.channel.send(`.${command} isimli komut şu anda bakımdadır.`)
  return }  }
    }*/
  if (cmd) {
    
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "342351135513772034") {return message.channel.send('Maintenance Mode is Currently On.')}
}
  
    
    
      
     /*
let kanal = '609638550471835658' //Mesajın atılacağı kanal ID girin.
 const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription(`**${cmd.help.name}** adlı komutum kullanıldı, işte bilgileri;`)
  .addField(`**Kullanan Kişi:**`, message.author.tag)
  .addField(`**Kullanan Kişinin ID'si:**`, message.author.id)
  .addField(`**Kullanılan Komut:**`, cmd.help.name)
  .addField(`**Kullanıldığı Sunucu:**`, message.guild.name)
  .setThumbnail(message.guild.iconURL)
 client.channels.get(kanal).sendEmbed(embed)
 */
 
      
    //  if (perms < cmd.top_secret.permLevel) return;
      cmd.run(client, message, params);
    }
  });

  const log = message => {
    console.log(`[client] ${message}`);
  };
  
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdir("./komutlar/", (err, files) => {
    if (err) console.error(err);
    log(`${files.length} adet komut yüklenmeye hazır. Başlatılıyor...`);
    files.forEach(f => {
      let props = require(`./komutlar/${f}`);
      log(`Komut yükleniyor: ${props.help.name}'.`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });
  
  client.reload = command => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`./komutlar/${command}`)];
        let cmd = require(`./komutlar/${command}`);
        client.commands.delete(command);
        client.aliases.forEach((cmd, alias) => {
          if (cmd === command) client.aliases.delete(alias);
        });
        client.commands.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
  client.load = command => {
    return new Promise((resolve, reject) => {
      try {
        let cmd = require(`./komutlar/${command}`);
        client.commands.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
  
  client.unload = command => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`./komutlar/${command}`)];
        let cmd = require(`./komutlar/${command}`);
        client.commands.delete(command);
        client.aliases.forEach((cmd, alias) => {
          if (cmd === command) client.aliases.delete(alias);
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };

client.on("ready", () => {
client.user.setStatus(client.top_secret.durum);
console.log(`${client.user.username} ismi ile giriş yapıldı.`);
client.user.setActivity(client.top_secret.oynuyor);
});

client.on("message", msg => {
    if(msg.content === "ping") {
        msg.channel.send("Pong! **" + client.ping + "** ms");
    }
  if(msg.content === "tag") return msg.channel.send("ꍭ");
  //if(msg.content === "link") return msg.channel.send("https://discord.gg/2cSRrRd");
});
/*
const dctrat = require('dctr-antispam.js'); 
 


client.on('ready', () => {
   dctrat(client, {
        uyarılimiti: 4, // Uyarı limiti.
        susturmalimiti: 6, // Susturma limiti.
        aralık: 1500, // Mesaj yazma aralığı. ms olarak ayarlayınız
        uyarımesajı: "Spam yapmayı keser misin? Yoksa susturulacaksın!!", // Uyarı mesajı
        susturmamesajı: "Çok faaazla mesaj!! Susturuldun.", // Susturulma mesajı
        maksspam_uyarı: 3,// Kullanıcılar aynı iletiyi spam gönderirken, X üyesi 8'den fazla ileti gönderdiğinde kullanıcılar uyarı alır.
        maksspam_susturma: 4, // Kullanıcılar aynı iletiyi spam gönderirken, X üyesi 10'den fazla ileti gönderdiğinde kullanıcılar susturulur.
        adminrol: ["KURUCU"], // Bu rollere sahip kullanıcılar engellenmez
        adminkullanıcı: ["ꍭ Λrtêx#5727"], // Bu kullanıcılar engellenmez
        susturmarolü: "Spam-Mute", // Kullanıcı spam yaparsa otomatik olarak susturulur eğer rol açılmaza otomatik olarak açılır.
        susturmasüresi: 900000, // Susturma süresi bir kullanıcı spam yaptığı için susturulursa verilecek ceza süresi (15dk) ms olarak ayarlayınız.
l        logkanalı: "antispam-log" // Susturulmaların ve kaldırılmalarının atılacağı log kanalı (açılmazsa otomatik bu isimde açılır.)
      });
  });
 
client.on('message', msg => {
  client.emit('checkMessage', msg); 
})
*/

client.on("guildBanAdd", async (guild, user) => {
  if (!db.has(`banlimit_${guild.id}`)) return;
  let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
  if (logs.entries.first().executor.bot) return;
  const kisi = logs.entries.first().executor
  const member = guild.members.get(kisi.id)
  if (member.hasPermission('ADMINISTRATOR')) return;
  let banlimit = db.fetch(`banlimit_${guild.id}`)
  if (isNaN(banlimit)) return;
  banlimit = banlimit + 1
  if (!db.has(`bansayi_${member.id}_${guild.id}`)) {
    if (banlimit == 1) {
      var array = member.roles.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.removeRole(role.id)
    }else{
      db.set(`bansayi_${member.id}_${guild.id}`, 1)
    }
  }else{
    const bansayisi = db.fetch(`bansayi_${member.id}_${guild.id}`)
    if (bansayisi >= banlimit) {
      db.delete(`bansayi_${member.id}_${guild.id}`)
      var array = member.roles.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.removeRole(role.id)
    }
  }
})


client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://i.hizliresim.com/gPMMrQ.png')
    const resim2 = await Canvas.loadImage('https://i.hizliresim.com/9YZZaO.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    
    var kontrol;
      if (kurulus > 1296000000) kontrol = resim1
    if (kurulus < 1296000000) kontrol = resim2

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
chan.send(new Discord.Attachment(canvas.toBuffer(), "onlysecure.png"))
});


client.on('guildMemberAdd', async(member) => {
 let mute = member.guild.roles.find(r => r.name === "Muted");
let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
let süre = db.fetch(`süre_${member.id + member.guild.id}`)
if (!mutelimi) return;
if (mutelimi == "muteli") {
member.addRole(mute.id)
 
member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
 setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
db.delete(`muteli_${member.guild.id + member.id}`)
    member.send(`<@${member.id}> Muten açıldı.`)
    member.removeRole(mute.id);
  }, ms(süre));
}
})


client.on("roleDelete", async (role) => {
  let guild = role.guild;
  if(!guild.me.hasPermission("MANAGE_ROLES")) return;
  let koruma = db.fetch(`korumaacik_${role.guild.id}`)
  if(koruma == null) return; 
  let e = await guild.fetchAuditLogs({type: 'ROLE_DELETE'});
  let member = guild.members.get(e.entries.first().executor.id);
  if(!member) return;
  if(member.hasPermission("ADMINISTRATOR")) return;
  let mention = role.mentionable;
  let hoist = role.hoist;
  let color = role.hexColor;
  let name = role.name;
  let perms = role.permissions;
  let position = role.position
  role.guild.createRole({
    name: name,
    color: color,
    hoist: hoist,
    position: position,
    permissions: perms,
    mentionable: mention
  }).then(rol => {
    if(!db.has(`korumalog_${guild.id}`)) return;
    let logs = guild.channels.find(ch => ch.id === db.fetch(`korumalog_${guild.id}`));
    if(!logs) return db.delete(`korumalog_${guild.id}`); else {
      const embed = new Discord.RichEmbed()
      .setDescription(`Silinen Rol: <@&${rol.id}> (Yeniden oluşturuldu!)\nSilen Kişi: ${member.user}`)
      .setColor('RED')
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      logs.send(embed);
    }
})
  
  
  
})
client.on("channelDelete", async channel => {
  if(!channel.guild.me.hasPermission("MANAGE_CHANNELS")) return;
  let guild = channel.guild;
  const logs = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' })
  let member = guild.members.get(logs.entries.first().executor.id);
  if(!member) return;
  if(member.hasPermission("ADMINISTRATOR")) return;
  channel.clone(channel.name, true, true, "Kanal silme koruması sistemi").then(async klon => {
    if(!db.has(`korumalog_${guild.id}`)) return;
    let logs = guild.channels.find(ch => ch.id === db.fetch(`korumalog_${guild.id}`));
    if(!logs) return db.delete(`korumalog_${guild.id}`); else {
      const embed = new Discord.RichEmbed()
      .setDescription(`Silinen Kanal: <#${klon.id}> (Yeniden oluşturuldu!)\nSilen Kişi: ${member.user}`)
      .setColor('RED')
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      logs.send(embed);
    }
    await klon.setParent(channel.parent);
    await klon.setPosition(channel.position);
  })
})


client.on("message", message => {
  let re = db.fetch(`onlycode.reklamEngl_${message.guild.id}`)//.then(re => {
    if (re == "acik") {
      const reklam = ["discord.app", "discord.gg", "invite", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".az", "discord", "www"];
      if (reklam.some(word => message.content.toLowerCase().includes(word))) {
        try {
          if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            return message.reply(new Discord.RichEmbed()
                           .setColor('RED')
                           .setDescription("You must not advertise!")).then(msg => msg.delete(5000));
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else if (re == "kapali") {
    }
    if (!re) return;
  });
//});


client.on("message", async msg => {
  
  
  let a = await db.fetch(`kufur_${msg.guild.id}`)
    if (a == 'acik') {
      const küfür = ["mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
        if (küfür.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("MANAGE_GUILD")) {
                  msg.delete();
                          
                    return msg.channel.send(`<:carpi:666286773965422603> | ${msg.author} Bu sunucuda **küfür** filtresi **aktif!**`).then(msg => msg.delete(10000));
            }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!a) return;
          });


client.on("message" , async msg => {
  if(msg.content.startsWith(client.top_secret.pref+"afk")) return;
 
  let afk = msg.mentions.users.first()
 
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){
 
       msg.reply(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){
 
       msg.reply(`Afk'lıktan Çıktınız`)
  db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
   msg.member.setNickname(isim)
   
 }
 
});


client.on('guildMemberAdd', async member => {
const data = require('quick.db')
const asd = data.fetch(`${member.guild.id}.jail.${member.id}`)
if(asd) {
let data2 = await data.fetch(`jailrol_${member.guild.id}`)
let rol = member.guild.roles.get(data2)
if(!rol) return;
let kişi = member.guild.members.get(member.id)
kişi.addRole(rol.id);
kişi.roles.forEach(r => {
kişi.removeRole(r.id)
data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    data.set(`${member.guild.id}.jail.${kişi.id}`, 'codare')
  const wasted = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`Bi Sen Akıllısın :)`)
  .setTimestamp()
    member.send(wasted)
} 
  
  
})



const botadi = "Arid"

client.on('messageDelete', message => {
let modlogs =  db.get(`modlogkanaly_${message.guild.id}`)
  const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return //message.channel.send("mod log kanalı yok");
  if(modlogs) {
    if (message.content.length > 1024) {
      modlogkanal.send({embed: {
    Color: "#080000",
    author: {
      name: `${message.author.tag} tarafından gönderilen bir mesaj silindi`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj 1024 karakterden fazla mesajı gösteremem`,
        value: `\`\`\`Bilinmiyor...\`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
    } else {
      /*modlogkanal.send({ embed: {
Color: "#080000",
    author: {
      name: `${message.author.tag} kullanıcısının mesajı silindi\n`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj:`,
        value: `\`\`\` ${message.content} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }*/
      
      let deletemsg = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`<@${message.author.id}> Kullanıcısının Mesajı Silindi.`, message.author.avatarURL)
      .addField(`Silinen Mesaj:`, `\`\`\` ${message.content} \`\`\``)
      .setFooter(`Arid | Mod-Log Sistemi.`, client.user.avatarURL)
      modlogkanal.sendEmbed(deletemsg);
      
};
    }
  })



client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("#080000")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
 let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("#080000")
    .setAuthor("Bir kişinin yasağı kaldırıldı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('channelCreate', async channel => {
 let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
      Color: "#080000",
      fields: [{
          name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
          value: `\`\`\` ${channel.name} \`\`\``
        },
        {
          name: `Oluşturulan Kanalin Türü`,
          value: `\`\`\` Metin Kanalı \`\`\``
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Oluşturulan Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('channelDelete', async channel => {
 let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
     Color: "#080000",
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
 Color: "#080000",
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('roleDelete', async role => {
 let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Rol Silindi. \nSilinen Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});

client.on('emojiDelete', async emoji => {
 let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Emoji Silindi. \nSilinen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  
  }
});


client.on('roleCreate', async role => {
let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
     modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Yeni Bir Rol Oluşturuldu. \nOluşturulan Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});


client.on('messageUpdate', async (oldMessage, newMessage) => {
 let modlogs = db.get(`modlogkanaly_${oldMessage.guild.id}`)
  const modlogkanal = oldMessage.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }
    modlogkanal.send({embed: {
      Color: "#080000",
      author: {
      name: `${oldMessage.author.tag} mesajını düzenledi:\n`,
      icon_url: oldMessage.author.DisplayAvatarURL
      },
      fields: [{
        name: `Eski mesaj:`,
        value: `\`\`\` ${oldMessage.content} \`\`\``
      },
      {
        name: `Yeni Mesaj:`,
        value: `\`\`\` ${newMessage.content} \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
      icon_url: oldMessage.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
      }
    }
    });
  }
});

////////
client.on("message", message => {
 if (message.content === "+link") {       
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`Website bot Learn more commands and informations https://5f8194d0af81f.site123.me 
Created by 𝑆𝑎𝑡𝑎𝑛𝑖𝑐#0330 for (No System is Safe) Team`)
 
message.channel.sendEmbed(embed)
 
}
});
//////////////

 
 
client.on("message", async message => {
 
    let prefix = "$";    //lera prefix bot da bne bo test bzana esh aka!!
 
const args = message.content.slice(prefix.length).trim().split(/\s+/g);
 
const command = args.shift().toLowerCase();
 
    if(!message.content.startsWith(prefix) || message.author.bot) return;
if(command == 'test28'){      // Bo teste bot prefix bnusa lagal aw naway ka la jey bawan daenusi
 
    client.emit('guildMemberAdd', message.member)
 return message.channel.send('mazbwta')
  }

client.login(client.top_secret.token);
