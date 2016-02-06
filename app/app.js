'use strict'

const Slack = require('slack-client');
const fs = require('fs');

const autoReconnect = true;
const autoMarkAsRead = true;

const slackToken = fs.readFileSync(__dirname + '/../.token', 'utf8').replace(/\n$/, '');

const slack = new Slack(slackToken, autoReconnect, autoMarkAsRead);

slack.on('open', () => {
  console.log(`Connected to ${slack.team.name}`);
});

/*
 * Main router that will delegate messages to controllers
 */
slack.on('raw_message', (message) => {

  let type = message.type;

  console.log(new Date(), type, ' message received.');

  if(type === 'team_join') {
    require('./app/controllers/team_join')(message);
  }

});

slack.on('error', (err) => {
    console.error('Error', err);
});

module.exports = () => {
    slack.login();
};
