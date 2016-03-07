'use strict';

const rtmClient = require('../slack_main').slack.rtm;
const webClient = require('../slack_main').slack.web;
const dataStore = require('../slack_main').slack.dataStore;

module.exports = (message) => {

  var generalChannel = dataStore.getChannelByName('general');
  var codingChannel = dataStore.getChannelByName('coding');
  var skgtechChannel = dataStore.getChannelByName('skgtech_io');
  var jobsChannel = dataStore.getChannelByName('jobs');
  var devitChannel = dataStore.getChannelByName('devitconf');

  var user = message.user;

  /*
   * @see https://api.slack.com/docs/formatting
   */
  var response = `<@${user.id}|${user.name}> Hello! ` +
                 `This is the advanced AI(a level beyond R2D2) bot built by the SKGTech team. I am welcoming you aboard. ` +
                 `This is the <#${generalChannel.id}|${generalChannel.name}> channel where we usually hang out. There is also the <#${codingChannel.id}|${codingChannel.name}>, the <#${skgtechChannel.id}|${skgtechChannel.name}> to get involved in our community, the <#${jobsChannel.id}|${jobsChannel.name}> to post a job and many more. ` +
                 `Also check our currently running projects: ` +
                 `* DEVit Conference 2016: Wanna get involved? Go to <#${devitChannel.id}|${devitChannel.name}> ` +
                 `* Official SKGTech site needs your help. Give us a hand: https://github.com/skgtech/skgtech.github.io/issues ` +
                 `* SKG Together event: Got a team in Thessaloniki? Tell us about it.`;

  webClient.dm.open(user.id,function(err,data){
    rtmClient.sendMessage(response,data.channel.id,function(){
      console.log("message succesfully sent to user "+user.name);
    })
  });
};
