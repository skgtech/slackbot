'use strict'

var slackMain = require('./controllers/slack_main');
var messageHandler = require('./controllers/team_join');

let slackbot = module.exports = () => {
  slackMain.login();
  messageHandler.handleMessages();
}
