'use strict';

const Controllers = require('./controllers');
const rtmEvents = require('@slack/client').RTM_EVENTS;

module.exports = (rtmClient) => {

  /*
   * Main router that will delegate messages to controllers
   * @TODO: create a function to auto require the controllers
   */
  rtmClient.on(rtmEvents.TEAM_JOIN,(message) => {

    Controllers.teamJoin(message);
  });

  rtmClient.on(rtmEvents.MESSAGE,(message) => {

    Controllers.message(message);
  });
};
