# slackbot
This is our own Slack Bot implementation.

*Requires Nodejs > 4*

`$ npm i`

`$ npm run` to run the Bot ( You need a `.token` file at the root of the project with the [Bot's token](https://api.slack.com/bot-users))

`$ npm test` to run the Tests

## Extend the bot

1) Write your [Controller](https://github.com/skgtech/slackbot/blob/master/app/controllers/)

2) Add it to the [Router](https://github.com/skgtech/slackbot/blob/master/app/app.js#L27)

3) Write tests

4) PR!
