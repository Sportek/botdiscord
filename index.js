const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client({ disableEveryone: true });

client.on("ready", () => { console.log(`Connecté en tant que ${client.user.username}!`); });

client.on("message", msg => {
  if (msg.content.toLowerCase() === "ping") {
    msg.channel.send(`Pong ! ${msg.author}`);
  }
});
client.login(TOKEN);
