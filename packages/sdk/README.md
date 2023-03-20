# Infinity Node SDK
Simple module for interacting with the Infinity Bot List API!

## Quick Links
- [Installation](#install)
- [InfinityPoster](#infinity-poster)
- [InfinityFetcher](#infinity-fetcher) 

---

## Install
```js
npm i @infinitybots/node-sdk
```

or

```js
npm i @infinitybots/node-sdk@latest
```

---

## Infinity Poster
Post your Server, Shard or User Count

### Request Headers

| Header                 | Description                       | Value                                   |
|----------------------  |:---------------------------------:|----------------------------------------:|
| auth                   | Your bots IBL API Token           | Can be found in the "edit bot" page     |
| botID                  | Your bots Client ID               | Should be a discord snowflake           |

### Usage Examples

#### Post Server Count

```js
const { InfinityPoster } = require("@infinitybots/node-sdk")

const ibl = new InfinityPoster({
    auth: "YOUR_BOTS_API_KEY",
    botID: "YOUR_BOTS_ID"
});

ibl.postServerCount(SERVER_COUNT_HERE).catch((err) => {
    console.log(`${err.message}`)
})

console.log("Posted server count successfully");
```

#### Post Shard Count

```js
const { InfinityPoster } = require("@infinitybots/node-sdk")

const ibl = new InfinityPoster({
    auth: "YOUR_BOTS_API_KEY",
    botID: "YOUR_BOTS_ID"
});

ibl.postShardCount(SHARD_COUNT_HERE).catch((err) => {
    console.log(`${err.message}`)
})

console.log("Posted shard count successfully");
```

#### Post User Count

```js
const { InfinityPoster } = require("@infinitybots/node-sdk")

const ibl = new InfinityPoster({
    auth: "YOUR_BOTS_API_KEY",
    botID: "YOUR_BOTS_ID"
});

ibl.postUserCount(USER_COUNT_HERE).catch((err) => {
    console.log(`${err.message}`)
})

console.log("Posted user count successfully");
```

---

## Infinity Fetcher
Fetch bot information such as checking if a user has voted!

### User Vote Status
Check if a user has voted for your bot recently

| Response               | Description                               | Value                           |
|----------------------  |:---------------------------------:|----------------------------------------:|
| has_voted              | If the user has voted recently    | Returns true or false                   |
| last_vote_time         | Time of the last logged vote      | Returns a hex value                     |
| premium_bot            | If the bot is premium or not      | Returns true or false                   |
| user_id                | ID of the user who voted          | Returns a discord snowflake             |
| vote_info.is_weekend   | If weekend voting is enabled      | Returns true or false                   |
| vote_info.vote_time    | The time of the vote              | Returns a numerical value               |

#### Usage Example

```js
const { InfinityFetcher } = require("@infinitybots/node-sdk")

const ibl = new InfinityFetcher({
    auth: "YOUR_BOTS_API_KEY",
    botID: "YOUR_BOTS_ID"
});

const results = await ibl.getUserVotes(USER_ID_HERE);

console.log(`${results.has_voted}`);
```


