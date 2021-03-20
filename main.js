const Discord = require("discord.js");
const bot = new Discord.Client();
let config = require("./botconfig.json");
let token = config.token;
let prefix = config.prefix;
//создаём ссылку-приглашение для бота
bot.on("ready", () => {
  console.log(`Запустился бот ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then((link) => {
    console.log(link);
  });
});
//команда, и то, что она должна выполнить
bot.on("message", (msg) => {
  if (msg.content === prefix + "test") {
    msg.reply("Fack you!");
  }
});
bot.login(token);
