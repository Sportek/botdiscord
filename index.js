const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client({ disableEveryone: true });

client.on("ready", () => { console.log(`Connecté en tant que ${client.user.username}!`); });

client.on("message", msg => {
  if (msg.content.toLowerCase() === "ping") {
    msg.channel.send(`Pong ! ${msg.author}`);
  }
});

// Séparation des arguments d'une commande
// if (msg.author.bot) return
// if (!msg.guild) return

client.on("message", msg => {
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(" "));
    msg.delete({ timeout: 3000 }).then(console.log("Un message a été supprimé."));
  }
});


client.login(TOKEN);
