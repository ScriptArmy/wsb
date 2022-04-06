const run = async (client, interaction) => {
  let member = interaction.options.getMember("user");
  let reason = interaction.options.getString("reason") || "No reason provided.";

  if (!member) return interaction.reply("Invalid member");

  try {
    await member.send("You have been kicked for **" + reason + "**");
    await member.kick(reason);
    interaction.reply(
      `**${member.user.tag}** has been kicked for the reason of **${reason}**.`
    );
  } catch (err) {
    console.error(err);
    interaction.reply(`Failed to kick ${member.user.tag}. **Error: ${err}**`);
    return client.guilds.cache
      .get("918030971306115074")
      .channels.cache.get("961128041239707708")
      .send(`Error found: **${err}**`);
  }
};

module.exports = {
  name: "kick",
  description: "Kick a member",
  perm: "MODERATE_MEMBER",
  options: [
    {
      name: "user",
      description: "The user to kick.",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "The reason for the punishment",
      type: "STRING",
      required: false,
    },
  ],
  run,
};
