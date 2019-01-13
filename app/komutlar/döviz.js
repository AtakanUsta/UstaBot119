const Discord = require('discord.js');
const tcmb = require('tcmb-exchange-rates');

exports.run = function(client, message) {


 
    
  
  
 tcmb('USD') // bu doların verisi(datası)
    .then(function(data) {
        
    tcmb('EUR')
    .then(function(datae) {
      
       tcmb('JPY')
        .then(function(datay) {
         
        tcmb('CAD')
         .then(function(datau) {
          
          tcmb('CHF')
          .then(function(datac) {
          
         
  
   
    let dövizembed = new Discord.RichEmbed()
    .setAuthor("💰 Döviz 💰")
    .setColor('RANDOM')
    .addField("💵 | Dolar", `**Alış : **${data.ForexBuying}\n**Satış : **${data.ForexSelling}`) 
    .addField("💶 | Euro", `**Alış : **${datae.ForexBuying}\n**Satış : **${datae.ForexSelling}`)
    .addField("💴 | Japon Yen'i", `**Alış : **${datay.ForexBuying}\n**Satış : **${datay.ForexSelling}`)
    .addField("🍁 | Kanada doları", `**Alış : **${datay.ForexBuying}\n**Satış : **${datay.ForexSelling}`)
    .addField("🇨🇭 | İsviçre Frangı", `**Alış : **${datay.ForexBuying}\n**Satış : **${datay.ForexSelling}`)
    
    message.channel.send(dövizembed)
    
    
    })})})})})
  
    .catch(function(error) {
        console.log(error);
    });
 

  
  

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'döviz', 
  description: 'Günlük Kur',
  usage: 'döviz'
};