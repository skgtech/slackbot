'use strict';

const Slack = require('slack-client');
const fs = require('fs');

const autoReconnect = true;
const autoMarkAsRead = true;

try{
  const slackToken = fs.readFileSync(__dirname + '/../.token', 'utf8').replace(/\n$/, '');
}
catch(e){
  if(e.code=='ENOENT'){
    console.log('There is no token in the root directory')
  }
  return;
}

const slack = new Slack(slackToken, autoReconnect, autoMarkAsRead);

const slackMain = module.exports = {};

slackMain.slack = slack;

slackMain.login = () => {
  slack.login();

  slack.on('open', () => {
    console.log(`Connected to ${slack.team.name}`);
  });
  slack.on('error', (err) => {
    console.error('Error', err);
  });
};
