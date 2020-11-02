const fetch = require("node-fetch");
const config = require("../secret/config");

module.exports = (ID, token, body) => {
        if(!ID) throw new Error("Missing botID")
            fetch(`${config.domain}${config.endpoints.postStats.replace(":id", `${ID}`)}`, {
                method: "POST",
                headers: {"authorization": token,"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then(async res => {console.log(await res.json())})
        
}