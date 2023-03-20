import fetch from "node-fetch";
import { log } from "../plugins/Logger";

export default class InfinityPoster {
    private apiKey: String;
    private botID: String;

    constructor(options = {
        auth: "",
        botID: ""
    }) {

        this.apiKey = options.auth;
        this.botID = options.botID;
    };

    /**
     * 
     * @param servers The Discord Client Server Count
     * @returns 
     */
    async postServerCount(servers?: Number) {

        if (!this.apiKey) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid API Token");
        if (!this.botID) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid Bot ID");

        if (!servers) return log('Please provide a valid server count.. Should be a integer of 1 or greater!', {
            header: "MALFORMED REQUEST",
            type: "error"
        })

        await fetch(`https://spider.infinitybots.gg/bots/stats`, {
            method: "POST",
            headers: {
                "Authorization": `${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                servers: servers
            })
        });
    };

    /**
     * Post Client Shard Count
     * @param shards The Discord Client Shard Count
     * @returns
     */
    async postShardCount(shards?: Number) {

        if (!this.apiKey) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid API Token");
        if (!this.botID) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid Bot ID");

        if (!shards) return log('Please provide a valid shard count... Should be a integer of 1 or greater', {
            header: "MALFORMED_REQUEST",
            type: "error"
        })

        await fetch(`https://spider.infinitybots.gg/bots/stats`, {
            method: "POST",
            headers: {
                "Authorization": `${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                shards: shards
            })
        })
    }
    
    /**
     * Post Client User Count
     * @param user_count The Discord Client User Count
     * @returns
     */
    async postUserCount(user_count?: Number) {

        if (!this.apiKey) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid API Token");
        if (!this.botID) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid Bot ID");

        if (!user_count) return log('Please provide a valid user count... Should be a integer of 1 or greater', {
            header: "MALFORMED_REQUEST",
            type: "error"
        })

        await fetch(`https://spider.infinitybots.gg/bots/stats`, {
            method: "POST",
            headers: {
                "Authorization": `${this.apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_count: user_count
            })
        })

    }
}

