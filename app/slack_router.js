'use strict';

var teamJoin = require('./controllers/team_join');
var slackClient = require('./slack_main').slack;

module.exports = () => {
  /*
   * Main router that will delegate messages to controllers
   */
  slackClient.on('raw_message', (message) => {

    let type = message.type;

    console.log(new Date(), type, ' message received.');

    /**
     * @TODO: parse the controllers/ dir and build the routes
     */
    if (type === 'team_join') {
      require('./controllers/team_join')(message);
    }

  });
};
