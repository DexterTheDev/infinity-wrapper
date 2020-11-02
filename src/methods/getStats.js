const fetch = require("node-fetch");
const config = require("../secret/config");

module.exports = (ID, response) => {
        if(!ID) throw new Error("Missing botID")
        fetch(`${config.domain}${config.endpoints.getBots.replace(":id", `${ID}`)}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then(async res => {
            response(await res.json())
        }).catch(err => {
            console.log(err);
        });
}