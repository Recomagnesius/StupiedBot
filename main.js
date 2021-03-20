const Discord = require("discord.js");
const bot = new Discord.Client();
let config = require("./botconfig.json");
let token = config.token;
let prefix = config.prefix;
let guilds = {};
//Запуск бота
bot.on("ready", (message) => {
  console.log(`Запустился бот ${bot.user.username}`);
});

//команды
let insults = [
  "Иди нахуй",
  "В рот твою мамку ебал",
  "ебать ты лох",
  "такое чмо еще поискать надо",
  "Да ты пидор а не человек",
  "продолжай",
  "ну а хули",
  "пиздуй отсюдаво",
  "я тебя на ноль помножу",
  "пиздишь как дышишь",
];
bot.on("message", (msg) => {
  let check = msg.content;
  check = String(check).split(" ");
  if (check[0] === prefix + "random") {
    msg.reply(insults[Math.floor(Math.random() * insults.length)]);
  }
});
//логин бота
bot.login(token);
