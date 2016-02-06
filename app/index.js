'use strict';

var slackMain = require('./slack_main');
var slackRouter = require('./slack_router');

module.exports = () => {
  slackMain.login();
  slackRouter();
};
