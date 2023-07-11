const { Client, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const config = require("./config.json");

const Discord = require("discord.js")
const client = new Client({
intents: 32767
});
module.exports = client;

require("./events/message.js")
require("./events/ready.js")
const request = require('request');
  function api() {
    request(`https://api.mcsrvstat.us/bedrock/2/${config.ip}`, function (error, response, body) {
        const json_body = JSON.parse(body);
        const onlinePlayers = json_body.players.online;

        client.user.setActivity(`${onlinePlayers} Kişi ${config.name} Sunucusunda!`, {
          type: "PLAYING",
        });
    });

}

setInterval(api, 1000);


client.login(config.token); 
