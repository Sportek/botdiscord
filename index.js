const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () =>{
  console.log(`Connecté en tant que ${client.user.username}!`);
})

client.on("message", msg =>{
  if(msg.content.toLowerCase()=== "ping"){
    msg.channel.send(`Pong ! ${msg.author}`);
  }
})
client.login("NjYwNjU5Mjk4NDEzNzA3Mjg3.XggGgA.tJ5NrXIBcs6JsNw5RLY32C8GLyw");