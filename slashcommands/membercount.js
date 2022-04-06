const run = async (client, interaction) => {
  try {
    await interaction.reply(`This server has
      **${client.guilds.cache
        .get("918030971306115074")
        .memberCount.toString()}** members!
    `);
  } catch (err) {
    console.error(err);
    interaction.reply(`Failed to show membercount **Error: ${err}**`);
    return client.guilds.cache
      .get("918030971306115074")
      .channels.cache.get("961128041239707708")
      .send(`Error found: **${err}**`);
  }
};

module.exports = {
  name: "membercount",
  description: "Show the membercount.",
  perm: "MODERATE_MEMBER",
  run,
};
