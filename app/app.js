'use strict'

var slackMain = require('./slack_main');
var slackRouter = require('./slack_router');
var messageHandler = require('./controllers/team_join');

let slackbot = module.exports = () => {
  slackMain.login();
  slackRouter();
  messageHandler.handleMessages();
}
