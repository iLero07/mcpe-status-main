const { MessageEmbed } = require("discord.js")
const config = require("../config.json")
const request = require('request');
exports.run = async (client, message, args) => {

 
request(`https://api.mcsrvstat.us/bedrock/2/${config.ip}`, function (error, response, body) {
  const json_body = JSON.parse(body);
  const onlinePlayers = json_body.players.online;
       const embed = new MessageEmbed()
       .setTitle("Mcpe Status")
       .setDescription(`${config.name} Sunucusunda ${onlinePlayers} Aktif!`)
       .setColor("RED")
  message.channel.send({embeds: [embed]})

})
}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "sunucu"
}
