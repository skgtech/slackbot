'use strict';

const slackClient = require('@slack/client');
const fs = require('fs');
const winston = require('winston');
const RtmClient = slackClient.RtmClient;
const MemoryDataStore = slackClient.MemoryDataStore;
const clientEvents = slackClient.CLIENT_EVENTS;

const AUTO_RECONNECT = true;
const AUTO_MARK_AS_READ = true;

let slackToken = '';
try {

  slackToken = fs.readFileSync(__dirname + '/../.token', 'utf8').replace(/\n$/, '');
} catch (e) {

  throw new Error('There is no token in the root directory');
}

const rtmClient = new RtmClient(slackToken, {
  autoReconnect: AUTO_RECONNECT,
  autoMarkAsRead: AUTO_MARK_AS_READ,
  dataStore: new MemoryDataStore(),
  logger: winston.log
});

const slackMain = module.exports = {};
slackMain.rtmClient = rtmClient;

slackMain.start = () => {

  rtmClient.start();

  rtmClient.on(clientEvents.RTM.AUTHENTICATED, (rtmStartData) => {

    console.log(`Connected to ${rtmStartData.team.name}`);

    rtmClient.on(clientEvents.RTM.RTM_CONNECTION_OPENED, function () {

      require('./router')(rtmClient);
    });
  });

  rtmClient.on(clientEvents.RTM.UNABLE_TO_RTM_START, (err) => {

    throw new Error(err);
  });
};
