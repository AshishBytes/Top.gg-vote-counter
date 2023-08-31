/////////////////////////////////

const DBL = require("dblapi.js");
const db = require("quick.db");
const discord = require("discord.js");
const { Client } = require("discord.js");
const bot = new Client({ disableMentions: "everyone" });

/////////////////////////////////

bot.on("ready", function() {
  console.log("Bot ready...");
});

/////////////////////////////////

const dbl = new DBL(process.env.TOPGG_TOKEN, {
  webhookPort: 3000,
  webhookAuth: process.env.TOPGG_AUTH
});

/////////////////////////////////

dbl.webhook.on("ready", hook => {
  console.log(
    `Vote Counter is running http://${hook.hostname}:${hook.port}${hook.path}`
  );
});

/////////////////////////////////

dbl.webhook.on("vote", async (vote, upvote) => {
  const channel = bot.channels.cache.get(process.env.CHANNEL_ID);

  /////////////////////////////////

  let plus = Math.floor(Math.random() * 0) + 1;
  db.add(`topggvotes_${vote.user}`, plus);
  let topggvotes = db.fetch(`topggvotes_${vote.user}`);
  if (topggvotes === null) topggvotes = 0;

  /////////////////////////////////

  db.add(`topggtotalvotes_`, plus);
  let topggtotalvotes = db.fetch(`topggtotalvotes_`);
  if (topggtotalvotes === null) topggtotalvotes = 0;

  /////////////////////////////////

  const voteusername = await bot.users.fetch(`${vote.user}`);

  /////////////////////////////////

  const embed = new discord.MessageEmbed()
    .setTitle(`Thanks for votting me`)
    .addField(
      `New Vote By`,
      `>>> <@${vote.user}>(**${voteusername.tag}**)(**${vote.user}**)`
    )
    .addField(`Vote Link`, `> [Here](${process.env.VOTE_LINK})`)
    .addField(`User Votes`, `> [${topggvotes}](${process.env.VOTE_LINK})`)
    .addField(`Total Votes`, `> [${topggtotalvotes}](${process.env.VOTE_LINK})`)
    .addField(
      `Github Repo`,
      `> [Link](https://github.com/AshishBytes/Top.gg-vote-counter)`
    )
    .setThumbnail(`${voteusername.displayAvatarURL()}`)
    .setImage(process.env.BANNER_LINK)
    .setFooter(`${bot.user.username}`, `${bot.user.displayAvatarURL()}`)
    .setTimestamp()
    .setColor(process.env.EMBED_COLOR);
  channel.send(embed);
});

/////////////////////////////////

bot.on("ready", () => {
  setInterval(() => {
    dbl.postStats(bot.guilds.cache.size);
  }, 1800000);
});

/////////////////////////////////

bot.login(process.env.BOT_TOKEN);
