module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(client.PREFIX) !== 0) return;
  const args = message.content.slice(client.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return message.reply("Cette commande n'existe pas !");
  const cmd = client.commands.get(command);

  try {
    return cmd(client, message, args);
  } catch (error) {
    return console.error(error);
  }
};
