const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });
const fs = require("fs");

client.PREFIX = PREFIX;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const evt = require(`./events/${file}`);
    const evtName = file.split(".")[0];
    console.log(`Loaded event '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
  });
});

client.commands = new Collection();

fs.readdir("./commands/", async (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const props = require(`./commands/${file}`);
    const cmdName = file.split(".")[0];
    console.log(`Loaded command '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
});

client.login(TOKEN);
