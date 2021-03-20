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
  "я пидарас!",
  "My dick is very very big",
  "О, пидорас пришел",
  "Ебана, чё это за Анал-карнавал?",
  "3D хуета, нормальные тянки только в аниме",
  "Ты какой-то Вяло дрочащий",
];
bot.on("message", (msg) => {
  if (msg.author.bot) return;
  // if (msg.chanel.type == "dm") return;
  let id = msg.guild.id;
  let user = msg.author.username;
  let userid = msg.author.userid;
  let msgArray = String(msg.content).split(" ");
  let command = msgArray[0];

  // !random
  if (command === prefix + "random") {
    msg.reply(insults[Math.floor(Math.random() * insults.length)]);
  }
});

//welcome
bot.on("guildMemberAdd", (member) => {
  if (member.user.username == bot.user.username) return;
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "general" || channel.name === "общее"
  );
  if (!channel) return;
  channel.send("ОБАНА, это хто тут подьехал?");
});

//goodbye
bot.on("guildMemberRemove", (member) => {
  if (member.user.username == bot.user.username) return;
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "general" || channel.name === "общее"
  );
  if (!channel) return;
  channel.send("F пацанчику");
});

//invite
bot.on("guildCreate", (guild) => {
  let activeGuild = bot.guilds.get(`${guild.id}`);
  if (!activeGuild.channel.type == text) return;
  activeGuild.channel.send("Ну у вас тут и помойка");
});
//логин бота
bot.login(token);
