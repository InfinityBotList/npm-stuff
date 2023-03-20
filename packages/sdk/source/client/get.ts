import fetch from "node-fetch";
import { log } from "../plugins/Logger";

export default class InfinityFetcher {
    private apiKey: String;
    private botID: String;

    constructor(options = {
        auth: "",
        botID: ""
    }) {

        this.apiKey = options.auth;
        this.botID = options.botID;
    };

    async getUserVotes (userID?: String) {

        if (!this.apiKey) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid API Token");
        if (!userID) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid User ID");
        if (!this.botID) throw new ReferenceError("[@infinity/node-sdk]: Please provide a valid Bot ID");

        let res = await fetch(`https://spider.infinitybots.gg/users/${userID}/bots/${this.botID}/votes`, {
            method: "GET",
            headers: {
                "Authorization": `${this.apiKey}`,
                "Content-Type": "application/json"
            }
        });

        const voteData = await res.json();

        return {
            has_voted: voteData.has_voted,
            last_vote_time: voteData.last_vote_time,
            premium_bot: voteData.premium_bot,
            ts: voteData.ts,
            user_id: voteData.user_id,
            vote_info: {
                is_weekend: voteData.vote_info.is_weekend,
                vote_time: voteData.vote_info.vote_time
            }
        }
    }
    
    async getBotInfo() {
        
        if (!this.botID) throw new ReferenceError("[@infinitybots/node-sdk]: Please provide a valid Bot ID");

        let res = await fetch(`https://spider.infinitybots.gg/bots/${this.botID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }); 

        const botData = await res.json();

        return {
            bot_id: botData.bot_id,
            banner: botData.banner,
            invite: botData.invite,
            library: botData.library,
            staff_bot: botData.staff_bot,
            long_desc: botData.long,
            short_desc: botData.short,
            extra_links: botData.extra_links,
            statistics: {
                servers: botData.servers,
                shards: botData.shards,
                users: botData.users,
                votes: botData.votes
            },
        }
    }
}