// client.on("ready", () => { console.log(`Connecté en tant que ${client.user.username}!`); });

module.exports = client => {
  console.log(`Connecté en tant que ${client.user.username}`);
};
