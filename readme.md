# Infinty Api
**Maintainer Dexter#1337**

`Post bot stats to out bot list api`

*You can post once every 5 minutes (Rate Limit)*

```js
const { Client } = require("discord.js") //import client from discord api @12.3.1
const client = new Client();
const IBL = require("infinity-api"); // we import our api
const stats = new IBL(client.user.id, "bot-auth-token", true) // true means give response
const prefix = "!";

client.on("ready", () => { // ready listener
    console.log(`Logged in as ${client.user.tag}`)
    setInterval(() => { 
        stats.post(client.guilds.cache.size)
        // stats.post(client.guilds.cache.size, client.shard.count) // for shards
        }, 3e5)
    }) 
client.on("message", message => { // message listener
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(message.content == (prefix + "ping")){
        message.reply(`Pong ${client.ws.ping}ms`)
    }
})


client.login("token")
```

*Get method*
```js
const { Client } = require("discord.js") //import client from discord api @12.3.1
const client = new Client();
const IBL = require("infinity-api"); // we import our api
const stats = new IBL()
const prefix = "!";

client.on("ready", () => { // ready listenerconsole.log(`Logged in as ${client.user.tag}`)}) 
client.on("message", message => { // message listener
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(message.content == (prefix + "ping")){
        message.reply(`Pong ${client.ws.ping}ms`)
    }
     if(message.content == (prefix + "stats")){
        stats.bot((data) => { // ID should be string
        let embed = new MessageEmbed()
        .setTitle(data.bot_name)
        .setDescription(`
        Votes: ${data.votes},
        Support: ${data.support},
        Website: ${data.website},
        Donate: ${data.donate},
        Certified: ${data.certified},
        Tags: ${data.tags}
        Prefix: ${data.prefix},
        Library: ${data.library},
        Description: ${data.short_desc},
        Servers: ${data.servers},
        Shards: ${data.shards},
        Staff: ${data.staff}
        `)
        .setFooter(`Bot created by ${data.owner}`)
        })
        message.channel.send(embed)
    }

    if(message.content == (prefix + "user")){
        stats.user("userID", (data) => { // ID should be string
        let embed = new MessageEmbed()
        .setTitle(`${data.username}'s Stats`)
        .setDescription(`
        Developer: ${data.developer},
        Staff: ${data.staff},
        Certified: ${data.certified},
        About: ${data.about},
        `)
        })
        message.channel.send(embed)
    }
})


client.login("token")
```
