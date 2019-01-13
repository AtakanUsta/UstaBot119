const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "Daha fazla komutlar eklendi! -yardım",
        "Yapımcım: EXP.Ata'Qan Usta#0666",
        "💪 7/24 Aktif!",  
        "💡 -davet | Botumuzu ekleyin",
        "💪 -yardım yazarak komutları öğren!",
        "📚 %100 Türkçe Bot!",
        "Botumuza destek çık ltfn: -davet yazıp ekle!"
   ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/atakanusta");
        }, 2 * 2500);
}
