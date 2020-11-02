const { getStats, getUser, postStats } = require("./methods/main.js")

class infinity {
    constructor(id, token){
        this.id = id;
        this.token = token;
    }

    postStats(servers, shards){
        postStats(this.id, this.token, {servers, shards: shards ? shards : 0})
    }

    getStats(response){
        getStats(this.id, response)
    }

    getUser(userID, response){
        getUser(userID, response)
    }
}
module.exports = infinity;