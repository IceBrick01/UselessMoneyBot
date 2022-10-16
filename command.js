const { REST } = require('@discordjs/rest')
const { Routes, SlashCommandBuilder, PermissionFlagsBits, SlashCommandAssertions } = require('discord.js')

//cmd.js

module.exports = { deploy, command }

const commands = [
  new SlashCommandBuilder()
    .setName('help')
    .setDescription('Help'),
]

const clientId = '1030798579373179030'
const guildId = '1030798874853507152'

async function deploy (client) {
  const rest = new REST ({ version: '10'}).setToken(client.token)

  try {
    console.log(`[Process]: Started depolying application (/) commands.`)
    await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
    )    
    console.log(`[Success]: Successfully deployed application (/) commands.`)
  } catch (error) {
    console.error(error)
  }
}

async function command (i, client) {
  if (i.commandName === 'help') {
    //help(i)
  } else {
    console.log(i)
  }
}