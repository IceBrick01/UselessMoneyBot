const { Client, GatewayIntentBits } = require('discord.js')

const { deploy, command } = require('./command')

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once('ready', () => {
  console.log('[Success]: Running bot [', client.user.tag, ']')
  //client.user.setPresence({ activities: [{ name: '' }] })
  deploy(client)
})

client.on('interactionCreate', async i => {
  if (i.isCommand()) {
    command(i, client)
  } else {
    return
  }
})

client.login('MTAzMDc5ODU3OTM3MzE3OTAzMA.Gw44NS.')
