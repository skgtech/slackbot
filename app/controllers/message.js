'use strict';

const rtmClient = require('../index').rtmClient;
const dataStore = rtmClient.dataStore;

module.exports = (message) => {

  let user = dataStore.getUserById(message.user);

  /*
   * @see https://api.slack.com/docs/formatting
   */
  let response = `<@${user.id}|${user.name}> what?`;

  rtmClient.sendMessage(response, message.channel, function() {

    console.log('Message succesfully sent to user ' + user.name);
  });
};
