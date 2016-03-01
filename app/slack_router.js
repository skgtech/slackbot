'use strict';

const teamJoin = require('./controllers/team_join');
const rtmClient = require('./slack_main').slack.rtm;
const webClient = require('./slack_main').slack.web;
const dataStore = require('./slack_main').slack.dataStore;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

module.exports = () => {
  /*
   * Main router that will delegate messages to controllers
   */
  rtmClient.on(RTM_EVENTS.TEAM_JOIN,(message) => {
  	console.log(message);
    require('./controllers/team_join')(message);
  });
};
