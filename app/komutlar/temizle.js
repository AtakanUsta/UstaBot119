const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

     //V1
  
  //!clear 15
      
      const deleteCount = parseInt(args[0], 10);  //mustafa
      
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: `Bunu Yapmaya Yetkin Yok!`");
  if(!args[0]) return message.channel.send(":warning: `Silinecek Mesaj Sayısınıda Yaz`");
     if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply(":warning: `Silinmek İstenen Mesaj Sayısı 2 ile 100 Arasında Olmalıdır! `");
    
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:white_check_mark: ${args[0]} Adet Mesaj Silindi! `).then(msg => msg.delete(5000));
  });
}


      //V2




//    const deleteCount = parseInt(args[0], 10);
//   
//
//    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
//      return message.reply(":warning: `Silinmek İstenen Mesaj Sayısı 2 ile 100 Arasında Olmalıdır! `");
//    
//    const fetched = await message.channel.fetchMessages({limit: deleteCount};
//    message.channel.bulkDelete(fetched)
//      .catch(error => message.reply(`Bunu Yapamazsın [Lütfen Bot Yapımcısına Bunu Gösterin (.botkurucu)] | Hata: ${error}`));





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
  name: "temizle"
}
