const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {


  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ffffff')
.setAuthor('Bu komutu kullanan kullanıcı ' + message.author.tag)
.setDescription(`**[Davet Et](https://discord.com/api/oauth2/authorize?client_id=801088331890950164&permissions=8&scope=bot) | [Sitemiz](https://www.rylan.ml/) | [Destek Sunucusu](https://discord.gg/FAchvKXF9r) | [Youtube](https://www.youtube.com/channel/UCkCb5aCRW_3mEzpcPP18iVw?sub_confirmation=1)**

<a:BeratBulbulkrmzyldz:786584071248805898>  **__Gecikme Sürem__** **${client.ws.ping}** <a:BeratBulbulkrmzyldz:786584071248805898> 

<a:BeratBulbulkrmzyldz:786584071248805898>  **__Kullanıcı Sayısı__** **${client.guilds.cache.reduce((a,b) => a + b.memberCount,0).toLocaleString()}** <a:BeratBulbulkrmzyldz:786584071248805898> 

<a:BeratBulbulkrmzyldz:786584135762051103> __**Komutlarım**__ <a:BeratBulbulkrmzyldz:786584135762051103>

**?!nsfw-yardım** ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼ ᲼᲼᲼᲼᲼᲼᲼
Nsfw Komutlarını Atar

**?!kayıt-yardım** ᲼᲼᲼᲼᲼᲼
Kayıt Komutlarını Atar

**?!logo-yardım** ᲼᲼᲼᲼᲼᲼
Logo Komutlarını Atar

**?!müzik-yardım** ᲼᲼᲼᲼᲼᲼
Müzik Komutlarını Atar

**?!ekonomi-yardım** ᲼᲼᲼᲼᲼᲼
Ekonomi Komutlarını Atar

**?!otocevap-ekle/sil/liste** ᲼᲼᲼᲼᲼᲼
Oto cevap

**?!rastgele-meme**
Meme(miim) Komudu

**?!yardım2** ᲼᲼᲼᲼᲼᲼
2.Yardım Menüsünü Atar

<a:BeratBulbulkrmzyldz:786584135762051103> __**Özel Kodlar**__ <a:BeratBulbulkrmzyldz:786584135762051103>

**?!karaliste** ᲼᲼᲼᲼᲼᲼
Sahibimin Komudu

**?!beyazliste** ᲼᲼᲼᲼᲼᲼
Sahibimin Komudu

<a:BeratBulbulkrmzyldz:786584096146587649> __**Developer Komutları**__ <a:BeratBulbulkrmzyldz:786584096146587649>

**?!kod-çevir** ᲼᲼᲼᲼᲼᲼
İstediğiniz Kod V12 Ye Çevirir

**?!embed** ᲼᲼᲼᲼᲼᲼
Embed Hakkında Bilgi

**?!embed-oluştur** ᲼᲼᲼᲼᲼᲼
Embedlı Yazar

<a:BeratBulbulkonfeti:786584125925752914> __**Gelenler Gidenler**__ <a:BeratBulbulkonfeti:786584125925752914>

**Anti Raid** ᲼᲼᲼᲼᲼᲼
Anti Raid'i Botumuzdan Kaldırdık **Neden** Çünkü Bottan Hem Çok CPU ve RAM Yiyordu Bizde Kaldırdık İlginiz İçin Teşekkürler 

**Ekonomi**
Botumuzdan Anti Raid'i Kaldırdık Bizde Yeni Ve Her Botta Olmayan Bir Komut Getirelim Dedik - ?!ekonomi-yardım
`)
.setThumbnail(client.user.avatarURL())
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
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};