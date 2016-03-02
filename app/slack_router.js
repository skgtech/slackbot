'use strict';

const Controllers = require('./controllers');
const rtmClient = require('./slack_main').slack.rtm;
const webClient = require('./slack_main').slack.web;
const dataStore = require('./slack_main').slack.dataStore;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

module.exports = () => {
  /*
   * Main router that will delegate messages to controllers
   */
  rtmClient.on(RTM_EVENTS.TEAM_JOIN,(message) => {
    Controllers.teamJoin(message);
  });

  rtmClient.on(RTM_EVENTS.MESSAGE,(message) => {
    Controllers.message(message);
  });
};
