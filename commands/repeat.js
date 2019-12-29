module.exports = (client, message) => {
  const args = message.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  message.channel.send(args.join(" "));
  message.delete({ timeout: 3000 }).then(console.log("Un message a été supprimé."));
};
