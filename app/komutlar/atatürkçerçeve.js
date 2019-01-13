const Discord = require('discord.js')

exports.run = (client, message) => {
    const embed = new Discord.RichEmbed()
    .setImage(`https://api.eggsybot.xyz/api/cerceve?cerceve=ataturk&url=${message.author.avatarURL}`)
    .setColor(0xff7f00)
    return message.channel.send(embed)
 };
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
 
  exports.help = {
    name: 'atatürkçerçeve',
    description: 'nitro',
    usage: 'atatürkçerçeve'
  };