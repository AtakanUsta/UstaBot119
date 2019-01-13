const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        //kod başlangıç
      let mesaj = args.join(" ").slice(0);
  
    message.delete()


      let embed = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username} Diyorki;`, message.author.AvatarURL)
      .setDescription(mesaj)
      .setColor("RANDOM")
      
  message.channel.send(embed)
}
      
        //kod bitiş

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'say',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'say [yazdırmak istediğiniz şey]'
};
