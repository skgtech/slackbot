'use strict';

const rtmClient = require('../slack_main').slack.rtm;
const webClient = require('../slack_main').slack.web;
const dataStore = require('../slack_main').slack.dataStore;

module.exports = (message) => {

  var user = dataStore.getUserById(message.user);

  /*
   * @see https://api.slack.com/docs/formatting
   */
  var response = `You said: ` +message.text;

  webClient.dm.open(user.id,function(err,data){
    rtmClient.sendMessage(response,data.channel.id,function(){
      console.log("message succesfully sent to user "+user.name);
    })
  });
};
