const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`)

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const config = require('./config/config');

client.login(config.DISCORD_BOT.TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity('Zobaczcie jaka pizza, z francji!', ({type: "WATCHING"}));
});


client.on('messageCreate', (message) => {
  
    if((message.content === 'aha') || (message.content === 'Aha') || (message.content === 'AHA'))
    {
      let url = 'https://media.discordapp.net/attachments/647042557917790208/991659863316889671/aha.gif';
      message.channel.send(url);
    }
 
    if((message.content === 'okok') || (message.content === 'Okok'))
    {
      let url = 'https://media.tenor.com/TUqzsM47N1EAAAAC/dawid-jasper.gif';
      message.channel.send(url);
    }

    if((message.content === 'sadge') )
    {
      let url = 'https://cdn.discordapp.com/attachments/1031158523092029542/1033835623288684615/3x.gif';
      message.channel.send(url);
    }
    
    if((message.content === 'lmao') || (message.content === 'Lmao'))
    {
      let url = 'https://cdn.discordapp.com/attachments/1035696868677664768/1038086471594287124/jasperL.gif';
      message.channel.send(url);
    }

    if((message.content === 'halo') || (message.content === 'Halo'))
    {
      let url = 'https://cdn.discordapp.com/attachments/1035696868677664768/1038086458856181841/halo.gif';
      message.channel.send(url);
    }
  });
 