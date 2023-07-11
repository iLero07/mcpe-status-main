const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")
const ayarlar = require("../config.json");
const { config } = require("process");
const prefix = ayarlar.prefix
client.on("ready", () => {
console.log(`${client.user.tag} Aktif!`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Komut Mevcut!`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name} Komutu Yüklendi!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
