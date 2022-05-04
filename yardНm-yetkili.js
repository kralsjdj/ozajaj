const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setTitle(`${client.user.username} - Komutlarım`)
.setURL('https://discord.gg/Sw5pd6YwyM')
.setDescription(`**\`Yetkili\`**
» \`${prefix}unban <user>\`: **Banı Kaldırır**
» \`${prefix}ban <user>\`: **Banlar**
» \`${prefix}prefix\`: **Botun Prefixini Ayarlar**
» \`${prefix}kurallar\`: **Hazır Kurallar Metni Atar**
`)
.setThumbnail("https://i.hizliresim.com/6xUANY.png")
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yetkili",
  description: 'yardım kodu.',
  usage: 'yardım'
};