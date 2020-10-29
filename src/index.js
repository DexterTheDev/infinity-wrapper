const fetch = require("node-fetch");

class infinity {
    constructor(id, token, logs = false){
        this.id = id;
        this.token = token;
        this.logs = logs;
    }

    async post(servers, shards){
        fetch(`https://infinitybotlist.com/api/bots/${this.id}`, {
            method: "POST",
            headers: {"authorization": this.token,"Content-Type": "application/json"},
            body: JSON.stringify({servers, shards})
        }).then(async res => {
            if(this.logs) console.log(await res.json())
        })
    }

    async bot(botID, response){
        if(!botID) throw new Error("Missing botID")
        fetch(`https://infinitybotlist.com/api/bots/${botID}/info`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then(async res => {
            response(await res.json())
        })
    }

    async vote(botID, userID, response){
        if(!botID) throw new Error("Missing botID")
        if(!userID) throw new Error("Missing userID")
        fetch(`https://infinitybotlist.com/api/vote/${botID}/${userID}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then(async res => {
            response(await res.json())
        })
    }

    async user(userID, response){
        if(!userID) throw new Error("Missing userID")
        fetch(`https://infinitybotlist.com/api/users/${userID}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then(async res => {
            response(await res.json())
        })
    }
}

module.exports = infinity