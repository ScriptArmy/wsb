const run = async (client, interaction) => {
  try {
    await interaction.reply("Test command works!");
  } catch (err) {
    interaction.reply("Failed to run test command. **Error: " + error + "**");
    return client.guilds.cache
      .get("918030971306115074")
      .channels.cache.get("961128041239707708")
      .send(`Error found: **${err}**`);
  }
};

module.exports = {
  name: "test",
  description: "Test command.",
  perm: "SEND_MESSAGES",
  run,
};
