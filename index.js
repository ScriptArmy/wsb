require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

let bot = { client };
client.on("ready", () => {
  console.log(`${client.user.tag} is online!`);
});
client.slashcommands = new Discord.Collection();
client.loadSlashCommands = (bot, reload) =>
  require("./handlers/slashcommands.js")(bot, reload);
client.loadSlashCommands(bot, false);
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  if (!interaction.inGuild())
    return interaction.reply("This interaction can only be used in a guild.");
  const slashcmd = client.slashcommands.get(interaction.commandName);
  if (!slashcmd) return interaction.reply("Invalid slash command.");
  if (!slashcmd.perms && !interaction.member.permissions.has(slashcmd.perm))
    return interaction.reply(
      "You do not have the required permissions to run this command/interaction."
    );
  try {
    await slashcmd.run(client, interaction);
  } catch (err) {
    return client.guilds.cache
      .get("918030971306115074")
      .channels.cache.get("961128041239707708")
      .send(`Error found: **${err}**`);
  }
});
client.login(process.env.TOKEN);
