const bot = new Discord.Client();

var oyun = [
`Developer : W4ldo#6088`,
`?!yardım - Abone Sistemi🖤`,
`?!yardım - Botlist Sistemi`,
`?!yardım - Patlatma Koruma Sistemi🖤`,
`?!yardım - Müzik Sistemi🖤`,
`?!yardım - Gif Sistemi🖤`,
`?!yardım - Logo Sistemi🖤`
]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "PLAYING"});

        }, 2 * 2000); //2 saniye olarak ayarlı ama siz istediğiniz gibi ayarlayabilirsiniz. 000 <-- Bu 3 sıfıra hiç bir şekilde dokunmayın. Sadece 2000 den 2 yi silip istediğiniz sayıyı yazın
});