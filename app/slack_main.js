'use strict';

const Slack = require('@slack/client');

const RtmClient = Slack.RtmClient;
const WebClient = Slack.WebClient;
const DataStore = Slack.MemoryDataStore;

const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

const fs = require('fs');

const simpleLatest = true;
const noUnreads = true;


try{
  const slackToken = fs.readFileSync(__dirname + '/../.token', 'utf8').replace(/\n$/, '');

  const rtm = new RtmClient(slackToken,simpleLatest,noUnreads);
  const web = new WebClient(slackToken);
  const dataStore = new DataStore();

  const slackMain = module.exports = {};  

  slackMain.slack = {
    rtm,
    web,
    dataStore
  };

  slackMain.start = () => {
    rtm.start();

    rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
      console.log(`Connected to ${rtmStartData.team.name}`);
      dataStore.cacheRtmStart(rtmStartData);
    });
    rtm.on(CLIENT_EVENTS.RTM.UNABLE_TO_RTM_START, (err) => {
      console.error('Error', err);
    });
  };

}
catch(e){
  if(e.code=='ENOENT'){
    console.log('There is no token in the root directory')
  }
  else{
    console.log(e);
  }
  return;
}
