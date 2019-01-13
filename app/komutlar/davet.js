 const Discord = require("discord.js");

module.exports.run = async (bot, message, args, guild) => {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Beni Eklemek İçin ; ', '[Tıkla](https://discordapp.com/oauth2/authorize?client_id=531252974215888906&scope=bot&permissions=805314621)')
    message.channel.send('Gönderiyorum Hemen Bekle ' + message.author).then(message => {message.delete(2000).then(message => {message.channel.send(embed)})})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'davet',
  usage: 'davet'
}; 