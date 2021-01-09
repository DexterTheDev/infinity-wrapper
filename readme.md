# Infinty Api
> Maintainer Dexter#1000

> Join [Infinity Bot List](https://infinitybotlist.com/)

`Our infinity bot list main wrapper!`

*You can post 3 requests every 5 minutes (Rate Limit)*

> Post Requests
```js
const IBL = require("infinity-api"); // We import our api
const stats = new IBL("Your BotID", "Your Bot Api token") // Add botID string, And Authorization token from the bot page
    setInterval(() => { 
        stats.postStats("Guilds count" /*, "Shards Count" */) // Post guilds count and shards count
        }, 3e5)
    }) 
```

> Get Requests
```js
    // Get Bot Stats
    stats.getStats((data) => {
        console.log(data)
    })

    // Get User Stats
    stats.getUser("userID", (data) => {
        console.log(data)
    })
```
# Webhooks

```js
const infinity = require("infinity-api")
const IBL = new infinity("botID", "botAuth", {webPort: 3001, webPath: "/IBLhook", webAuth: "Auth you placed in custom webhooks"});

IBL.webhook.on("votes", (vote) => {
    console.log(vote) // Receive vote content
})
IBL.webhook.on("ready", console.log) // Once the webserver start u will get message
IBL.webhook.on("destroyed", console.log) // Any errors will be generated from him
```
