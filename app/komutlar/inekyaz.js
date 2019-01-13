const Discord = require('discord.js');
const cowsay = require('cowsay');

exports.run = function(client, message, args) {
      if (!args[0]) {
        return message.channel.send(':no_entry: İnek mesajına çevirmek istediğiniz mesajı girmelisiniz;  ``-inekyaz naber``');
    }
    
  let text = args.join(" ");
  message.channel.send("```" + cowsay.say({
    text : text
  })+ "```")
  message.delete();
  
  


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'inekyaz', 
  description: 'İnek Yazısı.',
  usage: 'inekyaz <yazı>'
};