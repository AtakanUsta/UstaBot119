const Discord = require('discord.js')

exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
    .setImage(`https://api.eggsybot.xyz/api/cerceve?cerceve=brilliance2&url=${message.author.avatarURL}`)
    .setColor("#36393F")
    return message.channel.send(embed)
 };
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
 
  exports.help = {
    name: 'brilliance',
    description: 'brilliance2',
    usage: 'brilliance'
  };