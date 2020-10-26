
const Discord = require('discord.js');
const adamlik = new Discord.ShardingManager('./artex.js', { // main dosyanızın ismi: server.js - main.js - bot.js olabilir
    totalShards: 2, // shard sayısı ya da auto yazılabilir // 2k veya 1k sunucularda ideali: 2'dir.
    token: process.env.TOKEN // token
});

adamlik.spawn(); // S2Ş ahanda burada başlıyor

adamlik.on('launch', shard => {
  console.log(`${shard.id} IDli shard başarıyla başlatıldı gardaşım benim.`)
});

setTimeout(() => {
    console.log("yeniden başlatılıyor..")
    adamlik.broadcastEval("process.exit()"); //restart atıyoruz ki botumuz kendini yenilesin s2ş power ultisi atsın 
}, 21600000);

adamlik.on(`launch`, shard => {
console.log(`[${new Date().toString().split(` `, 5).join(` `)}] Shard: #${shard.id}`) })
          
adamlik.on(`message`, (shard, msg) => {
console.log(`[${new Date().toString().split(` `, 5).join(` `)}] #${shard.id} | ${msg._eval} | ${msg._result}`) });

const adamlikk = new Discord.ShardingManager('./eheheh.js', { // main dosyanızın ismi: server.js - main.js - bot.js olabilir
    totalShards: 1, // shard sayısı ya da auto yazılabilir // 2k veya 1k sunucularda ideali: 2'dir.
    token: process.env.TOKEN // token
});

adamlikk.spawn(); // S2Ş ahanda burada başlıyor

adamlikk.on('launch', shard => {
  console.log(`${shard.id} IDli shard başarıyla başlatıldı gardaşım benim.`)
});

setTimeout(() => {
    console.log("yeniden başlatılıyor..")
    adamlik.broadcastEval("process.exit()"); //restart atıyoruz ki botumuz kendini yenilesin s2ş power ultisi atsın 
}, 21600000);